// AnimatedBackground.js
import React, { useEffect } from 'react';
import './Animated.css'; 

const AnimatedBackground = ({ children }) => {
  useEffect(() => {
    const section = document.querySelector('.portfolio-section');

    if (!section) {
      console.error('Element not found');
      return;
    }

    function createShape(type) {
      const shape = document.createElement('div');
      shape.classList.add('animated-shape');

      if (type === 'circle') {
        shape.style.width = '80px';
        shape.style.height = '80px';
        shape.style.borderRadius = '50%';
      } else if (type === 'square') {
        shape.style.width = '80px';
        shape.style.height = '80px';
      } else if (type === 'triangle') {
        shape.style.width = '0';
        shape.style.height = '0';
        shape.style.borderLeft = '30px solid transparent';
        shape.style.borderRight = '30px solid transparent';
        shape.style.borderBottom = '60px solid rgba(0, 0, 0, 0.1)';
      }

      shape.style.top = `${Math.random() * 100}%`;
      shape.style.left = `${Math.random() * 100}%`;

      shape.style.animationDuration = `${Math.random() * 20 + 10}s`;

      section.appendChild(shape);
    }

    for (let i = 0; i < 10; i++) {
      const type = ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)];
      createShape(type);
    }
  }, []);

  return (
    <div className="portfolio-section">
      {children} 
    </div>
  );
};

export default AnimatedBackground;
