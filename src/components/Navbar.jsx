import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("midnight");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "midnight";
    setTheme(savedTheme);
    document.documentElement.classList.toggle(
      "theme-carbon",
      savedTheme === "carbon",
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "theme-carbon",
      theme === "carbon",
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "carbon" ? "midnight" : "carbon"));
  }

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="container nav-content">
        <h2 className="logo">Verny John</h2>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="theme-toggle" type="button" onClick={toggleTheme}>
          <span className="theme-dot" aria-hidden="true"></span>
          <span>{theme === "carbon" ? "Carbon" : "Midnight"}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
