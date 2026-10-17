# Wadie Gaddour — Data Analyst & BI Engineer

A data-driven professional portfolio built with React and Vite. The central
“Query My Career” experience lets visitors explore verified experience,
internships, and projects through generated SQL, DAX, or plain-language
queries—without writing code.

The interface uses a premium light theme by default, with a matching dark theme
available from the navigation, and ships in two languages (English and French).
Theme and language selections are stored in `localStorage` under
`portfolio-theme` (`light` | `dark`) and `portfolio-language` (`en` | `fr`).

## Structure

- Portfolio content is stored in `src/data/portfolioData.js`. Every
  translatable field is an `{ en, fr }` object.
- UI strings (navigation, labels, section copy) live in `src/data/uiText.js`.
- `src/hooks/useLanguage.js` exposes `LanguageContext`, `useLanguage()`, and the
  `pick(value, language)` helper used to resolve `{ en, fr }` fields.
- Reusable portfolio sections live in `src/components/portfolio/`.
- Global visual styling is split between `src/index.css` and `src/App.css`.
- Theme design tokens are defined in `src/index.css`.
- `src/App.jsx` defines the page composition, theme/language state, and
  query-result state.

## Content rules

- Content must remain aligned with the CV: no invented roles, projects,
  metrics, or certifications.
- Learning-roadmap technologies must not be moved into established skills
  unless they are explicitly confirmed.
- When adding content, provide both `en` and `fr` values.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```
