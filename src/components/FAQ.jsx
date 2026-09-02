import { useState } from 'react'

const PREGUNTAS = [
  {
    q: '¿El precio de la calculadora es el precio final?',
    a: 'Sí, para todo lo que aparece listado. Es un valor cerrado: si el proyecto se complica por nuestro lado, no te lo traspasamos. Lo único que puede cambiarlo es que pidas algo que no esté en la lista, y en ese caso lo cotizamos aparte y con tu aprobación previa.',
  },
  {
    q: '¿Por qué otros cobran $99.000 y ustedes $280.000?',
    a: 'Porque no es lo mismo. Bajo los $150.000 normalmente recibes una plantilla genérica sin textos propios, sin optimización de velocidad ni configuración de Google, y sin nadie que responda cuando se caiga. Nuestro precio incluye el trabajo de diseño, contenido técnico, SEO base y una persona con nombre y apellido respondiendo el WhatsApp.',
  },
  {
    q: '¿Cómo se paga?',
    a: '50% al aprobar la propuesta y 50% contra entrega, antes de publicar. Aceptamos transferencia y emitimos boleta o factura. Los planes mensuales se cobran por adelantado y se pueden cancelar avisando con 30 días.',
  },
  {
    q: '¿El sitio queda a mi nombre?',
    a: 'Siempre. El dominio se registra a tu RUT, el hosting queda a tu nombre y recibes todos los accesos y el código. Si algún día decides irte con otro proveedor, te llevas todo sin pedirnos permiso.',
  },
  {
    q: '¿Cuánto se demoran de verdad?',
    a: 'Una landing entre 5 y 7 días hábiles, un sitio corporativo entre 10 y 15, una tienda online entre 20 y 30. El reloj parte cuando recibimos tus contenidos: lo que más atrasa los proyectos son las fotos y los textos, no la programación. Si necesitas ir más rápido, existe la opción de entrega express.',
  },
  {
    q: '¿Necesito WhatsApp Business API para automatizar?',
    a: 'No siempre. Si recibes pocos mensajes, ordenar tu WhatsApp Business gratuito con catálogo y respuestas rápidas resuelve mucho y no tiene costo por mensaje. La API se justifica cuando quieres responder automáticamente, atender entre varias personas el mismo número o enviar notificaciones y campañas.',
  },
  {
    q: '¿Cuánto cuesta enviar mensajes por WhatsApp?',
    a: 'Meta cobra por mensaje enviado y factura en pesos chilenos. Referencialmente, un mensaje de utilidad ronda los $19 y uno de marketing los $78. Un negocio que manda 300 confirmaciones y 200 promociones al mes gasta cerca de $21.000 en Meta, más lo que cobre el proveedor de la API. Está todo estimado en la calculadora.',
  },
  {
    q: '¿Publican también el contenido de mis redes?',
    a: 'Podemos hacer las dos cosas por separado. Si ya tienes quién diseñe los posts, nosotros solo montamos la automatización que los publica. Si además necesitas el contenido, existe el plan de 8 publicaciones al mes con diseño, textos y calendario editorial.',
  },
  {
    q: '¿Atienden fuera de Curicó?',
    a: 'Sí. Trabajamos con clientes de todo Chile de forma remota, y en Curicó, Molina, Sagrada Familia, Romeral, Teno y Talca podemos vernos en persona cuando el proyecto lo amerite.',
  },
]

export default function FAQ() {
  const [abierta, setAbierta] = useState(0)

  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2>Lo que todos preguntan</h2>
        </div>

        <div className="faq-lista">
          {PREGUNTAS.map((p, i) => {
            const activa = abierta === i
            return (
              <div className={'faq-item' + (activa ? ' abierta' : '')} key={p.q}>
                <button
                  className="faq-boton"
                  onClick={() => setAbierta(activa ? -1 : i)}
                  aria-expanded={activa}
                >
                  {p.q}
                  <span className="faq-signo">+</span>
                </button>
                {activa && (
                  <div className="faq-cuerpo">
                    <p>{p.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
