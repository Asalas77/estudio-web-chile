import { TIPOS_SITIO, PLANES_MANTENCION, clp } from '../data/pricing.js'
import { linkWhatsApp } from '../data/config.js'
import { CheckChico, Reloj } from './Icons.jsx'

export default function Planes() {
  return (
    <section id="planes">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Precios públicos</span>
          <h2>Lo que cuesta, dicho de frente</h2>
          <p>
            Estos son los valores base. La calculadora de abajo te deja armar tu
            proyecto exacto, con adicionales y plan mensual incluidos.
          </p>
        </div>

        <div className="grid-planes">
          {TIPOS_SITIO.map((t) => (
            <div className="plan-wrap" key={t.id}>
              {t.destacado && <span className="plan-badge">Más pedido</span>}
              <div className={'plan' + (t.destacado ? ' destacado' : '')}>
                <h3>{t.nombre}</h3>
                <p className="plan-desc">{t.resumen}</p>

                <div className="plan-precio">
                  {clp(t.precio)}
                  <small>valor neto, pago único</small>
                </div>

                <ul className="plan-lista">
                  {t.incluye.map((i) => (
                    <li key={i}>
                      <CheckChico /> {i}
                    </li>
                  ))}
                </ul>

                <a
                  className={'btn btn-bloque ' + (t.destacado ? 'btn-primario' : 'btn-fantasma')}
                  href="#calculadora"
                >
                  Armar el mío
                </a>

                <div className="plan-meta">
                  <Reloj width="13" height="13" style={{ verticalAlign: '-2px' }} /> Entrega
                  en {t.entrega} · {t.ideal}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Planes mensuales --- */}
        <div className="section-head" style={{ marginTop: 70 }}>
          <span className="eyebrow">Después de publicar</span>
          <h2>Planes mensuales</h2>
          <p>
            Un sitio sin mantención envejece: se cae, se desactualiza y deja de
            aparecer en Google. Elige cuánto quieres delegarnos.
          </p>
        </div>

        <div className="grid-planes">
          {PLANES_MANTENCION.filter((p) => p.precio > 0).map((p) => (
            <div className="plan-wrap" key={p.id}>
              {p.destacado && <span className="plan-badge">Recomendado</span>}
              <div className={'plan' + (p.destacado ? ' destacado' : '')}>
                <h3>{p.nombre}</h3>
                <p className="plan-desc">{p.desc}</p>

                <div className="plan-precio">
                  {clp(p.precio)}
                  <small>al mes, valor neto</small>
                </div>

                <ul className="plan-lista">
                  {p.incluye.map((i) => (
                    <li key={i}>
                      <CheckChico /> {i}
                    </li>
                  ))}
                </ul>

                <a
                  className={'btn btn-bloque ' + (p.destacado ? 'btn-primario' : 'btn-fantasma')}
                  href={linkWhatsApp(`Hola, me interesa el plan mensual "${p.nombre}" (${clp(p.precio)} + IVA al mes).`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar este plan
                </a>

                <div className="plan-meta">Sin permanencia mínima. Se cancela avisando con 30 días.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
