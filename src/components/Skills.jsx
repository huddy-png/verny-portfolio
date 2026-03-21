function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "java",
    "React",
    "Git & GitHub",
    "Responsive Design",
    "UI Design",
    "Frontend Development",
  ];

  return (
    <section id="skills" className="section alt-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
