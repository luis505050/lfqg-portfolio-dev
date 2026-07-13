import { perfil } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {perfil.nombre} — construido con React + Vite
      </div>
    </footer>
  )
}
