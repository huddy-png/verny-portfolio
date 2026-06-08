import { motion as Motion, useMotionValue, useSpring } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

function MagneticLink({ children, className, href }) {
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-8, Math.min(8, offsetX * 0.15)));
    y.set(Math.max(-8, Math.min(8, offsetY * 0.15)));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Motion.a
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </Motion.a>
  );
}

function CTASection() {
  return (
    <section className="py-16 bg-surface text-foreground">
      <RevealOnScroll className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-border/20 bg-surface/70 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-primary uppercase tracking-wide text-sm">
              Ready to start?
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Let's build something exceptional
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Tell me about your goals and I will reply with a clear plan and
              timeline.
            </p>
          </div>
          <MagneticLink
            href="#contact"
            className="bg-primary text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-95"
          >
            Book a project
          </MagneticLink>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default CTASection;
