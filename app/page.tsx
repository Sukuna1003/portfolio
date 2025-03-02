"use client"
import { useState } from 'react';
import BootAnimation from "../components/BootAnimation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleBootComplete = () => {
    setShowAnimation(false);
    setTimeout(() => setContentVisible(true), 50); // Slight delay for smoothness
  };

  return (
    <>
      {showAnimation && <BootAnimation onComplete={handleBootComplete} />}
      <div id="main-content" className={contentVisible ? 'visible' : ''}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}