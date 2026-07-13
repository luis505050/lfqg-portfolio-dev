import { sobreMi } from '../data/content.js'

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <span className="eyebrow">&gt; sobre_mi</span>
        <h2 className="section-title">Perfil y habilidades técnicas</h2>

        <div className="sobre-grid">
          <div className="sobre-parrafos">
            {sobreMi.parrafos.map((texto, i) => (
              <p key={i}>{texto}</p>
            ))}
          </div>

          <div>
            {Object.entries(sobreMi.skills).map(([grupo, items]) => (
              <div className="skills-group" key={grupo}>
                <h3>{grupo}</h3>
                <ul className="skills-tags">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
