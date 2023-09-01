"use client";

import React, { useState } from "react";
import { Carousel } from "@/components/carousel";
import { BenefitsCarousel } from "@/components/benefits-carousel";

export function Body() {
  return (
    <div className="pt-8">
      <div className="container mx-auto text-center lg:pt-10 lg:pb-[12rem]">
        <h1 className="text-2xl lg:text-6xl font-semibold">
          Powering E-Commerce Growth
        </h1>
        <div>
          <p className="mt-4 text-md font-extralight lg:text-2xl md:font-normal lg:font-normal">
            Build a simple shop, no coding or design needed, and start growing
            today.
          </p>
        </div>
      </div>
      <div className="lg:pt-10 lg:grid lg:grid-cols-8 lg:pl-8 p-8 pt-20">
        <div className="lg:col-start-1 lg:col-end-5 border-2">
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
