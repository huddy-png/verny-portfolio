import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import RevealOnScroll from "./RevealOnScroll";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

    if (honeypot) {
      setStatus("Submission blocked. Please try again.");
      setStatusType("error");
      setLoading(false);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      setStatusType("error");
      setLoading(false);
      return;
    }

    if (!supabase) {
      setStatus("Contact service is unavailable right now.");
      setStatusType("error");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("portfolio_messages").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      ]);

      if (error) {
        setStatus("Something went wrong. Please try again.");
        setStatusType("error");
        return;
      }

      setStatus("Message sent successfully.");
      setStatusType("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Unexpected error. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface text-foreground">
      <RevealOnScroll className="container max-w-4xl mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Let's Work Together
          </h2>

          <p className="text-center text-muted max-w-2xl mx-auto mb-8">
            Need a professional website, portfolio, landing page, or modern web
            interface? Send a message below and I will get back within 24-48
            hours.
          </p>

          <Motion.form
            onSubmit={handleSubmit}
            className="w-full bg-surface/70 p-6 rounded-2xl shadow-lg"
            whileTap={{ scale: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-border/40 placeholder:text-muted outline-none focus:border-primary"
              />

              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-border/40 placeholder:text-muted outline-none focus:border-primary"
              />

              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-border/40 placeholder:text-muted outline-none focus:border-primary"
              />

              <div className="flex items-center md:justify-end">
                <Motion.button
                  type="submit"
                  disabled={loading}
                  className="ml-auto bg-primary hover:opacity-95 text-black font-semibold px-6 py-3 rounded-lg shadow-md"
                  whileHover={{ scale: loading ? 1 : 1.04 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Motion.button>
              </div>
            </div>

            <label className="sr-only" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-4 px-4 py-3 rounded-lg bg-transparent border border-border/40 placeholder:text-muted outline-none focus:border-primary"
            ></textarea>

            {status && (
              <div
                className={`mt-4 rounded-lg border px-4 py-3 text-center font-medium ${
                  statusType === "success"
                    ? "border-green-400/40 bg-green-500/10 text-green-300"
                    : "border-red-400/40 bg-red-500/10 text-red-300"
                }`}
                role="status"
                aria-live="polite"
              >
                <p>{status}</p>
                {statusType === "error" && (
                  <a
                    className="mt-2 inline-block underline"
                    href="mailto:emilliojohnverny@gmail.com"
                  >
                    Email me directly
                  </a>
                )}
              </div>
            )}
          </Motion.form>

          <div className="mt-6 text-center text-muted">
            <a
              className="block hover:text-foreground"
              href="mailto:emilliojohnverny@gmail.com"
            >
              emilliojohnverny@gmail.com
            </a>
            <a className="block hover:text-foreground" href="tel:+254722847842">
              +254 722 847 842
            </a>
            <a className="block hover:text-foreground" href="tel:+254753893862">
              +254 753 893 862
            </a>
            <a
              className="block mt-2 text-primary hover:underline"
              href="https://wa.me/254722847842"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Motion.div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
