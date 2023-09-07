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
      <div className="lg:text-center lg:container lg:mx-auto lg:pt-40   text-center">
        <div className="lg:flex lg:flex-col">
          <h2 className="lg:text-4xl lg:font-bold lg:text-background lg:text-black lg:leading-[150%] font-bold text-xl pt-12 pb-12">
            We created an economical way to test, and deploy e-commerce sites.
            No more time and money wasted on site builders, sell securly with
            <span className="text-[#5B45BB]"> Ocomni</span>
          </h2>
        </div>
        {/* Below is new CTA Portfolio Animation w/tailwindcss, I am using grid to stack the elements on top of each other, and z-indexes */}
        <div className="cta-section lg:pt-40">
          <div className="lg:grid lg:grid-cols-3 lg:relative ">
            <div className="lg:col-start-1 lg:col-end-4 lg:z-0 lg:justify-center lg:items-center">
              <img src={animation[currentPortfolio]} />
            </div>
            <div className="lg:col-start-4 lg:justify-center lg:items-center lg:mt-40 lg:mr-30 pl-4">
              <p className="lg:pb-8 lg:text-xl lg:font-normal pb-4 font-light text-left">
                - Easy to deploy, and starting as low as $5.00 a month,
              </p>
              <p className="lg:text-xl lg:font-normal pb-12 font-light text-left">
                - No coding required, and free comprehensive guides given
              </p>
              <button className="border-2 rounded-lg p-4 bg-[#5B45BB] hover:bg-slate-300 hover:text-black text-white mb-12">
                Select Store Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
