import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg text-foreground">
      <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
            Full Stack Developer
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            I build premium web experiences that convert visitors into
            customers.
          </h1>

          <p className="text-muted text-lg max-w-xl">
            From high-end portfolios to data-driven platforms, I design and
            deliver production-ready systems with clean UI, scalable code, and
            measurable impact.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-primary text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-95"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-black"
            >
              Start a Project
            </a>
            <a
              href="/cv.pdf"
              className="border border-slate-600 text-slate-200 px-6 py-3 rounded-lg hover:border-primary"
              download
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-5 text-muted text-sm">
            <span>Based in Nairobi, Kenya</span>
            <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
            <span>Open to remote work</span>
            <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
            <span>24-48h response</span>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-muted">
            <span className="px-3 py-1 rounded-full border border-border/30 bg-surface/60">
              Conversion-focused design
            </span>
            <span className="px-3 py-1 rounded-full border border-border/30 bg-surface/60">
              Fast, transparent delivery
            </span>
            <span className="px-3 py-1 rounded-full border border-border/30 bg-surface/60">
              Scalable, maintainable code
            </span>
          </div>

          <div className="flex gap-6 text-sm text-muted">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto"
        >
          <div className="w-72 h-96 md:w-80 md:h-[26rem] rounded-3xl overflow-hidden border border-border/20 shadow-2xl bg-surface/70">
            <img
              src="/profile.jpg"
              alt="Verny Emillio John"
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface/90 text-foreground px-4 py-3 rounded-xl border border-border/20">
            <p className="text-sm">10+ projects shipped</p>
          </div>
          <div className="absolute -top-6 -right-6 bg-surface/90 text-foreground px-4 py-3 rounded-xl border border-border/20">
            <p className="text-sm">3+ years experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
