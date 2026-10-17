import { useEffect, useState } from "react";
import "./App.css";
import QueryBuilder from "./components/portfolio/QueryBuilder";
import {
  About,
  Contact,
  Credentials,
  Experience,
  Internships,
  Projects,
  QueryResults,
  Roadmap,
  Skills,
} from "./components/portfolio/PortfolioSections";
import { profile } from "./data/portfolioData";
import { ui } from "./data/uiText";
import { LanguageContext, pick } from "./hooks/useLanguage";

const navItems = ["about", "experience", "projects", "skills", "certifications", "education"];
const heroStack = ["Power BI", "Power Automate", "SharePoint", "DAX", "SQL", "Python"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [results, setResults] = useState(null);
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light",
  );
  const [language, setLanguage] = useState(() =>
    localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en",
  );
  const copy = ui[language];

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={language}>
      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="#top" aria-label={copy.nav.home}>
            <span>WG</span>
            <div>Wadie Gaddour<small>Data Analyst / BI</small></div>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? copy.nav.close : copy.nav.menu}
          </button>
          <nav className={menuOpen ? "nav open" : "nav"} id="primary-navigation">
            {navItems.map((id) => (
              <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                {copy.nav[id]}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#query">{copy.nav.cta} <span>↗</span></a>
          <div className="language-switch" role="group" aria-label={copy.nav.language}>
            {["en", "fr"].map((code) => (
              <button
                aria-pressed={language === code}
                className={language === code ? "active" : ""}
                key={code}
                onClick={() => setLanguage(code)}
                type="button"
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="theme-toggle"
            aria-label={theme === "light" ? copy.nav.themeToDark : copy.nav.themeToLight}
            title={theme === "light" ? copy.nav.themeToDark : copy.nav.themeToLight}
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            type="button"
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
          </button>
        </header>

        <main>
          <section className="hero section" id="top">
            <div className="hero-copy">
              <p className="hero-kicker">{copy.hero.kicker}</p>
              <h1>{profile.name}</h1>
              <p className="hero-role">{pick(profile.role, language)}</p>
              <p className="hero-headline">{pick(profile.headline, language)}</p>
              <p className="hero-statement">{pick(profile.statement, language)}</p>
              <div className="hero-actions">
                <a className="primary-button" href="#projects">
                  {copy.hero.primary} <span>→</span>
                </a>
                <a className="secondary-button" href="#query">{copy.hero.secondary}</a>
              </div>
              <div className="hero-links">
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={`mailto:${profile.email}?subject=${encodeURIComponent(copy.hero.resumeSubject)}`}>
                  {copy.hero.resume}
                </a>
              </div>
            </div>
            <div className="hero-portrait">
              <div className="portrait-stage">
                <span className="stage-ring" aria-hidden="true" />
                <span className="stage-grid" aria-hidden="true" />
                <img
                  src="/images/wadieblanc.png"
                  alt={copy.hero.portraitAlt}
                  width="836"
                  height="838"
                  fetchPriority="high"
                />
              </div>
              <div className="portrait-note">
                <span><i /> {copy.hero.badge}</span>
                <strong>{copy.hero.noteTop}<br />{copy.hero.noteBottom}</strong>
              </div>
            </div>
            <div className="hero-stack" aria-label={copy.hero.kicker}>
              {heroStack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </section>

          <QueryBuilder onResults={setResults} />
          <QueryResults results={results} />
          <About />
          <Experience />
          <Internships />
          <Projects />
          <Skills />
          <Roadmap />
          <Credentials />
          <Contact />
        </main>

        <footer>
          <a className="brand" href="#top">
            <span>WG</span>
            <div>Wadie Gaddour<small>Data Analyst / BI</small></div>
          </a>
          <p>{copy.footer.tagline}</p>
          <a href="#top">{copy.footer.top}</a>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
