import { tecnologias } from '../data/content.js'

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <span className="eyebrow">&gt; inventario</span>
        <h2 className="section-title">Stack tecnológico</h2>
        <p className="section-lead">
          Las herramientas que uso día a día, organizadas como un inventario: cada una tiene
          un lugar y un propósito concreto.
        </p>

        <div className="tech-grid">
          {tecnologias.map((tech) => (
            <div className="tech-slot" key={tech.nombre} title={tech.categoria}>
              {tech.nombre}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
