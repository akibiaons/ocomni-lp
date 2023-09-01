import React from "react";

export function Header() {
  return (
    <div>
      <div className="flex justify-around uppercase text-center lg:text-left md:text-left text-2xl sm:mt-1 lg:mr-6 p-8">
        <div className="text-[#5B45BB] font-extrabold">
          <p>
            <span className="cursor-pointer">Ocomni</span>
          </p>
        </div>
        <div className="border p-2 text-sm rounded-md bg-slate-100 hover:bg-slate-300 hover:cursor-pointer">
          <p className="">
            <span>Get Custom Sites Built Here 👋 </span>
          </p>
        </div>
      </div>
    </div>
  );
}
