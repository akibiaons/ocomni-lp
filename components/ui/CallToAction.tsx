"use client";

import React from "react";
import { useState, useEffect } from "react";

export function CallToAction() {
  const [currentPortfolio, setCurrentPortfolio] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPortfolio((prev) => (prev + 1) % 3); // cycle between 0, 1, 2
    }, 5000); // change every 5 seconds, adjust as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-center max-w-[70%] container mx-auto">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-background text-black leading-[150%]">
            We created an economical way to test, and deploy e-commerce sites.
            No more time and money wasted on site builders, sell securly with
            <span className="text-[#5B45BB]"> Ocomni</span>
          </h2>
        </div>
        {/* Above is the CTA Text and below is the CTA Animation screen */}
        <div className="flex space x-4">
          <div className="laptop">
            <img
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693613251/macbookmockup_hh9dhw.png"
              alt="Laptop Device"
            />
            <div className="screen-content">
              <div
                className={`screen-content ${
                  currentPortfolio === 0 ? "fadeIn" : "fadeOut"
                }`}
              ></div>
            </div>
            <div
              className={`screen-content ${
                currentPortfolio === 1 ? "fadeIn" : "fadeOut"
              }`}
            >
              {/* Portfolio 2 content */}
            </div>

            <div
              className={`screen-content ${
                currentPortfolio === 3 ? "fadeIn" : "fadeOut"
              }`}
            >
              {/* Portfolio 3 content */}
            </div>
          </div>
          <div className="phone">
            <img
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693613251/mobilephone_hvb50n.png"
              alt="mobile device"
            />
            <div className="screen-content">
              {/* Portfolio two items will go here... */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
