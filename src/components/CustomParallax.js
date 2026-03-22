import React, { useState } from 'react';
import '../CSS/CustomParallax.css';

const CustomParallax = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Calculate mouse position relative to the center of the viewport
    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div className="parallax-wrap" onMouseMove={handleMouseMove}>
      {/* Background Layer */}
      <div
        className="parallax-layer background"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
        }}
      >
        {/* Background content */}
      </div>

      {/* Foreground Layer */}
      <div
        className="parallax-layer foreground"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
        }}
      >
        {/* Foreground content */}

      </div>
    </div>
  );
};

export default CustomParallax;