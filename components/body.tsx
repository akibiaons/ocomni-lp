"use client";

import { CardB } from "@/components/ui/cardbenefit";
import { CallToAction } from "@/components/ui/CallToAction";
import Footer from "@/components/ui/footer";

export function Body() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-8 hero-section  md:grid md:grid-cols-8 md:grid-rows-1 md:pb-20  grid grid-rows-2">
        <div className="lg:col-start-1 lg:col-end-5 lg:pl-10 lg:pt-48   md:col-start-1 md:col-end-5 md:pl-10 md:pt-40 p-10 pt-20">
          <h1 className="lg:text-5xl lg:font-semibold lg:pb-8 lg:text-wrap md:text-5xl md:font-semibold md:pb-1 md:text-wrap row-start-1 row-end-3 font-bold text-4xl">
            Powering E-Commerce with
            <span className="text-[#5B45BB]"> Ocomni</span>
          </h1>
          <p className="lg:text-md lg:text-2xl lg:pb-8 lg:pt-2 md:text-md md:text-lg md:pb-2 md:pt-10 row-start-4 row-end-4 text-md pt-8">
            Streamlined, affordable, easy to use sites for ecommerce purposes
          </p>
          <div className="pt-10 lg:pt-0 md:pt-8">
            <p className="lg:mt-8">
              <span className="border-2 rounded-lg p-2 lg:p-4 md:p-4 hover:cursor-pointer hover:bg-slate-300 bg-[#5B45BB] text-white">
                Learn More
              </span>
            </p>
          </div>
        </div>
        <div className="lg:col-start-5 lg:col-end-9 lg:pt-40 md:col-start-5 md:col-end-9 md:pt-40 pt-20">
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
      <div className="bg-gradient-to-b from-white to-slate-300">
        <CardB></CardB>
      </div>
      <div className="bg-gradient-to-b from-slate-300 to-slate-200">
        <CallToAction></CallToAction>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
}
