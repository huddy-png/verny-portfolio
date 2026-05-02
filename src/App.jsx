import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Projects from "./components/Projects";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
        <Testimonials />
        <Process />
        <Projects />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
