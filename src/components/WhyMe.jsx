function WhyMe() {
  const points = [
    "Clean and responsive design",
    "Practical solutions for real needs",
    "Modern frontend and backend workflow",
    "Direct communication and support",
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why Work With Me</h2>

        <p className="section-text">
          I focus on building digital solutions that are not only visually
          professional but also practical, scalable and easy to use.
        </p>

        <div className="skills-grid">
          {points.map((point, index) => (
            <div className="skill-card" key={index}>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyMe;
