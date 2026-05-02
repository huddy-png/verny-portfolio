import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Portfolio Websites",
      detail: "Premium personal brands, case studies, and lead capture.",
    },
    {
      title: "Business Websites",
      detail: "Marketing sites that build trust and drive conversions.",
    },
    {
      title: "Landing Pages",
      detail: "High-impact product launches and campaign funnels.",
    },
    {
      title: "Student Support Platforms",
      detail: "Workflow-driven portals with dashboards and analytics.",
    },
    {
      title: "Admin Dashboards",
      detail: "Operational visibility with role-based access controls.",
    },
    {
      title: "Responsive UI Systems",
      detail: "Component libraries for scalable product teams.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-surface text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-primary uppercase tracking-wide text-sm">Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            End-to-end web solutions
          </h2>
          <p className="text-muted mt-3 max-w-2xl">
            I build modern web solutions that are clean, responsive, and focused
            on measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              className="bg-surface/70 border border-border/20 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted text-sm">{service.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
