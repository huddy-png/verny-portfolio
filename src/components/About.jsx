import { motion as Motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

function useCountUp(target, duration = 1800, active = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    let frameId;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    }

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [active, duration, target]);

  return value;
}

function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const years = useCountUp(3, 1800, statsInView);
  const projects = useCountUp(10, 1800, statsInView);
  const industries = useCountUp(5, 1800, statsInView);
  const support = useCountUp(24, 1800, statsInView);

  return (
    <section id="about" className="py-24 bg-surface text-foreground">
      <RevealOnScroll className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary uppercase tracking-wide text-sm mb-2">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Building reliable web experiences with clean design and scalable
            systems.
          </h2>
          <p className="text-muted mb-4">
            I am Verny Emillio John, a Full Stack Developer focused on delivering
            modern, responsive, and user-friendly web applications.
          </p>
          <p className="text-muted mb-4">
            I help students, businesses, and organizations transform ideas into
            production-ready platforms with clear UX, solid architecture, and
            measurable results.
          </p>
          <p className="text-muted">
            I enjoy building products such as student support platforms,
            portfolios, landing pages, and admin-managed systems.
          </p>
        </Motion.div>

        <Motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-surface/70 border border-border/20 rounded-2xl p-5">
            <p className="text-3xl font-heading font-bold">{years}+</p>
            <p className="text-muted text-sm">Years experience</p>
          </div>
          <div className="bg-surface/70 border border-border/20 rounded-2xl p-5">
            <p className="text-3xl font-heading font-bold">{projects}+</p>
            <p className="text-muted text-sm">Projects shipped</p>
          </div>
          <div className="bg-surface/70 border border-border/20 rounded-2xl p-5">
            <p className="text-3xl font-heading font-bold">{industries}+</p>
            <p className="text-muted text-sm">Industries served</p>
          </div>
          <div className="bg-surface/70 border border-border/20 rounded-2xl p-5">
            <p className="text-3xl font-heading font-bold">{support}/7</p>
            <p className="text-muted text-sm">Support mindset</p>
          </div>
        </Motion.div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
