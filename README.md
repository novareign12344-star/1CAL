# 1CAL — deploy-ready notes

I've added a few deploy-focused improvements so you can connect this repo to Netlify and deploy immediately.

What's new
- Contact form success page: `contact-success.html` — the Netlify form redirects here after submit.
- Basic SEO/Open Graph/Twitter meta tags in `index.html` pointing at `/images/social-preview.png`.
- Social preview image: `public/images/social-preview.png` (placeholder). Replace with your branded image if you have one.
- `robots.txt` and `sitemap.xml` added at the repo root.

Before you deploy
- Replace `https://your-site-url/` in `index.html` and `sitemap.xml` with your real site URL after you have your Netlify domain or custom domain.
- Replace placeholder social image at `public/images/social-preview.png` with a real image (1200x630 recommended).

Deploy steps (Netlify)
1. Connect the repository in Netlify (New site → Import from Git → GitHub).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Branch: `main`
5. Deploy and test the contact form. Submitted messages will appear in Netlify → Site → Forms → contact.

