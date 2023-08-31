"use client";

import React, { useState, useEffect } from "react";

export function BenefitsCarousel() {
  const quotes = [
    "Reduced startup costs",
    "Easy install & setup",
    "Code free & simple designs",
    "Affordable prices for you to grow",
  ];

  const [activeQuote, setActiveQuote] = useState(0);
  const [rotationValue, setRotationValue] = useState(0);
  const [cubeStyle, setCubeStyle] = useState({
    transform: `rotateY(0deg)`,
  });

  useEffect(() => {
    setCubeStyle({
      transform: `rotateY(${rotationValue}deg)`,
    });
  }, [rotationValue]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prevSlide) => (prevSlide + 1) % quotes.length);
    }, 4400);
    return () => clearInterval(timer);
  }, [quotes.length]);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotationValue((prevValue) => prevValue + 90); // rotates 90 degrees to show a new face
    }, 4400); // same duration as the carousel to keep them in sync

    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <>
      <div className="container text-left mb-10 mt-8 max-w-lg mx-auto px-4 lg:hidden md:hidden">
        <p className="text-xl font-normal lg:text-2xl lg:font-medium text-white">
          {quotes[activeQuote]}
        </p>
      </div>

      <div className="cube-container hidden lg:block md:block text-white text-center">
        <div className="cube" style={cubeStyle}>
          <div className="face front">{quotes[0]}</div>
          <div className="face back">{quotes[1]}</div>
          <div className="face left">{quotes[2]}</div>
          <div className="face right">{quotes[3]}</div>
          <div className="face top">Something</div>
          <div className="face bottom">Something</div>
        </div>
      </div>
    </>
  );
}
