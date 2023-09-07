"use client";

import { useState, useEffect } from "react";

const SignUpPage = () => {
  const images = [
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851038/5_evcque.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851037/3_ob6pgw.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851034/1_dnm1bk.svg",
  ];

  const [currentTemplate, setCurrentTemplate] = useState(0);

  return (
    <>
      <div className="title-container">
        <h1 className="text-center font-bold text-4xl pt-10">
          <span className="bg-gradient-to-r to-black via-[#5B45BB] from-[#5B45BB] text-transparent bg-clip-text">
            Templates
          </span>
        </h1>
      </div>
      <div className="grid grid-rows-2 border-2 border-red-500 mt-10 spacing-- lg:grid lg:grid-cols-12 lg-grid-rows-1 lg:border-2 lg:border-blue-500">
        <div className="text-center sign-up-form row-start-2 lg:row-start-1 lg:col-start-3 lg:col-end-6">
          <p>Sign Up</p>
        </div>
        <div className="text-center carousel-signup lg:col-start-7 lg:col-end-12 lg:border-2 lg:border-green-500">
          <p>Images</p>
          {/*images*/}
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
