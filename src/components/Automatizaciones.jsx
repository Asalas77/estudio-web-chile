import { COSTOS_TERCEROS, META_POR_MENSAJE, clp } from '../data/pricing.js'
import { Robot, Megafono, Enchufe, Grafico, Info } from './Icons.jsx'

const BLOQUES = [
  {
    icono: <Robot />,
    titulo: 'WhatsApp que responde solo',
    texto:
      'El 80% de los mensajes que recibes son las mismas cinco preguntas: precio, horario, dirección, stock y despacho. Un bot las contesta al instante, a las 3 de la mañana incluido, y te pasa la conversación cuando el cliente ya está listo para comprar.',
    tags: ['Respuestas 24/7', 'Deriva a un humano', 'Historial ordenado', 'Varios agentes'],
  },
  {
    icono: <Megafono />,
    titulo: 'Publicaciones automáticas',
    texto:
      'Se define un calendario una vez al mes y el sistema publica solo en Instagram, Facebook, TikTok y LinkedIn. Si tu sitio tiene blog o catálogo, cada contenido nuevo se replica en tus redes sin que tengas que copiar y pegar nada.',
    tags: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Google Business'],
  },
  {
    icono: <Enchufe />,
    titulo: 'Todo conectado',
    texto:
      'Un formulario del sitio que crea la fila en tu planilla, te avisa por WhatsApp, manda el correo de confirmación y agenda la visita. Sin que nadie copie datos a mano y sin perder ningún contacto.',
    tags: ['Formularios', 'Google Sheets', 'CRM', 'Agenda', 'Facturación'],
  },
  {
    icono: <Grafico />,
    titulo: 'Recuperar clientes dormidos',
    texto:
      'Campañas a tu base de clientes con mensajes de marketing por WhatsApp, que se abren mucho más que un correo. Se segmenta por última compra o por comuna, y se mide cuánto se vendió por cada peso invertido.',
    tags: ['Campañas', 'Segmentación', 'Reseñas en Google', 'Reportes'],
  },
]

export default function Automatizaciones() {
  return (
    <section className="auto-seccion" id="automatizacion">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow violeta">WhatsApp y redes sociales</span>
          <h2>Automatiza lo que hoy haces a mano</h2>
          <p>
            Un sitio web atrae. La automatización atiende, hace seguimiento y vende
            mientras tú trabajas. Se puede sumar a un sitio nuevo o a uno que ya tengas.
          </p>
        </div>

        <div className="grid-auto">
          {BLOQUES.map((b) => (
            <article className="auto-card" key={b.titulo}>
              <div className="auto-icono">{b.icono}</div>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
              <div className="auto-tags">
                {b.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* --- Transparencia de costos --- */}
        <div className="section-head" style={{ marginTop: 66 }}>
          <span className="eyebrow violeta">Sin letra chica</span>
          <h2>Lo que cobra Meta, y lo que cobramos nosotros</h2>
          <p>
            Automatizar WhatsApp tiene dos costos distintos y conviene entenderlos
            antes de firmar: nuestro trabajo, que es un valor fijo, y lo que consumes
            en plataformas de terceros, que depende de cuánto mensaje envíes.
          </p>
        </div>

        <div className="grid-planes" style={{ marginBottom: 26 }}>
          {[
            { cat: 'Utilidad', desc: 'Confirmaciones, recordatorios, despachos.', valor: META_POR_MENSAJE.utility },
            { cat: 'Marketing', desc: 'Promociones y campañas a tu base.', valor: META_POR_MENSAJE.marketing },
            { cat: 'Autenticación', desc: 'Códigos de verificación.', valor: META_POR_MENSAJE.authentication },
            { cat: 'Servicio', desc: 'Respuestas dentro de la ventana de 24 h.', valor: META_POR_MENSAJE.servicio },
          ].map((m) => (
            <div className="card" key={m.cat}>
              <h3 style={{ fontSize: '0.98rem', marginBottom: 4 }}>{m.cat}</h3>
              <p style={{ fontSize: '0.84rem', marginBottom: 10 }}>{m.desc}</p>
              <div className="plan-precio texto-violeta" style={{ fontSize: '1.5rem', margin: 0 }}>
                {clp(m.valor)}
                <small>por mensaje enviado a Chile</small>
              </div>
            </div>
          ))}
        </div>

        <div className="aviso" style={{ marginBottom: 26 }}>
          <Info />
          <span>
            Valores referenciales de Meta para Chile a septiembre de 2026. Meta factura
            en pesos chilenos desde abril de 2026 y cobra <strong>por mensaje</strong>, no
            por conversación. Desde el <strong>1 de octubre de 2026</strong> también se
            cobran los mensajes de servicio dentro de la ventana de 24 horas: conviene
            revisar la tarifa vigente antes de contratar.
          </span>
        </div>

        <div className="tabla-wrap">
          <table className="tabla-costos">
            <thead>
              <tr>
                <th>Costo de terceros</th>
                <th>Rango referencial</th>
                <th>A quién se le paga</th>
              </tr>
            </thead>
            <tbody>
              {COSTOS_TERCEROS.map((c) => (
                <tr key={c.item}>
                  <td>{c.item}</td>
                  <td>{c.costo}</td>
                  <td>{c.quien}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-24" style={{ maxWidth: 720 }}>
          Ninguno de estos valores pasa por nosotros con margen: los pagas directo al
          proveedor y quedan a tu nombre. Nuestro cobro es el desarrollo y la mantención,
          y está todo en la <a href="#calculadora" className="texto-verde">calculadora</a>.
        </p>
      </div>
    </section>
  )
}
