import React from "react";
import { Carousel } from "./carousel";

export function Body() {
  return (
    <div className="pt-20">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold pt-8">Powering E-Commerce</h1>
        <div>
          <p>
            Build a simple shop, no coing or design needed, and start growing
            today.
          </p>
        </div>
      </div>
      <div className="pt-20 grid grid-cols-8 pl-8">
        <div className="col-start-1 col-end-5 border-2 border-blue-600">
          <div>
            <img src="https://res.cloudinary.com/daf0osydi/image/upload/v1693514835/ocomni-lp-img_vcs14g.png" />
          </div>
        </div>
        {/* Below will be the benefit driven content peices that pop up at the speed of the carousel cuts */}
        <div className="col-start-5 col-end-9">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
