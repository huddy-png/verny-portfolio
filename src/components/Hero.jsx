function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-tag">Full Stack Developer</p>

          <h1>
            I build <span>modern websites and digital systems</span> that help
            students, professionals and businesses solve real problems.
          </h1>

          <p className="hero-description">
            From portfolios and landing pages to support platforms and admin
            systems, I create responsive, professional and functional web
            solutions that are built for real use.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a href="#contact" className="btn secondary">
              Start a Project
            </a>

            <a href="/cv.pdf" className="btn secondary" download>
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-card">
            <img src="/profile.jpg" alt="Verny Emillio John" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
