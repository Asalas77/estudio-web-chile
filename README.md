# Sitio web + calculadora de precios

Sitio comercial para vender diseño web y automatización en Curicó, Región del
Maule. Incluye una calculadora que muestra el precio en pantalla y arma la
cotización en un mensaje de WhatsApp.

React 18 + Vite. Sin backend, sin base de datos: se publica como archivos
estáticos en cualquier hosting.

## Levantar el proyecto

```bash
npm install
npm run dev
```

Abre <http://localhost:5173>.

Para generar la versión de producción:

```bash
npm run build
```

Queda todo en `dist/`. Ese directorio es lo que subes a Netlify, Vercel, Cloudflare
Pages o a un hosting común por FTP.

## Antes de publicar: 3 cosas que debes cambiar

1. **`src/data/config.js`** — tu número de WhatsApp, correo, marca y redes.
   El número va en formato internacional sin `+` ni espacios: `56912345678`.
   Sin esto, el botón de WhatsApp no lleva a ninguna parte.
2. **`index.html`** — reemplaza `https://tudominio.cl/` en el `canonical`, en las
   etiquetas Open Graph y en el bloque de datos estructurados por tu dominio real.
   También el nombre en `"name": "Estudio Web Curicó"`.
3. **`src/data/pricing.js`** — revisa que los precios sean los que quieres cobrar.

## Dónde se cambia cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Teléfono, correo, marca, ciudad | `src/data/config.js` |
| Precios, planes, adicionales, módulos de automatización | `src/data/pricing.js` |
| Tarifas de Meta por mensaje | `src/data/pricing.js` → `META_POR_MENSAJE` |
| Costos de terceros de la tabla | `src/data/pricing.js` → `COSTOS_TERCEROS` |
| Textos del encabezado y titular | `src/components/Hero.jsx` |
| Preguntas frecuentes | `src/components/FAQ.jsx` |
| Pasos del proceso de trabajo | `src/components/Proceso.jsx` |
| Colores y tipografía | `src/styles/global.css` (variables al inicio) |

Todo lo económico está en `pricing.js`. Cambiar un precio ahí lo actualiza en las
tarjetas de planes, en la calculadora y en el mensaje de WhatsApp a la vez.

## Cómo funciona la calculadora

`src/components/Calculadora.jsx` mantiene el estado de lo que el visitante elige y
calcula en un `useMemo`:

- **Inversión inicial** — tipo de sitio + páginas extra + adicionales, con el
  recargo de entrega express aplicado sobre ese subtotal, más el setup de los
  módulos de automatización, menos 10% si contrata web y automatización juntos.
- **Mensualidad** — plan de mantención + fee mensual de cada módulo.
- **Costos de terceros** — hosting, proveedor de WhatsApp API, programador de
  redes y consumo de Meta según los deslizadores de volumen. Se muestran aparte
  porque el cliente los paga directo al proveedor.

El botón «Enviar esta cotización» arma un texto con el desglose completo y abre
`wa.me` con el mensaje ya escrito. No hay formulario ni captura de datos: el
visitante llega a tu WhatsApp sabiendo lo que quiere.

## Notas de precios

Los valores son netos, en pesos chilenos, y la calculadora tiene un interruptor
para mostrarlos con IVA (19%).

Las tarifas de Meta cargadas son referenciales a septiembre de 2026. **Desde el 1
de octubre de 2026 Meta también cobra los mensajes de servicio dentro de la
ventana de 24 horas**, así que revisa `META_POR_MENSAJE` antes de una campaña.

El razonamiento detrás de estos números, el análisis del negocio de automatización
y las fuentes están en [ANALISIS-AUTOMATIZACIONES.md](ANALISIS-AUTOMATIZACIONES.md).
