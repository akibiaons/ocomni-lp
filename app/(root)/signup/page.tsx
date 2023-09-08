"use client";

import { useState, useEffect } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { SignUp } from "@/components/ui/sign-up";

const SignUpPage = () => {
  const images = [
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851038/5_evcque.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851037/3_ob6pgw.svg",
    "https://res.cloudinary.com/dv5fxnfot/image/upload/v1693851034/1_dnm1bk.svg",
  ];

  const titles = ["Western Template", "New York", "Efficiency"];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextTitle = () => {
    setCurrentTitle((prevIndex) => (prevIndex + 1) % titles.length);
  };

  const previousTitle = () => {
    setCurrentTitle(
      (prevIndex) => (prevIndex - 1 + titles.length) % titles.length
    );
  };

  return (
    <>
      {/* Main Heading */}
      <div>
        <h1 className="text-center font-bold text-4xl pt-10">
          {/* Styling for the text gradient effect */}
          <span className="bg-gradient-to-r to-black via-[#5B45BB] from-[#5B45BB] text-transparent bg-clip-text">
            Templates
          </span>
        </h1>
      </div>

      {/* Main Grid Container */}
      <div className="mx-auto grid grid-rows-1 mt-10 lg:grid lg:grid-cols-12 lg-grid-rows-2">
        {/* Grid cell for signup form. Starts at col 1 and ends ar col 5 on large screens, appears underneath on small screens */}
        <div className="text-center lg:col-start-1 lg:col-end-5 ">
          <SignUp />
        </div>
        {/* Grid cell for Image & Title. Starts at 7th column and ends at 12th on large screens. */}
        <div
          className="text-center bg-cover lg:bg-contain 2xl:bg-cover bg-center h-96 lg:col-start-7 lg:col-end-12 lg:row-start-1 lg:h-[40rem] lg:w-full flex flex-col "
          style={{
            backgroundImage: `url(${images[currentImage]})`, // Set the current image as a background
          }}
        >
          {/* Title for the image. It's centered vertically and horizontally. */}
          <div className="text-center font-semibold text-2xl my-4 pt-[20rem] lg:pt-[34rem] p-5">
            {titles[currentTitle]}
          </div>
          <div className="flex justify-center">
            <div className="mr-4">
              <BsFillArrowLeftSquareFill
                className="hover:cursor-pointer hover:bg-slate-400"
                size="2rem"
                onClick={() => {
                  previousImage();
                  previousTitle();
                }}
              />
            </div>
            <div className="ml-40 lg:ml-80">
              <BsFillArrowLeftSquareFill
                className="hover:cursor-pointer hover:bg-slate-400"
                onClick={() => {
                  nextImage();
                  nextTitle();
                }}
                size="2rem"
                style={{ transform: "rotate(180deg)" }}
              />
            </div>
          </div>
          <div className="font-extralight text-sm text-clip pt-4">
            <p>Click arrows until you reach desired template</p>
          </div>
        </div>
      </div>

      {/* Arrow icons container */}
    </>
  );
};

export default SignUpPage;
