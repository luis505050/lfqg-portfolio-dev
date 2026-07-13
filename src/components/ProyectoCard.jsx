export default function ProyectoCard({ proyecto }) {
  return (
    <article className="proyecto-card pixel-panel">
      <div className="proyecto-head">
        <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
        <div className="proyecto-links">
          {proyecto.enlaces.github && (
            <a
              className="btn-mc"
              href={proyecto.enlaces.github}
              target="_blank"
              rel="noreferrer"
            >
              Código
            </a>
          )}
          {proyecto.enlaces.demo && (
            <a
              className="btn-mc btn-mc--primary"
              href={proyecto.enlaces.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>

      <p className="proyecto-resumen">{proyecto.resumen}</p>

      <div className="proyecto-cols">
        <div>
          <h4>Contexto</h4>
          <p style={{ color: 'var(--quartz-200)', fontSize: '13.5px', marginBottom: 20 }}>
            {proyecto.contexto}
          </p>
          <h4>Rol</h4>
          <p style={{ color: 'var(--quartz-200)', fontSize: '13.5px' }}>{proyecto.rol}</p>
        </div>

        <div>
          <h4>Funcionalidades clave</h4>
          <ul>
            {proyecto.funcionalidades.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <h4 style={{ marginTop: 4 }}>Stack técnico</h4>
      <div className="proyecto-stack">
        {proyecto.stack.map((tech) => (
          <span className="stack-chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
