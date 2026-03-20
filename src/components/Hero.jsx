function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-tag">Full Stack Developer</p>

          <h1>
            Hi, I'm <span>Verny Emillio John</span>
          </h1>

          <p className="hero-description">
            I build modern, responsive and professional web applications using
            React and JavaScript. I focus on creating real-world solutions that
            are useful, scalable and visually clean.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>

            <a href="/cv.pdf" className="btn secondary" download>
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/huddy-png"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/verny-emillio-john"
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
