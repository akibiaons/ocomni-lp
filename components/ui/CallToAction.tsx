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
      <div className="text-center container mx-auto pt-40">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-background text-black leading-[150%]">
            We created an economical way to test, and deploy e-commerce sites.
            No more time and money wasted on site builders, sell securly with
            <span className="text-[#5B45BB]"> Ocomni</span>
          </h2>
        </div>
        {/* Below is new CTA Portfolio Animation w/tailwindcss, I am using grid to stack the elements on top of each other, and z-indexes */}
        <div className="cta-section pt-40">
          <div className="grid grid-cols-3 relative">
            <div className="col-start-1 col-end-4 z-0 justify-center items-center">
              <img
                className="relative "
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693613251/macbookmockup_hh9dhw.png"
                alt="computer"
              />
              <img
                className="relative top-[-50%] left-[55%] w-[20%]"
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693613251/mobilephone_hvb50n.png"
                alt="phone"
              />
            </div>
          </div>
        </div>
        {/*
         Above is the CTA Text and below is the CTA Animation screen 
        <div className="container flex space-x-4">
          <div className="laptop flex-1">
            <img
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693613251/macbookmockup_hh9dhw.png"
              alt="Laptop Device"
            />
            <div className="portfolio-img">
              <img
                className={`screen-content ${
                  currentPortfolio === 0 ? "fadeIn" : "fadeOut"
                }`}
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610586/reshoot-glasses_mhtbxx.png"
                alt="template one example"
              />
              <img
                className={`screen-content ${
                  currentPortfolio === 1 ? "fadeIn" : "fadeOut"
                }`}
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610585/cowboy-2-template_d6b0zj.png"
                alt="template two example"
              />
              <img
                className={`screen-content ${
                  currentPortfolio === 2 ? "fadeIn" : "fadeOut"
                }`}
                alt="template 3 example"
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610585/reshoot-flowers_yk3tb1.png"
              />
            </div>
          </div>
          <div className="phone">
            <img
              src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693613251/mobilephone_hvb50n.png"
              alt="mobile device"
            />
            <div className="screen-content">
              {/* In this div goes the images, just like the computer version
            </div>
          </div>
        </div>
        */}
      </div>
    </>
  );
}
