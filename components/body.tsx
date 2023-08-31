"use client";

import React, { useState } from "react";
import { Carousel } from "@/components/carousel";
import { BenefitsCarousel } from "@/components/benefits-carousel";

export function Body() {
  return (
    <div className="pt-8">
      <div className="container mx-auto text-center lg:pt-10 lg:pb-[20rem]">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          Powering E-Commerce Growth
        </h1>
        <div>
          <p className="mt-4 text-md font-extralight md:font-normal lg:font-normal">
            Build a simple shop, no coding or design needed, and start growing
            today.
          </p>
        </div>
      </div>
      <div className="lg:pt-20 lg:grid lg:grid-cols-8 lg:pl-8 p-8 pt-20">
        <div className="col-start-1 col-end-5 lg:col-start-2 lg:col-end-4 border-2 border-blue-600">
          <div>
            <Carousel />
          </div>
        </div>
        {/* Below will be the benefit driven content peices that pop up at the speed of the carousel cuts 
        this div will show on large screens*/}
        <div className="col-start-6 col-end-9 hidden lg:block md:block">
          <div className="pr-8">
            <BenefitsCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
