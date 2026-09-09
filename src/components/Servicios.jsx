import { linkWhatsApp } from '../data/config.js'
import { Enchufe, Robot, Grafico, Escudo } from './Icons.jsx'

const CONSULTORIA = [
  {
    icono: <Robot />,
    imagen: '/img/servicios/app-movil.jpg',
    posicion: '50% 78%',
    titulo: 'Desarrollo de apps móviles',
    desc: 'Aplicaciones a medida para Android e iOS: desde una app de cara al cliente hasta una herramienta interna para tu equipo en terreno.',
    tags: ['Android', 'iOS', 'Apps a medida', 'Terreno'],
  },
  {
    icono: <Enchufe />,
    imagen: '/img/servicios/sap-consultoria.jpg',
    titulo: 'Soporte y consultoría SAP Business One',
    desc: 'Configuración, integraciones y soporte técnico sobre SAP B1. Conectamos SAP con tus otros sistemas para que la información no quede duplicada.',
    tags: ['SAP B1', 'Integraciones', 'Soporte técnico'],
  },
]

const APPS_PROPIAS = [
  {
    nombre: 'Kontrol',
    icono: <Escudo />,
    imagen: '/img/servicios/kontrol.jpg',
    desc: 'Aplicación de control y gestión operativa: seguimiento de tareas, checklists y reportes en tiempo real para equipos en terreno.',
  },
  {
    nombre: 'Guardias',
    icono: <Grafico />,
    imagen: '/img/servicios/guardias.jpg',
    desc: 'Gestión de turnos y rondas para personal de seguridad: asignación de guardias, marcaciones de ronda e incidentes desde el celular.',
  },
  {
    nombre: 'Inventario',
    icono: <Enchufe />,
    imagen: '/img/servicios/inventario.jpg',
    desc: 'Control de stock y bodega con ingreso, salida y conteo por código, pensado para pymes que hoy llevan el inventario en planillas.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow violeta">Consultoría TI</span>
          <h2>Más allá del sitio web</h2>
          <p>
            También desarrollamos software a medida y damos soporte a sistemas de
            gestión empresarial, para negocios que necesitan algo más que una página.
          </p>
        </div>

        <div className="grid-auto" style={{ marginBottom: 40 }}>
          {CONSULTORIA.map((c) => (
            <article className="auto-card auto-card-foto" key={c.titulo}>
              <div className="auto-card-img">
                <img src={c.imagen} alt="" loading="lazy" style={{ objectPosition: c.posicion || 'center' }} />
              </div>
              <div className="auto-icono">{c.icono}</div>
              <h3>{c.titulo}</h3>
              <p>{c.desc}</p>
              <div className="auto-tags">
                {c.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: 10 }}>
          <span className="eyebrow violeta">Nuestras aplicaciones</span>
          <h2>Software propio, listo para usar</h2>
          <p>
            Tres aplicaciones que ya desarrollamos y que adaptamos a la operación de
            tu empresa, en vez de partir un sistema desde cero.
          </p>
        </div>

        <div className="grid-planes">
          {APPS_PROPIAS.map((a) => (
            <div className="card card-foto" key={a.nombre}>
              <div className="auto-card-img">
                <img src={a.imagen} alt="" loading="lazy" />
              </div>
              <div className="auto-icono" style={{ marginBottom: 16 }}>{a.icono}</div>
              <h3 style={{ fontSize: '1.15rem' }}>{a.nombre}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: 18 }}>{a.desc}</p>
              <a
                className="btn btn-fantasma btn-bloque"
                href={linkWhatsApp(`Hola, quiero más información sobre la aplicación ${a.nombre}.`)}
                target="_blank"
                rel="noreferrer"
              >
                Pedir información
              </a>
            </div>
          ))}
        </div>

        <p className="mt-24" style={{ maxWidth: 720 }}>
          ¿Tu proyecto no calza en ninguna categoría de arriba? Cuéntanos qué necesitas
          por{' '}
          <a
            href={linkWhatsApp('Hola, tengo un proyecto de consultoría/desarrollo que quiero comentarles.')}
            target="_blank"
            rel="noreferrer"
            className="texto-verde"
          >
            WhatsApp
          </a>{' '}
          y lo revisamos.
        </p>
      </div>
    </section>
  )
}
