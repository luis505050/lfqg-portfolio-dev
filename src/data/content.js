// ─────────────────────────────────────────────────────────
// Todo el texto del portafolio vive aquí. Edita este archivo
// para personalizar el sitio sin tocar los componentes.
// ─────────────────────────────────────────────────────────

export const perfil = {
  nombre: 'Luis Fernando, Quispe Garcia',
  rol: 'Desarrollador Full-Stack',
  eyebrow: '> desarrollador_full-stack',
  titulo: 'Construyo sistemas web que la gente realmente usa.',
  subtitulo:
    'Desarrollador full-stack especializado en React, Node.js y PostgreSQL. Diseño e implemento sistemas completos: desde el modelo de base de datos hasta la interfaz que usa el usuario final.',
  ubicacion: 'JUNIN, Huancayo Perú',
  disponibilidad: 'Disponible para prácticas remuneradas y oportunidades laborales para junior',
  email: 'tu.correo@ejemplo.com',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://linkedin.com/in/tu-usuario',
  cv: '/cv.pdf',
}

export const sobreMi = {
  parrafos: [
    'Soy desarrollador full-stack freelance, enfocado en construir sistemas de gestión reales, no solo demos. Me interesa el ciclo completo: modelar la base de datos, exponer una API limpia y segura, y traducir eso en una interfaz que la gente pueda usar sin fricción.',
    'Trabajo principalmente con React y Vite en el frontend, y Node.js con Express en el backend, apoyado en PostgreSQL para persistencia de datos. Me tomo en serio la autenticación y el control de acceso: JWT, roles y permisos no son un extra, son parte del diseño desde el inicio.',
    'Actualmente busco prácticas u oportunidades junior donde pueda seguir resolviendo problemas de negocio reales con código, y donde equivocarme rápido y aprender más rápido todavía sea parte del trabajo.',
  ],
  skills: {
    Frontend: ['React', 'Vite', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    Backend: ['Node.js', 'Express', 'API REST', 'JWT / Auth'],
    Datos: ['PostgreSQL', 'Neon', 'Diseño de esquemas relacionales'],
    Herramientas: ['Git & GitHub', 'Postman', 'Vercel / Netlify'],
  },
}

export const proyectos = [
  {
    id: 'sistema-integral-gestion',
    nombre: 'Sistema Integral de Gestión',
    resumen:
      'Plataforma web para administrar usuarios, sedes y asistencia de personal mediante códigos QR y geolocalización, con autenticación basada en roles.',
    contexto:
      'Pensado para organizaciones con varias sedes que necesitan controlar quién entra, en qué rol y desde dónde marca asistencia, sin depender de hojas de cálculo o procesos manuales.',
    funcionalidades: [
      'Gestión de usuarios, roles y permisos diferenciados por sede',
      'Registro de asistencia mediante escaneo de código QR',
      'Validación de asistencia por geolocalización, para confirmar que el registro ocurre en la sede correcta',
      'Autenticación y autorización con JSON Web Tokens (JWT)',
      'API REST construida en Express, con PostgreSQL (Neon) como base de datos',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Neon', 'JWT'],
    rol: 'Desarrollo full-stack: diseño de base de datos, API y frontend',
    enlaces: {
      github: 'https://github.com/tu-usuario/sistema-integral-gestion',
      demo: '',
    },
  },
]

export const tecnologias = [
  { nombre: 'React', categoria: 'Frontend' },
  { nombre: 'Vite', categoria: 'Frontend' },
  { nombre: 'JavaScript', categoria: 'Frontend' },
  { nombre: 'HTML5', categoria: 'Frontend' },
  { nombre: 'CSS3', categoria: 'Frontend' },
  { nombre: 'Node.js', categoria: 'Backend' },
  { nombre: 'Express', categoria: 'Backend' },
  { nombre: 'JWT', categoria: 'Backend' },
  { nombre: 'PostgreSQL', categoria: 'Datos' },
  { nombre: 'Neon', categoria: 'Datos' },
  { nombre: 'Git', categoria: 'Herramientas' },
  { nombre: 'GitHub', categoria: 'Herramientas' },
]

export const nav = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'tecnologias', label: 'Stack' },
  { id: 'contacto', label: 'Contacto' },
]
