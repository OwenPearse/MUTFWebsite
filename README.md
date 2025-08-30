# Melbourne University Touch Football (MUTF) Website

A simple React site built with Vite. Single global stylesheet, modular components, pages for Home, About, and Fixtures with CSV upload.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Assets
- Place the club logo at `public/logo.png`.
- Committee photos are under `public/ExecPhotos` and `public/NonExecPhotos`.
- Update `src/pages/About.jsx` to edit names and roles.

## Fixtures CSV
Headers expected: `division,date,time,field,opposition`.

Example:
```csv
division,date,time,field,opposition
Men's A,2025-09-01,19:00,Field 1,Opposition A
Women's A,2025-09-02,18:30,Field 3,Opposition C
Mixed,2025-09-03,19:30,Field 4,Opposition D
``` 