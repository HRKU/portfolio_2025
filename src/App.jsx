import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage" className="fullscreen-section">
        <Navbar />
        <Hero className="fullscreen-section" />
      </section>
      <section id="Work Experience" className="fullscreen-section">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects" className="fullscreen-section">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact" className="fullscreen-section">
        <Contact />
      </section>
      <section id="About" className="fullscreen-section" style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
        <About />
      </section>
    </div>
  );
};

export default App;
