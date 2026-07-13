import { proyectos } from '../data/content.js'
import ProyectoCard from './ProyectoCard.jsx'

export default function Proyectos() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <span className="eyebrow">&gt; proyectos</span>
        <h2 className="section-title">Proyectos destacados</h2>
        <p className="section-lead">
          Trabajo con foco en sistemas completos: base de datos, API y frontend, no solo
          interfaces sueltas.
        </p>

        {proyectos.map((proyecto) => (
          <ProyectoCard proyecto={proyecto} key={proyecto.id} />
        ))}
      </div>
    </section>
  )
}
