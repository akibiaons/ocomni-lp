"use client";

import React from "react";
import { useState, useEffect } from "react";

export function CallToAction() {
  const [currentPortfolio, setCurrentPortfolio] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPortfolio((prev) => (prev + 1) % 3); // cycle between 0, 1, 2
    }, 3000); // change every 3 seconds, adjust as needed

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
                className={`top-[20%] left-[10%] ${
                  currentPortfolio === 0 ? "block" : "hidden"
                }`}
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610585/reshoot-flowers_yk3tb1.png"
                alt="template site 1"
              />
              <img
                className={`top-[20%] left-[10%] ${
                  currentPortfolio === 1 ? "block" : "hidden"
                }`}
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610585/cowboy-2-template_d6b0zj.png"
                alt="template site 2"
              />
              <img
                className={`top-[20%] left-[10%] ${
                  currentPortfolio === 2 ? "block" : "hidden"
                }`}
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610585/reshoot-flowers_yk3tb1.png"
                alt="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610585/cowboy-2-template_d6b0zj.png"
              />

              <img
                className="relative top-[-50%] left-[60%] w-[20%]"
                src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693613251/mobilephone_hvb50n.png"
                alt="phone"
              />
            </div>
            <div className="col-start-4 justify-center items-center mt-40 mr-30">
              <p className="pb-8 text-xl font-normal">
                Easy to deploy, and starting as low as $5.00 a month,
              </p>
              <p className="pb-8 text-xl font-normal">
                No coding required, and free comprehensive guides given
              </p>
              <button className="border-2 rounded-lg p-4 bg-[#5B45BB] hover:bg-slate-200 hover:text-black text-white">
                Select Store Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
