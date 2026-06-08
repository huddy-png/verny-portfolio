import { motion as Motion } from "framer-motion";
import { revealItemVariants } from "../revealVariants";
import RevealOnScroll from "./RevealOnScroll";

function Process() {
  const steps = [
    {
      title: "Discovery",
      detail: "Clarify goals, audience, and success metrics.",
    },
    {
      title: "Design",
      detail: "Build a clean UI system and conversion-focused layout.",
    },
    {
      title: "Build",
      detail: "Develop fast, responsive, and scalable components.",
    },
    {
      title: "Launch",
      detail: "Test, optimize, and ship with confidence.",
    },
  ];

  return (
    <section className="py-24 bg-bg text-foreground">
      <RevealOnScroll className="max-w-6xl mx-auto px-4" stagger>
        <div className="mb-10">
          <p className="text-primary uppercase tracking-wide text-sm">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            A clear path from idea to launch
          </h2>
          <p className="text-muted mt-3 max-w-2xl">
            A streamlined process that keeps projects on track and results
            measurable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Motion.div
              key={step.title}
              variants={revealItemVariants}
              whileHover={{ y: -6 }}
              className="bg-surface/70 border border-border/20 rounded-2xl p-6"
            >
              <p className="text-primary text-sm font-semibold mb-2">
                Step {index + 1}
              </p>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted text-sm">{step.detail}</p>
            </Motion.div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Process;
