import { useState } from "react";
import { supabase } from "../supabaseClient";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

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
        return;
      }

      setStatus("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section alt-section">
      <div className="container">
        <h2 className="section-title">Let’s Work Together</h2>

        <p className="section-text">
          Need a professional website, portfolio, landing page or modern web
          interface? Send me a message below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="contact-links">
          <a href="mailto:emilliojohnverny@gmail.com">
            emilliojohnverny@gmail.com
          </a>

          <a href="tel:+254722847842">+254 722 847 842</a>

          <a href="tel:+254753893862">+254 753 893 862</a>

          <a href="https://wa.me/254722847842" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
