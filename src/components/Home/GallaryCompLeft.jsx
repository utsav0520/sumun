import React, { useRef, useEffect } from "react";
import {imagesLeft} from "./homeGallary/images.js";
import "./galleryStyles.css";

function GallaryCompLeft() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollOneImage = () => {
      const imageWidth =
        scrollContainer.querySelector("img")?.clientWidth || 10;
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft + imageWidth >= maxScroll) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: imageWidth, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(scrollOneImage, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-full overflow-hidden mt-10 px-4">
      <h2 className="text-center text-3xl font-semibold mb-4">Gallery</h2>
      <p className="text-center mb-6">
        Explore our collection of images showcasing our work and events.
      </p>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth"
      >
        {imagesLeft.map((src, index) => (
          <div className="h-70 rounded-2xl bg-white w-auto m-0.5 p-2 object-cover flex-shrink-0">
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-60 rounded-xl mx-1"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallaryCompLeft;
