"use client";

import { useState, useEffect } from "react";

const SignUpPage = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <div className="title-container">
          <h1 className="text-center font-bold text-4xl pt-10">
            <span className="bg-gradient-to-r to-black via-[#5B45BB] from-[#5B45BB] text-transparent bg-clip-text">
              Templates
            </span>
          </h1>
        </div>
        <div className="grid grid-rows-2 border-2 border-red-500 mt-10">
          <div className="carousel-signup">
            <img className="template-1" src="" alt="template 1"></img>
            <img className="template-2" src="" alt="template 2"></img>
            <img className="template-3" src="" alt="template 3"></img>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
