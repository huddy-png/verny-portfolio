import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import Process from "./components/Process";
import Projects from "./components/Projects";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showLoadBar, setShowLoadBar] = useState(true);
  const pageRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoadBar(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const page = pageRef.current;

    if (
      !page ||
      !window.matchMedia ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return undefined;
    }

    function handleMouseMove(event) {
      page.style.setProperty("--cx", `${event.clientX}px`);
      page.style.setProperty("--cy", `${event.clientY}px`);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={pageRef} className="app-shell">
      <div className="cursor-spotlight" aria-hidden="true"></div>
      <AnimatePresence>
        {showLoadBar && (
          <Motion.div
            className="page-load-bar"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </AnimatePresence>
      <Analytics />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <WhyMe />
        {/* TODO: replace with real testimonials before launch */}
        <Process />
        <Projects />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
