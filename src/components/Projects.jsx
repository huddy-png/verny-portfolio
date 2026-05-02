import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "../supabaseClient";

const PROJECTS = [
  {
    title: "KUCCPS Assist Platform",
    description:
      "Student support platform with document upload, guided workflows, and admin-managed requests.",
    tech: ["Supabase", "JavaScript", "Cloudflare"],
    live: "https://kuccpsassist.online",
    github: "",
    impact: "Improved applicant turnaround time by 60%.",
    category: "Platforms",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A high-converting portfolio showcasing skills, case studies, and contact system.",
    tech: ["React", "Supabase", "Vite"],
    live: "https://vernyjohn.me",
    github: "",
    impact: "Generated consistent inbound inquiries.",
    category: "Portfolio",
  },
  {
    title: "Business Landing Page",
    description: "Modern brand website focused on clarity, trust, and conversion.",
    tech: ["React", "CSS"],
    live: "",
    github: "",
    impact: "Improved lead capture by 35%.",
    category: "Landing Page",
  },
];

const FILTERS = ["All", "Platforms", "Portfolio", "Landing Page"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectData, setProjectData] = useState(PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchProjects() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("portfolio_projects")
        .select("title, description, tech, live, github, impact, category")
        .order("created_at", { ascending: false });

      if (!mounted) {
        return;
      }

      if (!error && data && data.length > 0) {
        const normalized = data.map((item) => ({
          title: item.title,
          description: item.description,
          tech: Array.isArray(item.tech) ? item.tech : item.tech?.split(",") || [],
          live: item.live || "",
          github: item.github || "",
          impact: item.impact || "",
          category: item.category || "Other",
        }));
        setProjectData(normalized);
      }

      setLoading(false);
    }

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const dynamicFilters = useMemo(() => {
    const categories = new Set(projectData.map((project) => project.category));
    return ["All", ...categories];
  }, [projectData]);

  useEffect(() => {
    if (!dynamicFilters.includes(activeFilter)) {
      setActiveFilter("All");
    }
  }, [activeFilter, dynamicFilters]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectData;
    }

    return projectData.filter((project) => project.category === activeFilter);
  }, [activeFilter, projectData]);

  return (
    <section id="projects" className="py-24 bg-bg text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <p className="text-primary text-sm uppercase tracking-wide">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Featured Projects
            </h2>
          </div>
          <a href="#contact" className="text-sm text-muted hover:text-foreground">
            Need something similar? Let’s talk →
          </a>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {dynamicFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeFilter === filter
                  ? "bg-primary text-black border-primary"
                  : "border-border/40 text-muted hover:border-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                whileHover={{ y: -6 }}
                className="bg-surface/70 border border-border/20 rounded-2xl p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>
                {project.impact && (
                  <p className="text-sm text-primary mb-4">{project.impact}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full border border-border/40 text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm border border-border/40 px-4 py-2 rounded-lg hover:border-primary"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm bg-primary text-black px-4 py-2 rounded-lg"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {loading && (
          <p className="text-muted text-sm mt-6">Loading projects...</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
