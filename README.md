# MD. Suffiullah — Data Analytics Portfolio

This repository contains a **static React + Vite portfolio** for MD. Suffiullah, an aspiring Data Analyst and MIS student at the University of Dhaka. The published website has no backend, database, authentication layer, server-side rendering, or paid-hosting requirement. Its interactions—smooth scrolling, the responsive menu, and concise informational notices—run entirely in the visitor’s browser.

## Local use

Install dependencies with `pnpm install`, start a local preview with `pnpm dev`, and create the publishable static website with `pnpm build`. The finished website is written to the `dist/` directory. `pnpm preview` serves that static folder locally for a final check; it is not part of the live site.

## Publish free with GitHub Pages

Push this repository to GitHub on the `main` branch. In the repository, open **Settings → Pages**, choose **GitHub Actions** as the deployment source, and allow the included workflow to complete. The workflow builds `dist/` and publishes only those static files to GitHub Pages. The relative Vite base path lets the same build work at either a user site or a repository subpath. This follows Vite’s static deployment guidance for GitHub Pages.[1]

## Updating the portfolio

The small, clearly labelled data structures in `client/src/pages/Home.tsx` hold the projects, learning record, skills, toolbox, and contact links. Replace a developing case study with real completed project details, a verified GitHub URL, a live dashboard URL, and one evidence-based insight. Replace learning-record cards only with genuine certificates, achievements, or links that you can verify.

## Important project notes

The application deliberately has no API calls or database-backed flows. It uses email, LinkedIn, GitHub, and public CDN image URLs directly, so all visible portfolio features remain client-side and functional on static hosting. The template’s unused `server/` compatibility stub is excluded from the static build and GitHub Pages workflow; GitHub Pages deploys only the Vite-generated `dist/` folder.

## Reference

[1]: https://vite.dev/guide/static-deploy "Vite — Deploying a Static Site"
