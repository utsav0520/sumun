import React, { useRef, useEffect, useState } from 'react';
import images from './homeGallary/images.js';
import './galleryStyles.css';

function GallaryComp() {
  const scrollRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleUserScroll = () => {
      setIsUserScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsUserScrolling(false);
      }, 5000); // resume autoscroll after 5 seconds
    };

    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleUserScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleUserScroll);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="max-w-full overflow-hidden mt-10">
      <h2 className="text-center text-3xl font-semibold mb-4">Gallery</h2>
      <p className="text-center mb-6">
        Explore our collection of images showcasing our work and events.
      </p>

      <div
        ref={scrollRef}
        className={`gallery-scroll flex overflow-x-auto whitespace-nowrap no-scrollbar transition-all duration-500 ${
          isUserScrolling ? '' : 'animate-autoScroll'
        }`}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="h-60 w-auto object-cover flex-shrink-0 animate-slideIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default GallaryComp;
