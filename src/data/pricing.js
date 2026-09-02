// ============================================================
//  MOTOR DE PRECIOS  —  Valores en pesos chilenos (CLP), NETOS
//  Referencias de mercado (sept. 2026): landing $170.000–$650.000,
//  corporativo $300.000–$1.200.000, ecommerce $380.000–$2.200.000.
//  Este listado se posiciona bajo agencia de Santiago y sobre
//  "el sobrino que hace páginas". Ajusta libremente: todo el sitio lee de aquí.
// ============================================================

export const IVA = 0.19

export const clp = (n) =>
  '$' + Math.round(n).toLocaleString('es-CL', { maximumFractionDigits: 0 })

// ------------------------------------------------------------
//  1. SITIO WEB — precio base según tipo de proyecto
// ------------------------------------------------------------
export const TIPOS_SITIO = [
  {
    id: 'landing',
    nombre: 'Landing page',
    resumen: 'Una página que vende un solo servicio o producto.',
    precio: 280000,
    secciones: 1,
    entrega: '5 a 7 días',
    ideal: 'Campañas, servicios puntuales, profesionales independientes.',
    incluye: [
      'Diseño de 1 página larga (hasta 6 bloques)',
      'Adaptada a celular, tablet y notebook',
      'Formulario de contacto + botón WhatsApp',
      'Google Analytics y Search Console',
      'Certificado SSL y velocidad optimizada',
    ],
  },
  {
    id: 'corporativo',
    nombre: 'Sitio corporativo',
    resumen: 'Hasta 5 páginas para presentar tu empresa completa.',
    precio: 450000,
    secciones: 5,
    entrega: '10 a 15 días',
    ideal: 'Constructoras, clínicas, estudios, empresas de servicios.',
    destacado: true,
    incluye: [
      'Inicio, Nosotros, Servicios, Galería y Contacto',
      'Diseño propio con tu identidad visual',
      'Ficha de Google Maps enlazada',
      'SEO local básico para Curicó y el Maule',
      'Formularios y WhatsApp integrados',
    ],
  },
  {
    id: 'cms',
    nombre: 'Sitio autoadministrable',
    resumen: 'Sitio corporativo + panel para que edites tú mismo.',
    precio: 650000,
    secciones: 7,
    entrega: '15 a 20 días',
    ideal: 'Quien publica novedades, blog, catálogo o precios seguido.',
    incluye: [
      'Todo lo del sitio corporativo',
      'Panel de administración en español',
      'Blog o sección de novedades ilimitada',
      'Carga de imágenes y textos sin programar',
      'Capacitación en video de 40 minutos',
    ],
  },
  {
    id: 'ecommerce',
    nombre: 'Tienda online',
    resumen: 'Catálogo, carro de compras y pagos en línea.',
    precio: 850000,
    secciones: 8,
    entrega: '20 a 30 días',
    ideal: 'Retail, viñas, distribuidoras, productos con despacho.',
    incluye: [
      'Hasta 50 productos cargados por nosotros',
      'Carro de compras y checkout',
      'Despacho por comuna y retiro en tienda',
      'Panel de pedidos y stock',
      'Preparado para Webpay, Flow o Mercado Pago',
    ],
  },
  {
    id: 'sistema',
    nombre: 'Sistema web a medida',
    resumen: 'Software propio: reservas, portal de clientes, intranet.',
    precio: 1600000,
    secciones: 10,
    entrega: '6 a 10 semanas',
    ideal: 'Procesos internos, multiusuario, reglas de negocio propias.',
    incluye: [
      'Levantamiento funcional y prototipo',
      'Usuarios, roles y permisos',
      'Base de datos propia y respaldos',
      'Panel de reportes',
      'Código y datos 100% tuyos',
    ],
  },
]

export const PRECIO_SECCION_EXTRA = 45000

// ------------------------------------------------------------
//  2. ADICIONALES DEL SITIO (pago único)
// ------------------------------------------------------------
export const EXTRAS_SITIO = [
  {
    id: 'identidad',
    nombre: 'Identidad visual / logo',
    desc: 'Logo, paleta de colores y tipografías, en todos los formatos.',
    precio: 180000,
  },
  {
    id: 'contenidos',
    nombre: 'Redacción de textos',
    desc: 'Escribimos los textos de tu sitio. Tú no redactas nada.',
    precio: 120000,
  },
  {
    id: 'fotos',
    nombre: 'Sesión de fotos en terreno',
    desc: 'Media jornada en Curicó o alrededores. 20 fotos editadas.',
    precio: 190000,
  },
  {
    id: 'seo',
    nombre: 'SEO local avanzado',
    desc: 'Ficha de Google Business, comunas objetivo, datos estructurados.',
    precio: 140000,
  },
  {
    id: 'idiomas',
    nombre: 'Segundo idioma',
    desc: 'Sitio completo en inglés (u otro), con selector de idioma.',
    precio: 160000,
  },
  {
    id: 'pagos',
    nombre: 'Pasarela de pago',
    desc: 'Webpay Plus, Flow o Mercado Pago conectados y probados.',
    precio: 180000,
    soloPara: ['cms', 'ecommerce', 'sistema'],
  },
  {
    id: 'reservas',
    nombre: 'Sistema de reservas / agenda',
    desc: 'Tus clientes agendan hora online. Sincroniza con Google Calendar.',
    precio: 220000,
  },
  {
    id: 'integracion',
    nombre: 'Integración con otro sistema',
    desc: 'ERP, CRM, facturación electrónica o planilla de Google.',
    precio: 250000,
  },
  {
    id: 'migracion',
    nombre: 'Migración del sitio actual',
    desc: 'Traemos contenidos y posicionamiento sin perder tráfico.',
    precio: 110000,
  },
]

// Recargo por entrega express (se aplica sobre el subtotal de pago único)
export const EXPRESS = {
  id: 'express',
  nombre: 'Entrega express',
  desc: 'Reducimos el plazo a la mitad. Tu proyecto pasa al principio de la fila.',
  recargo: 0.25,
}

// ------------------------------------------------------------
//  3. PLANES MENSUALES DEL SITIO
// ------------------------------------------------------------
export const PLANES_MANTENCION = [
  {
    id: 'ninguno',
    nombre: 'Sin plan',
    precio: 0,
    desc: 'Te entregamos todo y lo administras por tu cuenta.',
    incluye: ['Entrega de accesos y código', 'Garantía de 60 días por fallas'],
  },
  {
    id: 'basico',
    nombre: 'Esencial',
    precio: 25000,
    desc: 'Que tu sitio nunca se caiga ni quede obsoleto.',
    incluye: [
      'Hosting, dominio .cl y SSL incluidos',
      'Respaldos diarios',
      'Actualizaciones de seguridad',
      'Monitoreo de caídas 24/7',
    ],
  },
  {
    id: 'pro',
    nombre: 'Activo',
    precio: 59000,
    destacado: true,
    desc: 'Lo anterior, más cambios todos los meses sin cobrarte por cada uno.',
    incluye: [
      'Todo lo del plan Esencial',
      'Hasta 3 horas de cambios al mes',
      'Informe mensual de visitas y contactos',
      'Soporte por WhatsApp en horario hábil',
    ],
  },
  {
    id: 'crecimiento',
    nombre: 'Crecimiento',
    precio: 145000,
    desc: 'Para quien quiere que el sitio traiga clientes, no solo que exista.',
    incluye: [
      'Todo lo del plan Activo',
      'SEO continuo y contenidos nuevos',
      '2 artículos de blog al mes',
      'Reunión mensual de resultados',
    ],
  },
]

// ------------------------------------------------------------
//  4. AUTOMATIZACIÓN — WhatsApp y redes sociales
//     setup = pago único   |   mensual = fee de servicio
// ------------------------------------------------------------
export const MODULOS_AUTO = [
  {
    id: 'wa_basico',
    grupo: 'WhatsApp',
    nombre: 'WhatsApp Business ordenado',
    desc: 'Catálogo, mensaje de bienvenida, respuestas rápidas y etiquetas.',
    setup: 90000,
    mensual: 0,
    nota: 'La opción más barata: usa la app gratuita de WhatsApp Business, sin costo por mensaje.',
  },
  {
    id: 'wa_bot',
    grupo: 'WhatsApp',
    nombre: 'Chatbot con WhatsApp API',
    desc: 'Responde 24/7, califica al cliente, agenda y deriva a un humano cuando corresponde.',
    setup: 320000,
    mensual: 45000,
    consumoMeta: true,
    nota: 'Requiere cuenta de WhatsApp Business API. El consumo de Meta se paga aparte.',
  },
  {
    id: 'wa_notif',
    grupo: 'WhatsApp',
    nombre: 'Notificaciones automáticas',
    desc: 'Confirmación de pedido, recordatorio de hora, aviso de despacho, cobranza amable.',
    setup: 190000,
    mensual: 30000,
    consumoMeta: true,
  },
  {
    id: 'wa_crm',
    grupo: 'WhatsApp',
    nombre: 'Bandeja compartida + CRM',
    desc: 'Varias personas atienden el mismo número, con historial y asignación de casos.',
    setup: 240000,
    mensual: 55000,
    nota: 'Incluye la configuración. La licencia del CRM la paga el cliente directamente.',
  },
  {
    id: 'rrss_prog',
    grupo: 'Redes sociales',
    nombre: 'Publicación automática',
    desc: 'Publicamos solos en Instagram, Facebook, TikTok y LinkedIn desde un calendario.',
    setup: 150000,
    mensual: 60000,
    nota: 'Incluye la programación. El contenido lo pones tú, o lo agregas más abajo.',
  },
  {
    id: 'rrss_contenido',
    grupo: 'Redes sociales',
    nombre: 'Contenido mensual (8 posts)',
    desc: 'Diseño, textos y calendario editorial. Tú apruebas, nosotros publicamos.',
    setup: 0,
    mensual: 190000,
  },
  {
    id: 'rrss_repost',
    grupo: 'Redes sociales',
    nombre: 'Sitio a redes, automático',
    desc: 'Cada producto o artículo nuevo del sitio se publica solo en tus redes.',
    setup: 140000,
    mensual: 25000,
  },
  {
    id: 'resenas',
    grupo: 'Redes sociales',
    nombre: 'Pedir reseñas en Google',
    desc: 'Flujo que pide la reseña por WhatsApp después de la compra o el servicio.',
    setup: 120000,
    mensual: 20000,
    consumoMeta: true,
  },
  {
    id: 'flujos',
    grupo: 'Conexiones',
    nombre: 'Conexión entre sistemas',
    desc: 'Formulario, planilla, correo, WhatsApp y CRM hablando entre sí.',
    setup: 200000,
    mensual: 35000,
  },
  {
    id: 'ia',
    grupo: 'Conexiones',
    nombre: 'Respuestas con IA',
    desc: 'El bot entiende preguntas escritas libremente y responde con tu información real.',
    setup: 280000,
    mensual: 60000,
    nota: 'El consumo del modelo de IA se factura al costo: aprox. $6.000 a $25.000 al mes.',
  },
]

// ------------------------------------------------------------
//  5. COSTOS DE TERCEROS
//     No los cobramos nosotros: son de Meta, del hosting o de la
//     herramienta. Mostrarlos es la mejor ventaja competitiva.
// ------------------------------------------------------------

// Precio referencial de Meta por MENSAJE enviado a Chile, en CLP.
// Meta factura en CLP en Chile desde abril de 2026 y cobra por mensaje.
// Desde el 1 de octubre de 2026 también se cobran los mensajes de
// servicio dentro de la ventana de 24 horas.
export const META_POR_MENSAJE = {
  marketing: 78, // promociones, ofertas, reactivación de clientes
  utility: 19, // confirmaciones, recordatorios, despachos
  authentication: 14, // códigos de verificación
  servicio: 12, // respuestas dentro de la ventana de 24 horas
}

export const COSTOS_TERCEROS = [
  { item: 'Dominio .cl', costo: '$11.000 a $20.000 al año', quien: 'NIC Chile' },
  { item: 'Hosting profesional', costo: '$60.000 a $150.000 al año', quien: 'Proveedor de hosting' },
  { item: 'Proveedor de WhatsApp API', costo: '$0 a $48.000 al mes', quien: 'Twilio, 360dialog, Wati' },
  { item: 'Mensajes de WhatsApp', costo: 'desde $12 por mensaje', quien: 'Meta' },
  { item: 'Programador de redes', costo: '$5.000 a $35.000 al mes', quien: 'Publer, Metricool, Buffer' },
  { item: 'Plataforma de tienda', costo: 'USD 29 a 79 al mes', quien: 'Solo si eliges Shopify' },
]

// Descuento al contratar sitio web + automatización en el mismo proyecto
export const DESCUENTO_PACK = 0.1
