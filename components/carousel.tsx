"use client";

import React, { useState, useEffect } from "react";
import { BenefitsCarousel } from "./benefits-carousel";

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
      <div className="relative flex flex-col items-center pb-4 bg-slate-50 hover:bg-slate-100 hover:cursor-pointer">
        <div className="container text-left mb-10 mt-8 max-w-xl lg:max-w-2xl mx-auto px-4">
          <img className="w-full object-cover" src={img[activeSlide]} />
        </div>
        <div className="lg:hidden block">
          <BenefitsCarousel />
        </div>
      </div>
    </>
  );
}
