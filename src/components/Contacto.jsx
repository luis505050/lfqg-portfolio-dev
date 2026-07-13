import { perfil } from '../data/content.js'

export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <span className="eyebrow">&gt; contacto</span>
        <div className="contacto-panel pixel-panel">
          <h2>¿Trabajamos juntos?</h2>
          <p>
            {perfil.disponibilidad}. Si tienes una vacante, una práctica o simplemente
            quieres conversar sobre un proyecto, escríbeme.
          </p>
          <div className="contacto-actions">
            <a className="btn-mc btn-mc--primary" href={`mailto:${perfil.email}`}>
              Enviar correo
            </a>
            <a className="btn-mc" href={perfil.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-mc" href={perfil.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
