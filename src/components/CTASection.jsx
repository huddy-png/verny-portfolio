function CTASection() {
  return (
    <section className="py-16 bg-surface text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-border/20 bg-surface/70 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-primary uppercase tracking-wide text-sm">
              Ready to start?
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Let’s build something exceptional
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Tell me about your goals and I will reply with a clear plan and
              timeline.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-primary text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-95"
          >
            Book a project
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
