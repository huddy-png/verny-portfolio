import { motion } from "framer-motion";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    },
    {
      title: "Backend & Data",
      items: ["Supabase", "Node", "REST APIs", "SQL"],
    },
    {
      title: "Tools",
      items: ["Git & GitHub", "Vite", "Figma", "Cloudflare"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-bg text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-primary uppercase tracking-wide text-sm">Skills</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            A modern, production-ready toolkit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -6 }}
              className="bg-surface/70 border border-border/20 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full border border-border/40 text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
