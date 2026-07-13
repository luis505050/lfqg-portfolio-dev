import { useState } from 'react'
import { nav, perfil } from '../data/content.js'

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#inicio" className="logo" onClick={() => handleClick('inicio')}>
          &lt;{perfil.nombre.split(' ')[0]}/&gt;
        </a>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menú de navegación"
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className={`hotbar ${open ? 'hotbar--open' : ''}`}>
          {nav.map((item) => (
            <li key={item.id}>
              <button
                className={`hotbar-slot ${
                  activeSection === item.id ? 'hotbar-slot--active' : ''
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
