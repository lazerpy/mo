import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive-card, .hover-lift, .hover-glow');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          transform: isHovering ? 'scale(1.1)' : 'scale(1)',
          width: '8px',
          height: '8px',
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: isHovering ? 'scale(1.05)' : 'scale(1)',
          width: '20px',
          height: '20px',
        }}
      />
    </>
  );
};

export default CustomCursor; 