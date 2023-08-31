"use client";

import React, { useState, useEffect } from "react";

export function Carousel() {
  const img = [
    "https://res.cloudinary.com/daf0osydi/image/upload/v1693514835/ocomni-lp-img_vcs14g.png",
    "https://res.cloudinary.com/daf0osydi/image/upload/v1693517363/reshoot-glasses_iueqyp.png",
    "https://res.cloudinary.com/daf0osydi/image/upload/v1693517355/reshoot-flowers_ieo6zt.png",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Timer start here:
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % img.length);
    }, 4400);

    // Gotta clear the timer below...first-letter...
    return () => clearInterval(timer);
  }, [img.length]);

  return (
    <>
      <div className="relative flex flex-col items-center pb-4">
        <div className="container text-left mb-10 mt-8 max-w-lg mx-auto px-4">
          <img src={img[activeSlide]} className="w-full h-full" />
        </div>
        <div className="flex justify-center mt-4">
          {img.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === activeSlide ? "bg-gray-300" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
