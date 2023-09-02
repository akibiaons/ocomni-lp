"use client";

import { CardB } from "@/components/ui/cardbenefit";
import { CallToAction } from "@/components/ui/CallToAction";

export function Body() {
  return (
    <>
      <div className="grid grid-cols-8 hero-section">
        <div className="col-start-1 col-end-5 pl-10 pt-48">
          <h1 className="text-lg lg:text-5xl font-semibold pb-8 text-wrap">
            Powering E-Commerce with
            <span className="text-[#5B45BB]"> Ocomni</span>
          </h1>
          <p className="text-md lg:text-2xl pb-8 pt-10">
            Streamlined, affordable, easy to use sites for ecommerce purposes
          </p>
          <div className="">
            <p className="mt-8">
              <span className="border-2 rounded-lg p-4 hover:cursor-pointer hover:bg-slate-300 bg-[#5B45BB] text-white">
                Learn More
              </span>
            </p>
          </div>
        </div>
        <div className="col-start-5 col-end-9 pt-40">
          <div className="img-container">
            <img
              className="img-behind"
              src="https://res.cloudinary.com/daf0osydi/image/upload/v1693517355/reshoot-flowers_ieo6zt.png"
              alt="ocomni project storefront"
            />
            <img
              className="img-front"
              src="https://res.cloudinary.com/daf0osydi/image/upload/v1693514835/ocomni-lp-img_vcs14g.png"
              alt="ocomni dashboard for ecommerce clients"
            />
          </div>
        </div>
      </div>
      <div className="pt-20 bg-gradient-to-b from-white to-slate-300">
        <CardB></CardB>
      </div>
      <div className="bg-gradient-to-b from-slate-300 to-slate-200">
        <CallToAction></CallToAction>
      </div>
    </>
  );
}
