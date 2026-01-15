import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        {/* Logo */}
        <div className="nav__logo">M. Brigui</div>

        {/* Navigation links */}
        <nav className="nav__links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
        </nav>

        {/* Right side */}
        <div className="nav__right">
          {/* Social icons */}
          <div className="nav__icons">
            {/* LinkedIn */}
            <a
              className="iconBtn"
              href="https://www.linkedin.com/in/mohamed-radhi-brigui-169588332"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 5.98 3.32 5.98 7.64V24h-5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-5z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              className="iconBtn"
              href="https://github.com/si-brigui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.17.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.48 3.17-1.17 3.17-1.17.63 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.12c0 .31.2.67.8.56A11.53 11.53 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>

          {/* CTA */}
          <a className="nav__cta" href="#contact">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </header>
  );
}
