"use client";

import { CardB } from "@/components/ui/cardbenefit";

export function Body() {
  return (
    <>
      <div className="grid grid-cols-8 hero-section">
        <div className="col-start-2 col-end-5 pt-20 pr-2">
          <h1 className="text-lg lg:text-5xl font-semibold pb-8 text-wrap">
            Powering E-Commerce with
            <span className="text-[#5B45BB]"> Ocomni</span>
          </h1>
          <p className="text-md lg:text-xl pb-8">
            Streamlined, affordable, easy to use sites for ecommerce purposes
          </p>
          <div className="">
            <p className="mt-8">
              <span className="border-2 rounded-md p-2 hover:cursor-pointer bg-slate-100 hover:bg-slate-300">
                Learn More & Turn BTN Purple
              </span>
            </p>
          </div>
        </div>
        <div className="col-start-5 col-end-8 pt-8">
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
      <div className="mt-20">
        <CardB></CardB>
      </div>
    </>
  );
}
