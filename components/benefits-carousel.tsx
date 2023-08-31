"use client";

import React, { useState, useEffect } from "react";

export function BenefitsCarousel() {
  const quotes = [
    "Reduced startup costs",
    "Easy install & setup",
    "Code free & simple designs",
  ];

  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prevSlide) => (prevSlide + 1) % quotes.length);
    }, 4400);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="relative flex flex-col items-center pb-4">
      <div className="container text-left mb-10 mt-8 max-w-lg mx-auto px-4">
        <p className="text-xl font-normal lg:text-2xl">{quotes[activeQuote]}</p>
      </div>
    </div>
  );
}
