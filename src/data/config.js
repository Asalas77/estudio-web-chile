// ============================================================
//  DATOS DEL NEGOCIO  —  EDITA SOLO ESTE ARCHIVO
//  Cambia aquí tu nombre, teléfono y correo. Se propaga a todo el sitio.
// ============================================================

export const NEGOCIO = {
  marca: 'Estudio Web Chile',
  claim: 'Sitios web y automatización para pymes',
  // Formato internacional SIN +, sin espacios ni guiones (Chile = 56)
  whatsapp: '56979500383',
  whatsappVisible: '+56 9 7950 0383',
  email: 'alesalas1977@gmail.cl',
  ciudad: 'Curicó , Chile',
  region: 'Región del Maule',
  instagram: 'https://instagram.com/tu_cuenta',
  linkedin: 'https://linkedin.com/in/tu_cuenta',
  // Se muestra bajo la calculadora
  validezCotizacion: '15 días',
}

// Enlace de WhatsApp con mensaje prellenado
export const linkWhatsApp = (mensaje = '') =>
  `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`
