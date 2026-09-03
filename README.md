# Short instructions

This repository is a small Vite + React site for 1Call Remodeling. It uses the
site data in src/lib/site.ts to render a static brochure website.

To run locally:

- Install dependencies: npm install
- Start dev server: npm run dev
- Build for production: npm run build
- Preview production build: npm run preview

Deploy to Netlify:

- Connect this GitHub repository to Netlify.
- Set build command to: npm run build
- Set publish directory to: dist

Replace images in /public or update the paths in src/lib/site.ts as needed.
