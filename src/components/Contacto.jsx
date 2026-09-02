import { NEGOCIO, linkWhatsApp } from '../data/config.js'
import { WhatsApp, Correo, Pin, Calculadora } from './Icons.jsx'

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="wrap contacto-grid">
        <div>
          <span className="eyebrow">Conversemos</span>
          <h2>¿Te hace sentido el número?</h2>
          <p>
            Escríbenos con tu cotización armada y te respondemos con una propuesta
            formal en menos de 24 horas hábiles. Si todavía no tienes claro qué
            necesitas, también sirve: preguntamos nosotros.
          </p>

          <div className="contacto-datos">
            <a
              className="contacto-dato"
              href={linkWhatsApp('Hola, quiero conversar sobre un proyecto web.')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp />
              <span>
                <strong>{NEGOCIO.whatsappVisible}</strong>
                <span>WhatsApp · lunes a viernes de 9:00 a 19:00</span>
              </span>
            </a>

            <a className="contacto-dato" href={`mailto:${NEGOCIO.email}`}>
              <Correo />
              <span>
                <strong>{NEGOCIO.email}</strong>
                <span>Para propuestas, facturas y documentos</span>
              </span>
            </a>

            <div className="contacto-dato">
              <Pin />
              <span>
                <strong>{NEGOCIO.ciudad}, {NEGOCIO.region}</strong>
                <span>Atención presencial en el Maule y remota en todo Chile</span>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>¿Todavía no calculas tu precio?</h3>
          <p>
            Toma 30 segundos y no te compromete a nada. Sales de ahí sabiendo cuánto
            cuesta tu sitio, cuánto cuesta mantenerlo y cuánto costaría automatizar
            tu WhatsApp.
          </p>
          <a className="btn btn-primario btn-bloque mt-8" href="#calculadora">
            <Calculadora /> Ir a la calculadora
          </a>
          <p className="resumen-pie" style={{ marginTop: 16 }}>
            Sin registro, sin dejar tu correo y sin que te llame nadie después.
          </p>
        </div>
      </div>
    </section>
  )
}
