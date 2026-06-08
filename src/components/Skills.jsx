import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";
import { revealItemVariants } from "../revealVariants";
import RevealOnScroll from "./RevealOnScroll";

function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const categories = [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", proficiency: 92 },
        { name: "CSS3", proficiency: 90 },
        { name: "JavaScript", proficiency: 88 },
        { name: "React", proficiency: 86 },
        { name: "Responsive Design", proficiency: 94 },
      ],
    },
    {
      title: "Backend & Data",
      items: [
        { name: "Supabase", proficiency: 84 },
        { name: "Node", proficiency: 78 },
        { name: "REST APIs", proficiency: 82 },
        { name: "SQL", proficiency: 76 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git & GitHub", proficiency: 88 },
        { name: "Vite", proficiency: 85 },
        { name: "Figma", proficiency: 74 },
        { name: "Cloudflare", proficiency: 72 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-bg text-foreground" ref={sectionRef}>
      <RevealOnScroll className="max-w-6xl mx-auto px-4" stagger>
        <div className="mb-10">
          <p className="text-primary uppercase tracking-wide text-sm">Skills</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            A modern, production-ready toolkit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Motion.div
              key={category.title}
              variants={revealItemVariants}
              whileHover={{ y: -6 }}
              className="bg-surface/70 border border-border/20 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between gap-3 text-xs text-muted mb-2">
                      <span>{item.name}</span>
                      <span>{item.proficiency}%</span>
                    </div>
                    <div className="h-[3px] rounded-full bg-border/20 overflow-hidden">
                      <Motion.div
                        className="h-full rounded-full bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: inView ? `${item.proficiency}%` : "0%" }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: index * 0.07,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Skills;
