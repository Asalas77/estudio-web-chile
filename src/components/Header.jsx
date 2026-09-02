import { useEffect, useState } from 'react'
import { NEGOCIO, linkWhatsApp } from '../data/config.js'
import { WhatsApp } from './Icons.jsx'

const ENLACES = [
  { href: '#planes', texto: 'Planes' },
  { href: '#calculadora', texto: 'Calculadora' },
  { href: '#automatizacion', texto: 'Automatización' },
  { href: '#proceso', texto: 'Cómo trabajamos' },
  { href: '#faq', texto: 'Preguntas' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={'header' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">EW</span>
          {NEGOCIO.marca}
        </a>

        <nav className="nav">
          {ENLACES.map((e) => (
            <a key={e.href} href={e.href}>{e.texto}</a>
          ))}
        </nav>

        <div className="header-cta">
          <a className="btn btn-primario" href="#calculadora">Calcular mi precio</a>
          <button
            className="burger"
            onClick={() => setAbierto((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={abierto}
          >
            {abierto ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={'wrap menu-movil' + (abierto ? ' abierto' : '')}>
        {ENLACES.map((e) => (
          <a key={e.href} href={e.href} onClick={() => setAbierto(false)}>{e.texto}</a>
        ))}
        <a
          className="btn btn-primario"
          href={linkWhatsApp('Hola, quiero información sobre una página web.')}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsApp /> Escribir por WhatsApp
        </a>
      </div>
    </header>
  )
}
