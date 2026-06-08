import { motion as Motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Verny delivered a clean, conversion-focused site that elevated our brand and improved inquiries within the first week.",
      name: "Client, Education Services",
    },
    {
      quote:
        "The project was handled with clarity, speed, and great attention to detail. Communication was excellent throughout.",
      name: "Client, SaaS Founder",
    },
    {
      quote:
        "Our platform went from concept to production-ready in record time. The UI and workflow are both strong.",
      name: "Client, Operations Lead",
    },
  ];

  return (
    <section className="py-24 bg-surface text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-primary uppercase tracking-wide text-sm">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Results clients can feel
          </h2>
          <p className="text-muted mt-3 max-w-2xl">
            Trusted by clients who value clean design, fast delivery, and clear
            communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              className="bg-surface/70 border border-border/20 rounded-2xl p-6"
            >
              <p className="text-muted mb-4">"{item.quote}"</p>
              <p className="text-sm font-semibold">{item.name}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
