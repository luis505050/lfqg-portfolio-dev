import { useEffect, useState } from 'react'
import { perfil } from '../data/content.js'

const LINES = [
  { key: 'const', rest: ' developer = {' },
  { indent: 1, key: 'stack', rest: ': ', value: "['React', 'Node.js', 'PostgreSQL']," },
  { indent: 1, key: 'estado', rest: ': ', value: "'buscando_oportunidad'," },
  { indent: 1, key: 'ubicacion', rest: ': ', value: `'${perfil.ubicacion}',` },
  { rest: '}' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (visibleLines >= LINES.length) {
      setDone(true)
      return
    }
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 420)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">{perfil.eyebrow}</span>
          <h1>{perfil.titulo}</h1>
          <p className="hero-sub">{perfil.subtitulo}</p>

          <div className="hero-actions">
            <a
              href="#proyectos"
              className="btn-mc btn-mc--primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver proyectos
            </a>
            <a href={perfil.cv} className="btn-mc" download>
              Descargar CV
            </a>
            <a
              href="#contacto"
              className="btn-mc"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contactar
            </a>
          </div>

          <ul className="hero-meta">
            <li>
              <span className="dot" /> {perfil.disponibilidad}
            </li>
            <li>
              <span className="dot" /> {perfil.ubicacion}
            </li>
          </ul>
        </div>

        <div className="terminal pixel-panel" aria-hidden="true">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
          </div>
          <div className="terminal-body">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <div className="terminal-line" key={i}>
                {'  '.repeat(line.indent || 0)}
                {line.key && <span className="terminal-key">{line.key}</span>}
                {line.rest}
                {line.value && <span className="terminal-string">{line.value}</span>}
                {i === visibleLines - 1 && !done && <span className="cursor" />}
              </div>
            ))}
            {done && <span className="cursor" />}
          </div>
        </div>
      </div>
    </section>
  )
}
