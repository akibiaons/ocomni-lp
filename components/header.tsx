import React from "react";

export function Header() {
  return (
    <div>
      <div className="lg:flex lg:justify-around lg:uppercase lg:text-left lg:text-2xl lg:mr-6 lg:p-8  md:flex md:justify-around md:uppercase md:text-left md:text-xl md:mr-6 md:p-8 text-center grid grid-cols-2 p-4">
        <div className="text-[#5B45BB] lg:font-extrabold md:font-extrabold font-extrabold">
          <p>
            <span className="lg:cursor-pointer lg:pr-12 md:pr-12 pr-8 text-2xl mt-12 uppercase">
              Ocomni
            </span>
          </p>
        </div>
        <div className="border py-2 lg:p-2 md:p-2 text-sm rounded-md hover:cursor-pointer hover:bg-slate-300 bg-[#5B45BB] text-white">
          <p>
            <span>
              <a href="https://www.ocomni.com/">Custom Sites Here 👋</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
