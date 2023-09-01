"use client";

import React from "react";

export function CallToAction() {
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
        <div className="image-container">
          <img
            className="portfolio-one"
            src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610586/reshoot-glasses_mhtbxx.png"
            alt=""
          />
          <img
            className="portfolio-two"
            src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610585/cowboy-2-template_d6b0zj.png"
            alt=""
          />
          <img
            className="portfolio-three"
            src="https://res.cloudinary.com/dv5fxnfot/image/upload/v1693610585/reshoot-flowers_yk3tb1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
