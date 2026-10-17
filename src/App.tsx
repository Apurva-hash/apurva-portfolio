import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DesignProcess from "./components/DesignProcess";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="portfolio-app-root">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DesignProcess />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
