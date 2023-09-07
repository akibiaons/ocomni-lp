"use client";

export default function Footer() {
  return (
    <div className="pt-8">
      <div className="py-1 p-8 lg:py-[2rem] md:py-[15rem]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://ocomni.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Ocomni Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap  uppercase font-title">
              Ocomni
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 hover:cursor-pointer">
            <li className="mr-4 hover:underline md:mr-6 ">
              <a href="https://www.ocomni.com/privacy-policy">TOS</a>
            </li>

            <li className="mr-4 hover:underline hover:cursor-pointer md:mr-6">
              <a href="https://www.ocomni.com/privacy-policy">Privacy Policy</a>
            </li>
            <li className="hover:underline hover:cursor-pointer">
              <a href="https://www.ocomni.com/contact">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[gray] sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="https://ocomni.com/" className="hover:underline">
            Ocomni™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
