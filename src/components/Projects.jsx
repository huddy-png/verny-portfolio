function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A professional portfolio website built with React to showcase my skills, projects and contact information in a clean modern layout.",
      tech: "React, JavaScript, CSS",
      github: "#",
      live: "#",
    },
    {
      title: "Student Support Platform",
      description:
        "A platform concept designed to help students access services, submit requests and track progress through a simple digital experience.",
      tech: "HTML, CSS, JavaScript",
      github: "#",
      live: "https://kuccpsassist.online",
    },
    {
      title: "Business Landing Page",
      description:
        "A modern landing page designed to help brands present services clearly and build a stronger online presence.",
      tech: "React, CSS",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
