const PASOS = [
  {
    titulo: 'Calculas y escribes',
    texto:
      'Armas tu proyecto en la calculadora y lo envías por WhatsApp. Sabemos de qué hablamos desde el primer mensaje.',
  },
  {
    titulo: 'Propuesta en 24 horas',
    texto:
      'Recibes un documento con alcance, plazo, precio cerrado y forma de pago. Si algo no calza, se ajusta antes de partir.',
  },
  {
    titulo: 'Diseño y desarrollo',
    texto:
      'Ves avances reales en un enlace privado, no capturas de pantalla. Comentas ahí mismo y se corrige sobre la marcha.',
  },
  {
    titulo: 'Publicación y traspaso',
    texto:
      'Dominio, hosting, correos y Google configurados. Te entregamos accesos, capacitación en video y 60 días de garantía.',
  },
]

export default function Proceso() {
  return (
    <section id="proceso">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>Cuatro pasos, sin vueltas</h2>
          <p>
            Trabajas directo con quien programa tu sitio. Sin ejecutivo de cuenta
            intermediando ni correos que se pierden.
          </p>
        </div>

        <div className="pasos">
          {PASOS.map((p) => (
            <div className="paso" key={p.titulo}>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
