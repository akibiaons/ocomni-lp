"use client";

import React from "react";
import { useState, useEffect } from "react";

export function CallToAction() {
  const animation = [
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851038/5_evcque.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851035/6_xrpcua.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851037/3_ob6pgw.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851034/4_tdzirp.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851034/1_dnm1bk.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851027/2_naqtte.svg",
  ];

  const [currentPortfolio, setCurrentPortfolio] = useState(0);

  useEffect(() => {
    const updatePortfolio = () => {
      setCurrentPortfolio((prev) => (prev + 1) % animation.length);
    };

    const isLongDurationSlide = [0, 2, 4].includes(currentPortfolio);
    const intervalDuration = isLongDurationSlide ? 3000 : 500;

    const interval = setInterval(updatePortfolio, intervalDuration);

    return () => clearInterval(interval);
  }, [currentPortfolio, animation.length]);

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
              <img src={animation[currentPortfolio]} />
            </div>
            <div className="col-start-4 justify-center items-center mt-40 mr-30">
              <p className="pb-8 text-xl font-normal">
                Easy to deploy, and starting as low as $5.00 a month,
              </p>
              <p className="pb-8 text-xl font-normal">
                No coding required, and free comprehensive guides given
              </p>
              <button className="border-2 rounded-lg p-4 bg-[#5B45BB] hover:bg-slate-300 hover:text-black text-white">
                Select Store Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
