# Automatización de WhatsApp y redes sociales: ¿conviene ofrecerlo?

Análisis para decidir si sumas este servicio a tu oferta de diseño web en Curicó.
Datos de mercado a **septiembre de 2026**. Todos los valores en CLP netos.

---

## 1. Respuesta corta

**Sí conviene, pero no como "el servicio estrella": como el complemento que
convierte un cliente de pago único en un cliente recurrente.**

La razón es simple: una página web te paga una vez $450.000 y después el cliente
desaparece. Una automatización te paga $320.000 de instalación **y $45.000 todos
los meses**. Con 15 clientes en mantención de automatización tienes ~$675.000
mensuales de ingreso recurrente antes de vender un solo proyecto nuevo.

El riesgo tampoco es el desarrollo: es el **soporte**. Cuando el bot de un cliente
falla un sábado, el cliente te escribe el sábado. Eso hay que cobrarlo o acotarlo
por contrato desde el principio.

---

## 2. WhatsApp: hay dos caminos y venden a públicos distintos

### Camino A — WhatsApp Business (la app gratuita)

Lo que se puede hacer sin API y sin costo por mensaje:

- Catálogo de productos con precios
- Mensaje de bienvenida y de ausencia automáticos
- Respuestas rápidas con atajos
- Etiquetas para ordenar conversaciones
- Enlaces `wa.me` con mensaje prellenado (lo que usa la calculadora de tu sitio)

**Costo para el cliente: $0 al mes.** Tu cobro es solo la configuración
(~$90.000). Es un excelente producto de entrada: barato para el cliente, rápido
para ti, y deja la puerta abierta al camino B cuando crezca.

Limitaciones reales: un solo dispositivo principal, no responde solo de verdad
(solo mensajes fijos), no se integra con nada.

### Camino B — WhatsApp Cloud API (la de verdad)

Aquí sí hay bot, múltiples agentes en el mismo número, notificaciones masivas e
integración con otros sistemas. Requisitos:

1. Cuenta de Meta Business verificada (con documentos de la empresa)
2. Un número de teléfono que **no** esté en uso en WhatsApp normal
3. Un proveedor (BSP) o conexión directa a la Cloud API de Meta
4. Plantillas de mensaje aprobadas por Meta antes de poder enviarlas

**Este trámite es parte del valor que vendes.** Un dueño de ferretería no va a
verificar una cuenta de Meta Business solo.

### Lo que cobra Meta (Chile, referencial sept. 2026)

Meta cambió de cobro por conversación a **cobro por mensaje**, y desde abril de
2026 factura directamente en pesos chilenos.

| Categoría | Para qué sirve | Precio referencial |
|---|---|---|
| Servicio | Responder dentro de la ventana de 24 h | ~$12 por mensaje |
| Autenticación | Códigos de verificación | ~$14 por mensaje |
| Utilidad | Confirmaciones, recordatorios, despachos | ~$19 por mensaje |
| Marketing | Promociones y campañas | ~$78 por mensaje |

> ⚠️ **Cambio importante: 1 de octubre de 2026.** Hasta el 30 de septiembre los
> mensajes de servicio dentro de la ventana de 24 horas son gratis. Desde el 1 de
> octubre Meta empieza a cobrarlos. Para un cliente con mucho volumen de atención
> esto puede significar varias decenas de miles de pesos mensuales que hoy no
> paga. **Confirma la tarifa vigente en la documentación de Meta antes de firmar
> cualquier contrato** — es el número que más se mueve de todo este análisis.

### Cuánto le cuesta operar a un cliente típico

| Perfil | Volumen mensual | Meta | BSP | Tu fee | Total cliente |
|---|---|---|---|---|---|
| Pyme chica | 150 utilidad + 50 marketing | ~$6.750 | $0–15.000 | $45.000 | ~$60.000 |
| Pyme mediana | 300 utilidad + 200 marketing | ~$21.300 | $25.000 | $45.000 | ~$91.000 |
| Con campañas | 500 utilidad + 1.500 marketing | ~$126.500 | $25.000 | $45.000 | ~$196.500 |

La conclusión comercial importante: **el marketing por WhatsApp es caro y hay que
venderlo con ROI, no con entusiasmo.** $78 por mensaje significa que una campaña
a 1.000 contactos cuesta $78.000. Si el cliente vende un producto de $15.000,
necesita 6 ventas solo para empatar el envío. A un cliente de ticket bajo hay que
decirle que no.

Donde sí gana siempre: **utilidad**. Confirmar una hora médica cuesta $19 y evita
una inasistencia de $30.000. Ese argumento se vende solo.

### Proveedores (BSP)

- **Cloud API directo de Meta**: sin fee mensual, pero tú programas todo. La
  opción más rentable para ti si vas a mantener varios clientes.
- **360dialog**: fee fijo bajo, sin margen sobre los mensajes. Buena relación.
- **Twilio**: caro por mensaje pero muy documentado. Útil para empezar.
- **Wati / Trengo / Chatvolt**: incluyen bandeja compartida y CRM listo. Cobran
  USD 15–50 al mes. Convienen cuando el cliente necesita que varias personas
  atiendan y tú no quieres construir esa interfaz.

**Recomendación:** empieza con un BSP con bandeja incluida para los primeros 3
clientes (menos desarrollo, entregas rápido), y cuando tengas volumen mueve todo
a Cloud API directo con n8n encima.

---

## 3. Redes sociales: qué se automatiza de verdad

Aquí hay que ser honesto con el cliente, porque las herramientas prometen más de
lo que las APIs permiten.

| Red | Publicación automática | Limitaciones a considerar |
|---|---|---|
| Facebook Page | Sí, sin problema | Ninguna relevante |
| Instagram | Sí (feed, carrusel, Reels) | Requiere cuenta Business vinculada a una página de Facebook. Límite de ~50 publicaciones cada 24 h |
| Google Business | Sí | Muy rentable para SEO local en Curicó, poco usado por la competencia |
| LinkedIn | Sí en páginas de empresa | Publicar en perfiles personales está restringido |
| TikTok | Sí, con la app auditada | Sin auditoría aprobada solo se pueden dejar borradores privados |
| X / Twitter | Sí, pero la API es de pago | Por eso las herramientas lo cobran como extra |

Lo que **no** se automatiza bien y conviene no prometer: responder comentarios con
criterio, historias interactivas con encuestas, y contenido que dependa de algo
que pasó ese día. Si vendes "publicación automática" y el cliente esperaba
"community manager", el proyecto termina mal.

### Costo de las herramientas

| Herramienta | Precio | Cuándo usarla |
|---|---|---|
| **Publer** | Desde USD 5/mes (1 cuenta), ~USD 12/mes (3 cuentas) | La más barata. Ideal si solo necesitas programar |
| **Metricool** | Desde USD 25/mes (+ USD 10 por X) | Cuando el cliente quiere informes y análisis de competencia |
| **Buffer** | USD 6 por canal/mes | Simple, escala caro con muchas cuentas |
| **n8n** | Gratis autohospedado, o desde USD 20/mes | Para flujos a medida y para conectar el sitio con las redes |

**Truco de margen:** una cuenta de agencia de Publer o Metricool te deja gestionar
varios clientes desde un solo plan. Si cobras $60.000 al mes por cliente y tu
costo real por cliente es ~$4.000, el margen es enorme. No lo escondas: el sitio
declara los costos de terceros, y esa transparencia es justamente lo que te
diferencia. Lo que cobras es tu trabajo, no el software.

---

## 4. Tu propia estructura de costos

Para operar este servicio necesitas, al mes:

| Concepto | Costo mensual |
|---|---|
| Servidor VPS con n8n autohospedado (sirve para todos los clientes) | ~$12.000 |
| Cuenta de agencia de programador de redes | ~$25.000 |
| Número de WhatsApp de pruebas + créditos Meta | ~$10.000 |
| Modelo de IA para los bots (pago por uso) | ~$15.000 |
| **Total fijo** | **~$62.000** |

Es decir: **con un solo cliente de automatización mediano ya cubres toda tu
infraestructura.** Del segundo en adelante es margen casi puro, menos tu tiempo de
soporte.

### Tiempo real por cliente

- Instalación de un chatbot bien hecho: **12 a 20 horas** la primera vez, **4 a 6
  horas** cuando ya tengas plantillas propias reutilizables.
- Soporte mensual: **1 a 3 horas** por cliente.

A $320.000 de instalación y 16 horas, tu tarifa efectiva es de $20.000/hora la
primera vez. Cuando bajes a 6 horas con tus propias plantillas, sube a más de
$50.000/hora. **La rentabilidad de este negocio está en construir una vez y
reusar**, exactamente igual que con los sitios web.

---

## 5. Modelo de negocio recomendado

**Setup + fee mensual, siempre.** Nunca solo setup: un bot sin mantención se
rompe cuando Meta cambia algo, y el cliente culpa al que lo instaló.

Los tres paquetes que ya están cargados en la calculadora del sitio:

1. **Entrada** — WhatsApp Business ordenado. $90.000 una vez, sin mensualidad.
   Sirve para calificar clientes y para que te conozcan sin riesgo.
2. **Núcleo** — Chatbot con API + notificaciones. $320.000 + $45.000/mes.
   Es el producto que quieres vender.
3. **Completo** — Lo anterior + redes + contenido. Sobre $600.000 + $250.000/mes.
   Para clientes con presupuesto de marketing real.

Tres reglas de contrato que te ahorran problemas:

- El consumo de Meta lo paga el cliente **directamente a Meta**, con su tarjeta.
  Nunca lo pases por tu cuenta: si su campaña se dispara, el que queda expuesto
  eres tú.
- Define por escrito el horario de soporte y qué es una urgencia. "Soporte 24/7"
  no lo puedes cumplir solo.
- Deja escrito que las tarifas de Meta y de las herramientas las fija un tercero y
  pueden cambiar sin aviso.

---

## 6. Riesgos honestos

| Riesgo | Qué tan probable | Cómo lo mitigas |
|---|---|---|
| Meta sube tarifas o cambia reglas (ya pasó en jul. 2025 y en oct. 2026) | Alta | Contrato con cláusula de traspaso de costos de terceros |
| El número del cliente queda bloqueado por reportes de spam | Media | Educar sobre calidad del mensaje; nunca comprar bases de datos |
| El cliente esperaba un community manager | Alta si no lo aclaras | Alcance escrito, con lista de lo que NO incluye |
| Soporte fuera de horario te consume el margen | Alta | Horario definido y bolsa de horas para lo urgente |
| Dependencia de una herramienta que cierra o sube precio | Media | n8n autohospedado como base; las herramientas son intercambiables |

---

## 7. Por dónde partir

**Primeros 30 días** — Monta n8n en un VPS y construye tu primer chatbot para ti
mismo, sobre este mismo sitio. Es tu mejor demo: "mi propio WhatsApp responde
solo, mira".

**Días 30 a 60** — Consigue dos clientes piloto a mitad de precio a cambio de
poder mostrarlos como caso. Idealmente un rubro con citas (dentista, veterinaria,
taller mecánico): son los que más obvio ven el ahorro por hora no perdida.

**Días 60 a 90** — Empaqueta lo que construiste en plantillas reutilizables y sube
al precio de lista. Recién ahí sale la calculadora de automatización a promoción
pagada.

---

## Fuentes consultadas

- [Costos reales de WhatsApp Business API en Chile 2026 — AutomatizaWeb](https://www.automatizaweb.cl/blog/costos-whatsapp-business-api-chile-2026)
- [Precios WhatsApp Business API 2026: tarifas por país LATAM — Cliengo](https://guiawabusiness.cliengo.com/precios)
- [WhatsApp API precios LATAM 2026: ARS, CLP y COP — Chatsell](https://chatsell.net/whatsapp-api-facturacion-latam-argentina-chile-colombia-2026/)
- [n8n vs Zapier vs Make 2026: Pricing & Features — Cipher Projects](https://www.cipherprojects.com/blog/posts/n8n-vs-zapier-vs-make-automation-comparison/)
- [Metricool vs Publer 2026 — Publer](https://blog.publer.com/metricool-vs-publer/)
- [Buffer vs Metricool 2026 — Buffer](https://buffer.com/resources/buffer-vs-metricool/)
- [¿Cuánto cuesta una página web en Chile? 2026 — Forrate](https://forrate.cl/blog/cuanto-cuesta-pagina-web-chile)
- [Precios de diseño de páginas web en Chile 2026 — Razzobit](https://razzobit.cl/blog/diseno-web/diseno-paginas-web-precios-2026/)
- [Diseño web Curicó — MediaDev](https://mediadev.cl/diseno-web-curico/)
