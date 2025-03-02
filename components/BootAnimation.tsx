import React, { useEffect, useState } from 'react';
import './BootAnimation.css';

interface BootAnimationProps {
  onComplete: () => void;
}

const BootAnimation: React.FC<BootAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const bootText = document.getElementById('boot-text');

    const typeText = (text: string, delayBetweenChars = 50): Promise<void> => {
      return new Promise((resolve) => {
        let index = 0;
        const interval = setInterval(() => {
          if (bootText) {
            bootText.innerHTML += text[index];
            index++;
            if (index === text.length) {
              clearInterval(interval);
              bootText.innerHTML += '<br>';
              resolve();
            }
          }
        }, delayBetweenChars);
      });
    };

    const bootSequence = async () => {
      await typeText('Powering on...', 50);
      await new Promise((resolve) => setTimeout(resolve, 500));
      await typeText('Checking hardware... [OK]', 50);
      await typeText('Running portfolio.exe...', 50);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const bootOverlay = document.getElementById('boot-overlay');
      if (bootOverlay) {
        bootOverlay.style.opacity = '0';
        bootOverlay.style.transform = 'translateY(-100%)';
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsVisible(false);
      onComplete();
    };

    bootSequence();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div id="boot-overlay">
      <div id="boot-text"></div>
      <a
        href="#"
        id="skip-intro"
        onClick={(e) => {
          e.preventDefault();
          const bootOverlay = document.getElementById('boot-overlay');
          if (bootOverlay) {
            bootOverlay.style.opacity = '0';
            bootOverlay.style.transform = 'translateY(-100%)';
            setTimeout(() => setIsVisible(false), 1000);
          }
        }}
      >
        Skip Intro
      </a>
    </div>
  );
};

export default BootAnimation;