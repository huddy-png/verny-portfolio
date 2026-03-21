function Services() {
  const services = [
    "Portfolio Websites",
    "Business Websites",
    "Landing Pages",
    "Student Support Platforms",
    "Admin Dashboards",
    "Responsive Frontend Interfaces",
  ];

  return (
    <section id="services" className="section alt-section">
      <div className="container">
        <h2 className="section-title">Services</h2>

        <p className="section-text">
          I build modern web solutions that are clean, responsive and designed
          to solve real user and business needs.
        </p>

        <div className="skills-grid">
          {services.map((service, index) => (
            <div className="skill-card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
