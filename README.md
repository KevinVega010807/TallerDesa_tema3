# Taller Tema 3 — Maquetación moderna y diseño responsivo en CSS

IF0009 Desarrollo de Software IV / IF4101 — II-2026

Plantilla base del taller guiado: **Dashboard / Catálogo VideoRent**.
Está hecha a propósito con un **diseño rígido** (medidas fijas en px, anchos fijos y floats):
se ve bien en escritorio, pero **se rompe en pantallas móviles**.
Durante el taller la vamos a transformar en un diseño responsivo.

## Cómo empezar
```bash
npm install
ng serve
```
1. Abrir http://localhost:4200/catalogo
2. Abrir Chrome DevTools (`F12`) y activar el modo dispositivo (`Ctrl+Shift+M`)
3. Elegir un teléfono (ej. iPhone SE) y observar los problemas

## Archivos que se trabajan en el taller
- `src/styles.css` → estilos y variables globales
- `src/app/catalogo/catalogo-dashboard/catalogo-dashboard.component.css` → estilos del dashboard
- `src/app/catalogo/catalogo-dashboard/catalogo-dashboard.component.html` → estructura (no se modifica)

> Las rutas `buscar-pelicula` e `insertar-pelicula` son del proyecto del curso y necesitan el backend.
> El taller **no** necesita backend: el catálogo usa datos de prueba.
