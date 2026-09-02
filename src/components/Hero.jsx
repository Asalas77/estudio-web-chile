import { NEGOCIO, linkWhatsApp } from '../data/config.js'
import { Calculadora, Check, WhatsApp } from './Icons.jsx'

const CONFIANZA = [
  'Precio en pantalla, sin reuniones previas',
  'Entrega desde 5 días hábiles',
  'Atención directa con quien programa',
  'Boleta o factura, sin sorpresas',
]

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap hero-inner">
          <span className="eyebrow">
            {NEGOCIO.ciudad} · {NEGOCIO.region}
          </span>

          <h1>
            Cuánto cuesta tu página web,{' '}
            <span className="destacado">sin tener que preguntar</span>
          </h1>

          <p className="hero-sub">
            Diseñamos sitios web, tiendas online y automatizaciones de WhatsApp para
            pymes del Maule. Aquí no hay «cotice con nosotros»: mueve la calculadora
            y ve el precio exacto en 30 segundos.
          </p>

          <div className="hero-acciones">
            <a className="btn btn-primario" href="#calculadora">
              <Calculadora /> Calcular mi precio ahora
            </a>
            <a
              className="btn btn-fantasma"
              href={linkWhatsApp('Hola, vi el sitio y quiero hacer una consulta.')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp /> Hablar por WhatsApp
            </a>
          </div>

          <div className="hero-datos">
            <div className="hero-dato">
              <strong>desde $280.000</strong>
              <span>Landing page publicada</span>
            </div>
            <div className="hero-dato">
              <strong>5 a 7 días</strong>
              <span>Plazo de entrega típico</span>
            </div>
            <div className="hero-dato">
              <strong>0 sorpresas</strong>
              <span>Precio cerrado antes de empezar</span>
            </div>
          </div>
        </div>
      </section>

      <div className="banda">
        <div className="wrap banda-inner">
          {CONFIANZA.map((t) => (
            <span className="banda-item" key={t}>
              <Check width="15" height="15" /> {t}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
