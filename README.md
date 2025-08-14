# Paradise Nursery — Carrito de Compras (React + Redux Toolkit + Vite)

## Requisitos
- Node.js 18+
- npm

## Cómo correr en local
```bash
npm install
npm run dev
```

## Estructura
- Navbar con contador del carrito.
- Páginas: Inicio, Productos (con secciones Aromáticas y Medicinales), Carrito.
- Funcionalidades: agregar, eliminar, aumentar/disminuir cantidad, total por producto y total general.
- Estado global con Redux Toolkit y persistencia en localStorage.

## Despliegue en GitHub Pages
1. Crea un repositorio nuevo en GitHub, por ejemplo `paradise-nursery`.
2. **(Importante)** En `vite.config.js` cambia `base: '/paradise-nursery/'` por el nombre exacto de tu repo si es distinto.
3. Ejecuta:
   ```bash
   npm install
   npm run build
   npm run deploy
   ```
4. En GitHub, ve a **Settings → Pages** y verifica que esté sirviendo desde la rama `gh-pages`.
5. Tu app quedará disponible en: `https://<tu-usuario>.github.io/<repo>/`

## Personalización
- Edita `src/data/plants.js` para cambiar productos, precios e imágenes.
- Estilos en `src/index.css`.
- Componentes en `src/components/`.
- Lógica del carrito en `src/redux/cartSlice.js`.

¡Éxitos con tu proyecto!
