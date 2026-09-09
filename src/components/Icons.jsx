// Íconos SVG inline: cero dependencias, cero peticiones extra.

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Check = (p) => (
  <svg {...base} {...p}><polyline points="20 6 9 17 4 12" /></svg>
)

export const CheckChico = (p) => (
  <svg {...base} width="12" height="12" strokeWidth="3.2" {...p}><polyline points="20 6 9 17 4 12" /></svg>
)

export const Flecha = (p) => (
  <svg {...base} {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

export const WhatsApp = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.91-9.91a9.86 9.86 0 0 0-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.82c-.01 4.54-3.7 8.23-8.24 8.23z" />
  </svg>
)

export const Calculadora = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="11" x2="8" y2="11" /><line x1="12" y1="11" x2="12" y2="11" /><line x1="16" y1="11" x2="16" y2="11" />
    <line x1="8" y1="15" x2="8" y2="15" /><line x1="12" y1="15" x2="12" y2="15" /><line x1="16" y1="15" x2="16" y2="18" />
  </svg>
)

export const Rayo = (p) => (
  <svg {...base} {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
)

export const Robot = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="8" width="16" height="12" rx="3" />
    <line x1="12" y1="4" x2="12" y2="8" /><circle cx="12" cy="3" r="1" />
    <line x1="9" y1="13" x2="9" y2="14" /><line x1="15" y1="13" x2="15" y2="14" />
    <line x1="1" y1="13" x2="4" y2="13" /><line x1="20" y1="13" x2="23" y2="13" />
  </svg>
)

export const Megafono = (p) => (
  <svg {...base} {...p}>
    <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" />
    <path d="M15.5 9a3 3 0 0 1 0 6" /><path d="M18.5 6.5a7 7 0 0 1 0 11" />
  </svg>
)

export const Enchufe = (p) => (
  <svg {...base} {...p}>
    <path d="M9 2v6" /><path d="M15 2v6" />
    <path d="M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8z" />
    <path d="M12 17v5" />
  </svg>
)

export const Reloj = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
)

export const Escudo = (p) => (
  <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
)

export const Info = (p) => (
  <svg {...base} width="15" height="15" {...p}><circle cx="12" cy="12" r="9" /><line x1="12" y1="11" x2="12" y2="16" /><line x1="12" y1="8" x2="12" y2="8" /></svg>
)

export const Correo = (p) => (
  <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2 7 12 13 22 7" /></svg>
)

export const Pin = (p) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
)

export const Sol = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" /><line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
    <line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" /><line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
  </svg>
)

export const Luna = (p) => (
  <svg {...base} {...p}><path d="M21 12.5A8.5 8.5 0 1 1 11.5 3 7 7 0 0 0 21 12.5z" /></svg>
)

export const Grafico = (p) => (
  <svg {...base} {...p}><line x1="3" y1="21" x2="21" y2="21" /><rect x="5" y="12" width="4" height="9" /><rect x="11" y="7" width="4" height="14" /><rect x="17" y="3" width="4" height="18" /></svg>
)
