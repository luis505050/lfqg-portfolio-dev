# Portafolio Dev — estilo pixel

Portafolio profesional minimalista con estética pixel/bloque (inspirada en la
interfaz de Minecraft, sin usar ningún asset con derechos de autor: todo es
CSS y tipografía). Construido con **React + Vite**.

## 1. Poner en marcha

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## 2. Estructura de carpetas

```
portfolio-dev/
├── index.html            # metadatos SEO, favicon, fuentes
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx           # punto de entrada
    ├── App.jsx            # ensambla las secciones + detecta scroll activo
    ├── index.css          # sistema de diseño completo (tokens, pixel UI)
    ├── data/
    │   └── content.js     # TODO el texto vive aquí — edítalo primero
    └── components/
        ├── Navbar.jsx      # hotbar de navegación
        ├── Hero.jsx        # presentación + terminal animada
        ├── SobreMi.jsx
        ├── Proyectos.jsx
        ├── ProyectoCard.jsx
        ├── Tecnologias.jsx
        ├── Contacto.jsx
        └── Footer.jsx
```

## 3. Personalizar contenido

Todo el texto (nombre, bio, proyectos, stack, enlaces) está centralizado en
`src/data/content.js`. No necesitas tocar los componentes para actualizar
tu información:

1. Cambia `perfil.nombre`, `perfil.email`, `perfil.github`, `perfil.linkedin`.
2. Sube tu CV como `public/cv.pdf` (el botón "Descargar CV" ya apunta ahí).
3. Agrega más proyectos duplicando un objeto dentro del array `proyectos`.
4. Ajusta `sobreMi.skills` según tu stack real.

## 4. Paleta y tipografía

| Token         | Hex       | Uso                                   |
|---------------|-----------|----------------------------------------|
| `--void-900`  | `#14141a` | Fondo base                             |
| `--stone-800` | `#201e26` | Paneles / tarjetas                     |
| `--stone-600` | `#3a3640` | Bordes pixel, separadores              |
| `--grass-500` | `#6cbb3c` | Acento primario (CTA, activo, links)   |
| `--torch-400` | `#f2c14e` | Acento secundario (detalles, foco)     |
| `--quartz-50` | `#f5f3ee` | Texto principal                        |

- **Display** (`Press Start 2P`): usado con moderación en títulos, eyebrows
  y botones — es una fuente pixel de verdad, por eso solo se usa en textos
  cortos.
- **Cuerpo** (`JetBrains Mono`): monoespaciada, legible en párrafos largos
  y coherente con el perfil de desarrollador.

No se usa `border-radius` en ningún componente: todos los bordes son rectos
o "escalonados" vía `box-shadow`, para mantener la coherencia con la
estética de bloque/pixel.

## 5. SEO básico ya incluido

- `<title>` y `<meta description>` orientados a reclutadores (rol + stack).
- Open Graph y Twitter Card para que el enlace se vea bien al compartirlo.
- `robots`, `canonical` y `lang="es"` configurados.
- Estructura semántica: un solo `<h1>`, jerarquía de encabezados por sección.

**Pendiente de tu parte:**
- Reemplaza `https://tu-dominio.vercel.app/` por tu URL real una vez
  despliegues.
- Crea una imagen `public/og-cover.png` (1200×630 px) para las vistas
  previas en redes sociales.

## 6. Desplegar

### Vercel (recomendado para proyectos Vite)
```bash
npm i -g vercel
vercel
```
O conecta el repositorio de GitHub directamente desde vercel.com →
"Add New Project" → detecta Vite automáticamente.

### Netlify
```bash
npm run build
```
Sube la carpeta `dist/` desde netlify.com, o conecta el repo con:
- Build command: `npm run build`
- Publish directory: `dist`

Ambas opciones generan una URL propia y despliegan automáticamente en
cada `git push` si conectas el repositorio.

## 7. Conectar con GitHub

1. Crea un repositorio público llamado, por ejemplo, `portfolio-dev`.
2. `git init && git add . && git commit -m "primer commit"`
3. `git remote add origin https://github.com/tu-usuario/portfolio-dev.git`
4. `git push -u origin main`
5. En tu perfil de GitHub, usa **Pin repositories** para fijar este
   portafolio y el `Sistema Integral de Gestión` en tu perfil público.
6. En el repo del Sistema Integral de Gestión, agrega un buen `README.md`
   con capturas de pantalla — los reclutadores lo revisan antes que
   cualquier otra cosa.

## 8. Ideas para destacar aún más

- Reemplazar el bloque de la terminal en `Hero.jsx` por un GIF corto (2-3s)
  mostrando el Sistema Integral de Gestión en uso real.
- Agregar un badge de Lighthouse/PageSpeed en el README del repo.
- Sustituir el `mailto:` de contacto por un formulario real con
  [Formspree](https://formspree.io) o [Resend](https://resend.com) si
  quieres capturar mensajes sin backend propio.
- Añadir un modo "código fuente" a cada `ProyectoCard`: un botón que
  expande un fragmento de código representativo del proyecto.

---

Hecho con React + Vite. Sin frameworks de CSS externos: todo el sistema de
diseño vive en `src/index.css`, así que es fácil de leer, tunear y llevar
a otro proyecto.
