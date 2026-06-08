import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "midnight",
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "theme-carbon",
      theme === "carbon",
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    setTheme((prev) => (prev === "carbon" ? "midnight" : "carbon"));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      aria-label="Primary"
    >
      <div className="container nav-content">
        <h2 className="logo">Verny John</h2>

        <ul className="nav-links nav-links-desktop">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Motion.button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="theme-dot" aria-hidden="true"></span>
            <span>{theme === "carbon" ? "Carbon" : "Midnight"}</span>
          </Motion.button>

          <Motion.button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
