import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SobreMi from './components/SobreMi.jsx'
import Proyectos from './components/Proyectos.jsx'
import Tecnologias from './components/Tecnologias.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import { nav } from './data/content.js'

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )

    nav.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <SobreMi />
        <Proyectos />
        <Tecnologias />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
