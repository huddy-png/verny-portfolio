import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

const headline =
  "I build premium web experiences that convert visitors into customers.";
const roles = [
  "Full Stack Developer",
  "React Specialist",
  "UI/UX Builder",
  "Supabase Expert",
];

function MagneticLink({ children, className, href, ...props }) {
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
      {...props}
    >
      {children}
    </Motion.a>
  );
}

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const wordContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageWrap = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-bg text-foreground">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-one" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-two" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-three" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-four" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <div className="space-y-6">
          <div className="h-6 overflow-hidden text-primary">
            <AnimatePresence mode="wait">
              <Motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase"
              >
                {roles[roleIndex]}
              </Motion.span>
            </AnimatePresence>
          </div>

          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-muted"
          >
            Verny Emillio John
          </Motion.p>

          <Motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
          >
            {headline.split(" ").map((item) => (
              <Motion.span
                key={item}
                variants={word}
                className="inline-block mr-3"
              >
                {item}
              </Motion.span>
            ))}
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted text-lg max-w-xl"
          >
            From high-end portfolios to data-driven platforms, I design and
            deliver production-ready systems with clean UI, scalable code, and
            measurable impact.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticLink
              href="#projects"
              className="bg-primary text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-95"
            >
              View My Work
            </MagneticLink>
            <MagneticLink
              href="#contact"
              className="border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-black"
            >
              Start a Project
            </MagneticLink>
            {/* TODO: add public/cv.pdf */}
            {/*
            <MagneticLink
              href="/cv.pdf"
              className="border border-slate-600 text-slate-200 px-6 py-3 rounded-lg hover:border-primary"
              download
            >
              Download CV
            </MagneticLink>
            */}
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex items-center gap-5 text-muted text-sm flex-wrap"
          >
            <span>Based in Nairobi, Kenya</span>
            <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
            <span>Open to remote work</span>
            <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
            <span>24-48h response</span>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap gap-3 text-xs text-muted"
          >
            <span className="px-3 py-1 rounded-full border border-border/30 bg-surface/60">
              Conversion-focused design
            </span>
            <span className="px-3 py-1 rounded-full border border-border/30 bg-surface/60">
              Fast, transparent delivery
            </span>
            <span className="px-3 py-1 rounded-full border border-border/30 bg-surface/60">
              Scalable, maintainable code
            </span>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex gap-6 text-sm text-muted"
          >
            {/* TODO: add real GitHub URL */}
            <a href="#" className="hover:text-foreground">
              GitHub
            </a>
            {/* TODO: add real LinkedIn URL */}
            <a href="#" className="hover:text-foreground">
              LinkedIn
            </a>
          </Motion.div>
        </div>

        <Motion.div
          variants={imageWrap}
          initial="hidden"
          animate="show"
          className="relative mx-auto"
        >
          <div className="w-72 h-96 md:w-80 md:h-[26rem] rounded-3xl overflow-hidden border border-border/20 shadow-2xl bg-surface/70">
            <img
              src="/profile.jpg"
              alt="Verny Emillio John"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -bottom-6 -left-6 bg-surface/90 text-foreground px-4 py-3 rounded-xl border border-border/20"
          >
            <p className="text-sm">10+ projects shipped</p>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -top-6 -right-6 bg-surface/90 text-foreground px-4 py-3 rounded-xl border border-border/20"
          >
            <p className="text-sm">3+ years experience</p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;
