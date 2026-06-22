import React, { useState, useEffect } from 'react';
import '../App.css'; // Reuse existing spinner CSS

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleDOMContentLoaded = () => {
      // Load all images for true content readiness
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) {
          return Promise.resolve();
        }
        return new Promise(resolve => {
          img.onload = img.onerror = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setLoading(false);
      }).catch(() => {
        // Fallback if some images fail
        setLoading(false);
      });
    };

    // Immediate DOM ready + images
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }

    // Fallback timeout (5s max)
    timeoutId = setTimeout(() => setLoading(false), 5000);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="spinner"></div>
      <div className="spinner-text">Loading ISA ICSA...</div>
    </div>
  );
};

export default Preloader;
