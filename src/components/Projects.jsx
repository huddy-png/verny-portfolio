function Projects() {
  const projects = [
    {
      title: "KUCCPS Assist Platform",
      description:
        "A student support platform built to help learners access KUCCPS application guidance, submit bookings, upload required documents, track requests and interact with an admin-managed support workflow.",
      tech: "HTML, CSS, JavaScript, Supabase, Cloudflare",
      github: "",
      live: "https://kuccpsassist.online",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A professional React portfolio built to showcase my skills, projects, contact system and live web development work in a clean modern layout.",
      tech: "React, JavaScript, CSS, Supabase",
      github: "",
      live: "https://vernyjohn.me",
    },
    {
      title: "Business Landing Page",
      description:
        "A modern business website designed to help brands present services clearly, build trust and create a stronger online presence.",
      tech: "React, CSS",
      github: "",
      live: "",
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
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
