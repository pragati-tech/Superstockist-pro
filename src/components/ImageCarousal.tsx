import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slides = [...images, images[0]]; // clone first at end

  // Auto-slide forward
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  // Loop reset
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      // After slide finishes
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // turn off animation
        setCurrentIndex(0); // jump to real first slide

        // Re-enable transition AFTER DOM updates
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 700); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, slides.length]);

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-[400px] h-[350px] overflow-hidden">
      {/* Images */}
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((img, idx) => (
          <div
            key={idx}
            className="w-[400px] h-[350px] flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex % images.length ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
    