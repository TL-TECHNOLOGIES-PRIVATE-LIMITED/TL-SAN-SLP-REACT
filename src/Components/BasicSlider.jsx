import React, { useEffect, useState } from "react";
import Carousel1 from "../images/GLOBALOPORTUNITY (1).jpg";
import Carousel2 from "../images/BEYOND BOARDERS.jpg";
import Carousel3 from "../images/Choose Wisely B.jpg";
import Carousel4 from "../images/SOCIAL MEDIA.jpg";
import Carousel5 from "../images/JOURNY STARTS HERE.jpg";

const BasicSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);
  const slides = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];
  return (
    <div className="card relative">
      <div className="container2 relative sm:w-[945px] h-[340px] md:h-full lg-max:w-[1460px] md:min-h-[780px] md:w-[1625px]">
        <div className="carousel grid grid-cols-3 gap-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item col-span-1 ${index === currentSlide ? "active" : ""}`}
              style={{
                display: index === currentSlide ? "block" : "none",
                transition: "transform 0.3s ease-in-out",
                transform: isPaused && index === currentSlide ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img
                src={slide}
                className="carousel-image w-[405px] h-[340px] md:h-full md:min-h-[780px] md:w-[525px]"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicSlider;