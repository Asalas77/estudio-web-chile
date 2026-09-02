import { useMemo, useState } from 'react'
import {
  TIPOS_SITIO,
  EXTRAS_SITIO,
  PLANES_MANTENCION,
  PRECIO_SECCION_EXTRA,
  EXPRESS,
  MODULOS_AUTO,
  META_POR_MENSAJE,
  DESCUENTO_PACK,
  IVA,
  clp,
} from '../data/pricing.js'
import { NEGOCIO, linkWhatsApp } from '../data/config.js'
import { CheckChico, Info, WhatsApp, Rayo } from './Icons.jsx'

// Costos que NO cobramos nosotros: se estiman aparte para que el
// cliente sepa el costo total real de operar lo que está cotizando.
const TERCEROS = {
  hosting: { label: 'Hosting + dominio .cl', valor: 9000 },
  bsp: { label: 'Proveedor de WhatsApp API', valor: 25000 },
  redes: { label: 'Programador de redes sociales', valor: 18000 },
  ia: { label: 'Consumo del modelo de IA', valor: 12000 },
}

const GRUPOS_AUTO = ['WhatsApp', 'Redes sociales', 'Conexiones']

export default function CalculadoraPrecios() {
  const [tab, setTab] = useState('sitio')

  // --- Estado del sitio web ---
  const [tipoId, setTipoId] = useState('corporativo')
  const [seccionesExtra, setSeccionesExtra] = useState(0)
  const [extras, setExtras] = useState([])
  const [planId, setPlanId] = useState('pro')
  const [express, setExpress] = useState(false)

  // --- Estado de automatización ---
  const [modulos, setModulos] = useState([])
  const [msgUtilidad, setMsgUtilidad] = useState(300)
  const [msgMarketing, setMsgMarketing] = useState(200)

  // --- Presentación ---
  const [conIva, setConIva] = useState(false)

  const tipo = TIPOS_SITIO.find((t) => t.id === tipoId) || null
  const plan = PLANES_MANTENCION.find((p) => p.id === planId)

  const alternar = (lista, set, id) =>
    set(lista.includes(id) ? lista.filter((x) => x !== id) : [...lista, id])

  const extrasDisponibles = EXTRAS_SITIO.filter(
    (e) => !e.soloPara || (tipo && e.soloPara.includes(tipo.id))
  )

  const modulosElegidos = useMemo(
    () => MODULOS_AUTO.filter((m) => modulos.includes(m.id)),
    [modulos]
  )
  const usaMeta = modulosElegidos.some((m) => m.consumoMeta)

  // ------------------------------------------------------------
  //  Cálculo
  // ------------------------------------------------------------
  const c = useMemo(() => {
    const lineasUnico = []
    const lineasMensual = []

    // Sitio web
    let sitioUnico = 0
    if (tipo) {
      sitioUnico += tipo.precio
      lineasUnico.push({ grupo: 'Sitio web', label: tipo.nombre, valor: tipo.precio })

      if (seccionesExtra > 0) {
        const v = seccionesExtra * PRECIO_SECCION_EXTRA
        sitioUnico += v
        lineasUnico.push({ label: `${seccionesExtra} sección(es) adicional(es)`, valor: v })
      }

      EXTRAS_SITIO.filter((e) => extras.includes(e.id)).forEach((e) => {
        sitioUnico += e.precio
        lineasUnico.push({ label: e.nombre, valor: e.precio })
      })

      if (express) {
        const v = Math.round(sitioUnico * EXPRESS.recargo)
        sitioUnico += v
        lineasUnico.push({ label: `Entrega express (+${EXPRESS.recargo * 100}%)`, valor: v })
      }
    }

    // Automatización
    let autoUnico = 0
    let autoMensual = 0
    modulosElegidos.forEach((m, i) => {
      autoUnico += m.setup
      autoMensual += m.mensual
      lineasUnico.push({
        grupo: i === 0 ? 'Automatización' : undefined,
        label: m.nombre,
        valor: m.setup,
      })
      if (m.mensual > 0) {
        lineasMensual.push({
          grupo: lineasMensual.length === 0 ? 'Automatización' : undefined,
          label: m.nombre,
          valor: m.mensual,
        })
      }
    })

    // Plan mensual del sitio
    if (plan && plan.precio > 0) {
      if (lineasMensual.length) lineasMensual[0] = { ...lineasMensual[0], grupo: 'Automatización' }
      lineasMensual.unshift({ grupo: 'Sitio web', label: `Plan ${plan.nombre}`, valor: plan.precio })
    }

    // Descuento por contratar sitio + automatización juntos
    const hayPack = !!tipo && modulosElegidos.length > 0
    const bruto = sitioUnico + autoUnico
    const descuento = hayPack ? Math.round(bruto * DESCUENTO_PACK) : 0
    if (descuento) {
      lineasUnico.push({
        label: `Descuento pack web + automatización (${DESCUENTO_PACK * 100}%)`,
        valor: -descuento,
        descuento: true,
      })
    }

    const totalUnico = bruto - descuento
    const totalMensual = (plan ? plan.precio : 0) + autoMensual

    // Costos de terceros (estimación mensual)
    const terceros = []
    if (tipo && (!plan || plan.precio === 0)) terceros.push(TERCEROS.hosting)
    if (modulosElegidos.some((m) => m.consumoMeta)) terceros.push(TERCEROS.bsp)
    if (modulosElegidos.some((m) => m.grupo === 'Redes sociales')) terceros.push(TERCEROS.redes)
    if (modulos.includes('ia')) terceros.push(TERCEROS.ia)

    const consumoMeta = usaMeta
      ? msgUtilidad * META_POR_MENSAJE.utility + msgMarketing * META_POR_MENSAJE.marketing
      : 0

    const tercerosTotal =
      terceros.reduce((a, t) => a + t.valor, 0) + consumoMeta

    return {
      lineasUnico,
      lineasMensual,
      totalUnico,
      totalMensual,
      terceros,
      consumoMeta,
      tercerosTotal,
      descuento,
    }
  }, [tipo, seccionesExtra, extras, express, plan, modulos, msgUtilidad, msgMarketing, usaMeta, modulosElegidos])

  const f = (n) => clp(conIva ? n * (1 + IVA) : n)
  const vacio = c.lineasUnico.length === 0 && c.lineasMensual.length === 0

  // ------------------------------------------------------------
  //  Mensaje de WhatsApp con la cotización armada
  // ------------------------------------------------------------
  const mensaje = useMemo(() => {
    const L = ['Hola, armé mi cotización en el sitio:', '']
    if (tipo) {
      L.push(`*Sitio web:* ${tipo.nombre}`)
      if (seccionesExtra) L.push(`- ${seccionesExtra} sección(es) extra`)
      EXTRAS_SITIO.filter((e) => extras.includes(e.id)).forEach((e) => L.push(`- ${e.nombre}`))
      if (express) L.push('- Entrega express')
      if (plan && plan.precio > 0) L.push(`- Plan mensual: ${plan.nombre}`)
    }
    if (modulosElegidos.length) {
      L.push('', '*Automatización:*')
      modulosElegidos.forEach((m) => L.push(`- ${m.nombre}`))
      if (usaMeta) L.push(`- Volumen: ${msgUtilidad} mensajes de utilidad y ${msgMarketing} de marketing al mes`)
    }
    L.push('')
    L.push(`*Inversión inicial:* ${f(c.totalUnico)} ${conIva ? '(IVA incluido)' : '+ IVA'}`)
    if (c.totalMensual > 0) L.push(`*Mensualidad:* ${f(c.totalMensual)} ${conIva ? '(IVA incluido)' : '+ IVA'}`)
    if (c.tercerosTotal > 0) L.push(`*Costos de terceros estimados:* ${clp(c.tercerosTotal)} al mes`)
    L.push('', '¿Lo vemos?')
    return L.join('\n')
  }, [tipo, seccionesExtra, extras, express, plan, modulosElegidos, usaMeta, msgUtilidad, msgMarketing, c, conIva])

  const maxSecciones = tipo ? (tipo.id === 'landing' ? 4 : 12) : 0

  return (
    <section className="calc" id="calculadora">
      <div className="wrap">
        <div className="section-head centro">
          <span className="eyebrow">Calculadora</span>
          <h2>Arma tu proyecto y mira el precio</h2>
          <p>
            Todo lo que marques se suma en tiempo real. Al final puedes enviarte la
            cotización por WhatsApp con un clic.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="calc-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={tab === 'sitio'}
              className={'calc-tab' + (tab === 'sitio' ? ' activa' : '')}
              onClick={() => setTab('sitio')}
            >
              1 · Sitio web
            </button>
            <button
              role="tab"
              aria-selected={tab === 'auto'}
              className={'calc-tab' + (tab === 'auto' ? ' activa violeta' : '')}
              onClick={() => setTab('auto')}
            >
              2 · Automatización
            </button>
          </div>
        </div>

        <div className="calc-grid">
          {/* ============ COLUMNA IZQUIERDA ============ */}
          <div>
            {tab === 'sitio' ? (
              <>
                <Paso num="1" titulo="¿Qué necesitas?" ayuda="Elige el punto de partida.">
                  <div className="opciones">
                    {TIPOS_SITIO.map((t) => (
                      <button
                        key={t.id}
                        className={'opcion' + (tipoId === t.id ? ' activa' : '')}
                        onClick={() => {
                          setTipoId(t.id)
                          setSeccionesExtra(0)
                        }}
                      >
                        <span className="opcion-nombre">{t.nombre}</span>
                        <span className="opcion-desc">{t.resumen}</span>
                        <span className="opcion-precio">{f(t.precio)}</span>
                      </button>
                    ))}
                  </div>
                </Paso>

                <Paso
                  num="2"
                  titulo="¿Cuántas páginas más?"
                  ayuda={
                    tipo
                      ? `Tu plan ya incluye ${tipo.secciones} ${tipo.secciones === 1 ? 'página' : 'páginas'}.`
                      : ''
                  }
                >
                  <div className="contador">
                    <div className="contador-info">
                      <strong>Páginas adicionales</strong>
                      <span>{clp(PRECIO_SECCION_EXTRA)} cada una (servicios, sucursales, casos…)</span>
                    </div>
                    <div className="contador-ctrl">
                      <button
                        className="contador-btn"
                        onClick={() => setSeccionesExtra((v) => Math.max(0, v - 1))}
                        disabled={seccionesExtra === 0}
                        aria-label="Quitar página"
                      >
                        −
                      </button>
                      <span className="contador-valor">{seccionesExtra}</span>
                      <button
                        className="contador-btn"
                        onClick={() => setSeccionesExtra((v) => Math.min(maxSecciones, v + 1))}
                        disabled={seccionesExtra >= maxSecciones}
                        aria-label="Agregar página"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </Paso>

                <Paso num="3" titulo="Adicionales" ayuda="Marca solo lo que te sirve.">
                  <div className="opciones">
                    {extrasDisponibles.map((e) => (
                      <button
                        key={e.id}
                        className={'opcion' + (extras.includes(e.id) ? ' activa' : '')}
                        onClick={() => alternar(extras, setExtras, e.id)}
                      >
                        <span className="opcion-check">
                          {extras.includes(e.id) && <CheckChico />}
                        </span>
                        <span className="opcion-nombre">{e.nombre}</span>
                        <span className="opcion-desc">{e.desc}</span>
                        <span className="opcion-precio">+ {f(e.precio)}</span>
                      </button>
                    ))}

                    <button
                      className={'opcion' + (express ? ' activa' : '')}
                      onClick={() => setExpress((v) => !v)}
                    >
                      <span className="opcion-check">{express && <CheckChico />}</span>
                      <span className="opcion-nombre">
                        <Rayo width="15" height="15" /> {EXPRESS.nombre}
                      </span>
                      <span className="opcion-desc">{EXPRESS.desc}</span>
                      <span className="opcion-precio">+ {EXPRESS.recargo * 100}%</span>
                    </button>
                  </div>
                </Paso>

                <Paso num="4" titulo="Plan mensual" ayuda="Puedes empezar sin plan y sumarlo después.">
                  <div className="opciones">
                    {PLANES_MANTENCION.map((p) => (
                      <button
                        key={p.id}
                        className={'opcion' + (planId === p.id ? ' activa' : '')}
                        onClick={() => setPlanId(p.id)}
                      >
                        <span className="opcion-nombre">{p.nombre}</span>
                        <span className="opcion-desc">{p.desc}</span>
                        <span className="opcion-precio">
                          {p.precio === 0 ? 'Sin costo mensual' : `${f(p.precio)} / mes`}
                        </span>
                      </button>
                    ))}
                  </div>
                </Paso>
              </>
            ) : (
              <>
                {GRUPOS_AUTO.map((g, gi) => (
                  <Paso
                    key={g}
                    num={String(gi + 1)}
                    titulo={g}
                    ayuda={
                      g === 'WhatsApp'
                        ? 'Desde ordenar tu WhatsApp actual hasta un bot que atiende solo.'
                        : g === 'Redes sociales'
                        ? 'Publicar sin acordarse de publicar.'
                        : 'Que tus herramientas se hablen entre ellas.'
                    }
                  >
                    <div className="opciones">
                      {MODULOS_AUTO.filter((m) => m.grupo === g).map((m) => (
                        <button
                          key={m.id}
                          className={'opcion violeta' + (modulos.includes(m.id) ? ' activa' : '')}
                          onClick={() => alternar(modulos, setModulos, m.id)}
                        >
                          <span className="opcion-check">
                            {modulos.includes(m.id) && <CheckChico />}
                          </span>
                          <span className="opcion-nombre">{m.nombre}</span>
                          <span className="opcion-desc">{m.desc}</span>
                          <span className="opcion-precio violeta">
                            {m.setup > 0 ? f(m.setup) : 'Sin costo inicial'}
                            {m.mensual > 0 && ` + ${f(m.mensual)}/mes`}
                          </span>
                          {m.nota && <span className="opcion-nota">{m.nota}</span>}
                        </button>
                      ))}
                    </div>
                  </Paso>
                ))}

                {usaMeta && (
                  <Paso
                    num="4"
                    titulo="¿Cuántos mensajes vas a enviar?"
                    ayuda="Meta cobra por mensaje enviado. Esto no lo cobramos nosotros."
                  >
                    <Slider
                      label="Mensajes de utilidad al mes"
                      ayuda={`Confirmaciones, recordatorios, avisos de despacho. ${clp(META_POR_MENSAJE.utility)} c/u.`}
                      valor={msgUtilidad}
                      setValor={setMsgUtilidad}
                      max={3000}
                      paso={50}
                      costo={msgUtilidad * META_POR_MENSAJE.utility}
                    />
                    <Slider
                      label="Mensajes de marketing al mes"
                      ayuda={`Promociones y campañas a tu base de clientes. ${clp(META_POR_MENSAJE.marketing)} c/u.`}
                      valor={msgMarketing}
                      setValor={setMsgMarketing}
                      max={3000}
                      paso={50}
                      costo={msgMarketing * META_POR_MENSAJE.marketing}
                    />
                    <div className="aviso">
                      <Info />
                      <span>
                        Desde el <strong>1 de octubre de 2026</strong> Meta también cobra los
                        mensajes de servicio dentro de la ventana de 24 horas. Lo consideramos
                        al diseñar los flujos para que no se te dispare la cuenta.
                      </span>
                    </div>
                  </Paso>
                )}
              </>
            )}
          </div>

          {/* ============ PANEL DE RESUMEN ============ */}
          <aside className="resumen">
            <h3>Tu cotización</h3>
            <p className="resumen-sub">Se actualiza mientras eliges.</p>

            {vacio ? (
              <div className="resumen-vacio">
                Elige un tipo de proyecto para ver el precio.
              </div>
            ) : (
              <>
                <div className="resumen-lineas">
                  {c.lineasUnico.map((l, i) => (
                    <Linea key={'u' + i} l={l} f={f} />
                  ))}
                  {c.lineasMensual.length > 0 && (
                    <>
                      <div className="linea grupo" style={{ marginTop: 12 }}>
                        <span>Mensual</span>
                      </div>
                      {c.lineasMensual.map((l, i) => (
                        <Linea key={'m' + i} l={l} f={f} sufijo=" /mes" />
                      ))}
                    </>
                  )}
                </div>

                <div className="total-bloque">
                  <div className="total">
                    <span className="total-label">
                      Inversión inicial
                      <small>pago único</small>
                    </span>
                    <span className="total-valor verde">{f(c.totalUnico)}</span>
                  </div>

                  {c.totalMensual > 0 && (
                    <div className="total">
                      <span className="total-label">
                        Mensualidad
                        <small>cancelable con 30 días de aviso</small>
                      </span>
                      <span className="total-valor chico">{f(c.totalMensual)}</span>
                    </div>
                  )}

                  {c.tercerosTotal > 0 && (
                    <div className="total">
                      <span className="total-label">
                        Costos de terceros
                        <small>Meta, hosting y herramientas</small>
                      </span>
                      <span className="total-valor chico" style={{ color: 'var(--muted)' }}>
                        ~{clp(c.tercerosTotal)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="iva-toggle" onClick={() => setConIva((v) => !v)} role="button" tabIndex={0}>
                  <span className={'switch' + (conIva ? ' on' : '')} />
                  {conIva ? 'Mostrando precios con IVA (19%)' : 'Mostrar precios con IVA (19%)'}
                </div>

                <a
                  className="btn btn-primario btn-bloque"
                  href={linkWhatsApp(mensaje)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsApp /> Enviar esta cotización
                </a>

                <p className="resumen-pie">
                  Valor referencial válido por {NEGOCIO.validezCotizacion}. Antes de empezar
                  recibes una propuesta formal con alcance, plazos y forma de pago
                  (50% al inicio, 50% contra entrega).
                </p>

                {c.tercerosTotal > 0 && (
                  <div className="aviso">
                    <Info />
                    <span>
                      Los costos de terceros se pagan directamente al proveedor
                      {c.consumoMeta > 0 && <> (de ellos, ~{clp(c.consumoMeta)} son mensajes de Meta)</>}.
                      Nunca los marginamos.
                    </span>
                  </div>
                )}
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ---------- Subcomponentes ---------- */

function Paso({ num, titulo, ayuda, children }) {
  return (
    <div className="calc-paso">
      <div className="calc-paso-titulo">
        <span className="calc-paso-num">{num}</span>
        <div>
          <h3>{titulo}</h3>
          {ayuda && <span>{ayuda}</span>}
        </div>
      </div>
      {children}
    </div>
  )
}

function Linea({ l, f, sufijo = '' }) {
  return (
    <>
      {l.grupo && (
        <div className="linea grupo">
          <span>{l.grupo}</span>
        </div>
      )}
      <div className={'linea' + (l.descuento ? ' descuento' : '')}>
        <span>{l.label}</span>
        <span>
          {l.valor < 0 ? '− ' + f(-l.valor) : f(l.valor)}
          {sufijo}
        </span>
      </div>
    </>
  )
}

function Slider({ label, ayuda, valor, setValor, max, paso, costo }) {
  return (
    <div className="slider-box">
      <div className="slider-head">
        <strong>{label}</strong>
        <span className="slider-valor">{valor.toLocaleString('es-CL')}</span>
      </div>
      <p>{ayuda}</p>
      <input
        type="range"
        min="0"
        max={max}
        step={paso}
        value={valor}
        onChange={(e) => setValor(Number(e.target.value))}
        aria-label={label}
      />
      <p style={{ textAlign: 'right', marginTop: 8, marginBottom: 4 }}>
        Costo de Meta: <strong className="texto-violeta">{clp(costo)}</strong> al mes
      </p>
    </div>
  )
}
