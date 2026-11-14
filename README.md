# SINGO CSBV Demo

Public demo website for SINGO 20# carbon steel ball valves.

The current review theme is white industrial with graphite text and yellow accents.

Live demo: <https://cvdgauss-beep.github.io/singo-csbv-site/>

## Status

- Demonstration and layout review only.
- Product visuals are AI-generated placeholders and are labeled as demo visuals.
- Product specifications and certifications are pending verification.
- Languages: English, Russian, Arabic.
- Built with Vite and React.
- Deployed with GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The deployable static output is generated in `dist/client`.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy-pages.yml` and publish `dist/client` through GitHub Pages.
