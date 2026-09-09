import { useEffect, useState } from 'react'
import { NEGOCIO, linkWhatsApp } from '../data/config.js'
import { WhatsApp, Luna, Sol } from './Icons.jsx'

const ENLACES = [
  { href: '#planes', texto: 'Planes' },
  { href: '#calculadora', texto: 'Calculadora' },
  { href: '#automatizacion', texto: 'Automatización' },
  { href: '#servicios', texto: 'Consultoría TI' },
  { href: '#proceso', texto: 'Cómo trabajamos' },
  { href: '#faq', texto: 'Preguntas' },
]

function useTema() {
  const [tema, setTema] = useState(() => {
    if (typeof window === 'undefined') return 'claro'
    return localStorage.getItem('tema') === 'dark' ? 'dark' : 'claro'
  })

  useEffect(() => {
    if (tema === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    try {
      localStorage.setItem('tema', tema)
    } catch {
      // localStorage puede fallar en modo privado; el tema simplemente no persiste
    }
  }, [tema])

  return [tema, () => setTema((t) => (t === 'dark' ? 'claro' : 'dark'))]
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [abierto, setAbierto] = useState(false)
  const [tema, alternarTema] = useTema()

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
          <button
            className="theme-toggle"
            onClick={alternarTema}
            aria-label={tema === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={tema === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          >
            {tema === 'dark' ? <Sol width="18" height="18" /> : <Luna width="18" height="18" />}
          </button>
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
        <button className="theme-toggle theme-toggle-movil" onClick={alternarTema}>
          {tema === 'dark' ? <Sol width="18" height="18" /> : <Luna width="18" height="18" />}
          {tema === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        </button>
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
