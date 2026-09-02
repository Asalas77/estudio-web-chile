import { NEGOCIO, linkWhatsApp } from '../data/config.js'
import { WhatsApp } from './Icons.jsx'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer-inner">
          <span>
            © {new Date().getFullYear()} {NEGOCIO.marca} · {NEGOCIO.ciudad}, {NEGOCIO.region}
          </span>
          <nav className="footer-links">
            <a href="#planes">Planes</a>
            <a href="#calculadora">Calculadora</a>
            <a href="#automatizacion">Automatización</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
        <div className="wrap" style={{ marginTop: 14, fontSize: '0.78rem', opacity: 0.75 }}>
          Todos los valores publicados son netos, en pesos chilenos, y no incluyen IVA
          salvo que se indique lo contrario. Los precios de terceros (Meta, hosting,
          herramientas) son referenciales a septiembre de 2026 y los define cada proveedor.
        </div>
      </footer>

      <a
        className="flotante"
        href={linkWhatsApp('Hola, quiero información sobre una página web.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <WhatsApp width="26" height="26" />
      </a>
    </>
  )
}
