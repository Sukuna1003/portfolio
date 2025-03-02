import Image from "next/image";
import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero" id="hero">
      <div className="terminal-frame">
        <div className="terminal-header">
          <span className="terminal-buttons">
            <span className="terminal-button close"></span>
            <span className="terminal-button minimize"></span>
            <span className="terminal-button maximize"></span>
          </span>
          <span className="terminal-title">profile.jpg - Terminal</span>
        </div>
        <div className="terminal-body">
          <Image
            src="/profile.jpg"
            alt="Your Name"
            width={250}
            height={250}
            className="profile-image"
          />
        </div>
      </div>
      <div className="hero-content">
        <h2>Hello, I’m Vishesh</h2>
        <p className="tagline">
          “Crafting efficient code, one algorithm at a time.”
        </p>
        <p className="bio">
          C/C++ Developer | DSA Enthusiast | Web Developer
        </p>
        <button onClick={() => setIsModalOpen(true)} className="resume-button">
          View Portfolio
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <Image
              src="/resume.jpg" // Replace with your actual portfolio image path
              alt="Portfolio"
              layout="responsive"
              width={800} // Base width for aspect ratio
              height={600} // Base height for aspect ratio
              className="portfolio-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}