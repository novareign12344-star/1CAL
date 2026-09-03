import React from "react";
import { site, nav, services, projects, process, promises, formatAddress } from "../lib/site";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-title">{site.name}</h1>
        <p className="tagline">{site.tagline}</p>
        <nav>
          <ul className="nav">
            {nav.map((n) => (
              <li key={n.to}>
                <a href={n.to}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <strong>{site.name}</strong>
          <div>{formatAddress()}</div>
          <div>
            <a href={site.phoneHref}>{site.phone}</a> • <a href={site.emailHref}>{site.email}</a>
          </div>
        </div>
        <div>
          <small>© {new Date().getFullYear()} {site.legalName}</small>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <Header />

      <main className="container main">
        <section id="about" className="hero">
          <h2>{site.tagline}</h2>
          <p>{site.description}</p>
        </section>

        <section id="services">
          <h3>Services</h3>
          <div className="grid">
            {services.map((s) => (
              <article key={s.slug} className="card">
                <img src={s.image} alt={s.title} className="cover" />
                <h4>{s.title}</h4>
                <p>{s.lead}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work">
          <h3>Featured Projects</h3>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.slug} className="card">
                <img src={p.cover} alt={p.title} className="cover" />
                <h4>{p.title}</h4>
                <p>{p.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process">
          <h3>Our Process</h3>
          <ol>
            {process.map((s) => (
              <li key={s.n}>
                <strong>{s.n} — {s.title}</strong>
                <div>{s.body}</div>
              </li>
            ))}
          </ol>
        </section>

        <section id="promises">
          <h3>What We Promise</h3>
          <ul>
            {promises.map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong>
                <div>{p.body}</div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <h3>Contact</h3>
          <p>
            Call us: <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p>
            Email: <a href={site.emailHref}>{site.email}</a>
          </p>
          <p>Office: {site.office} • Owner: {site.owner}</p>

          {/* Netlify form — submissions will appear in Netlify's Forms dashboard */}
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="card contact-form">
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <p>
              <label>
                Your name<br />
                <input type="text" name="name" required />
              </label>
            </p>
            <p>
              <label>
                Your email<br />
                <input type="email" name="email" required />
              </label>
            </p>
            <p>
              <label>
                Phone (optional)<br />
                <input type="tel" name="phone" />
              </label>
            </p>
            <p>
              <label>
                Message<br />
                <textarea name="message" rows={4} required />
              </label>
            </p>
            <p>
              <button type="submit">Send message</button>
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
