import { motion as Motion } from "framer-motion";
import { revealItemVariants } from "../revealVariants";
import RevealOnScroll from "./RevealOnScroll";

function WhyMe() {
  const points = [
    {
      title: "Clarity & craft",
      detail: "Design systems that are clean, accessible, and consistent.",
    },
    {
      title: "Business-first execution",
      detail: "Solutions tied to measurable outcomes and conversions.",
    },
    {
      title: "Modern delivery",
      detail: "Scalable frontends and production-ready workflows.",
    },
    {
      title: "Direct collaboration",
      detail: "Transparent updates and fast iteration cycles.",
    },
  ];

  return (
    <section className="py-24 bg-bg text-foreground">
      <RevealOnScroll className="max-w-6xl mx-auto px-4" stagger>
        <div className="mb-10">
          <p className="text-primary uppercase tracking-wide text-sm">
            Why work with me
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            A reliable partner for high-impact web delivery
          </h2>
          <p className="text-muted mt-3 max-w-2xl">
            I focus on building digital solutions that are visually refined,
            scalable, and easy to maintain for the long term.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point) => (
            <Motion.div
              key={point.title}
              variants={revealItemVariants}
              whileHover={{ y: -6 }}
              className="bg-surface/70 border border-border/20 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-muted text-sm">{point.detail}</p>
            </Motion.div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default WhyMe;
