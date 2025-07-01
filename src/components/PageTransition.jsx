import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(true);
      setIsVisible(false);
      
      setTimeout(() => {
        setIsVisible(true);
        setIsTransitioning(false);
      }, 150);
    };

    handleRouteChange();
  }, [location.pathname]);

  return (
    <div
      className={`page-transition ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${isTransitioning ? 'transitioning' : ''}`}
    >
      {children}
    </div>
  );
};

export default PageTransition; 