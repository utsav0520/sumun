import React, { useRef, useEffect } from "react";
import {imagesRight} from "./homeGallary/images.js";
import "./galleryStyles.css";

function GallaryCompRight() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollOneImage = () => {
      const imageWidth =
        scrollContainer.querySelector("img")?.clientWidth || 10;

      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollTo({ left: scrollContainer.scrollWidth, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: -imageWidth, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(scrollOneImage, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-full overflow-hidden mt-10 px-4">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth"
      >
        {imagesRight.map((src, index) => (
          <div
            key={index}
            className="h-70 rounded-2xl bg-white w-auto m-0.5 p-2 object-cover flex-shrink-0"
          >
            <img
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

export default GallaryCompRight;