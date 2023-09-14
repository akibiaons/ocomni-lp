"use client";

import { useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "@/lib/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

type FormData = {
  email: string;
  password?: string;
  name: string;
  timestamp?: any;
};

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = formData;

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

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password!
      );

      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up was successful");
      router.push("https://www.ocomni.com/account");
    } catch (error) {
      console.log(error);
      toast.error("There was an error during registration");
    }
  }

  return (
    <>
      {/* Main Heading */}
      <div>
        <h1 className="text-center font-bold text-4xl pt-10">
          {/* Styling for the text gradient effect */}
          <span className="bg-gradient-to-r  text-[#5B45BB]">Templates</span>
        </h1>
      </div>

      {/* Main Grid Container */}
      <div className="mx-auto grid grid-rows-1 mt-10 lg:grid lg:grid-cols-12 lg-grid-rows-2">
        {/* Grid cell for signup form. Starts at col 1 and ends ar col 5 on large screens, appears underneath on small screens */}
        <div className="text-center lg:col-start-1 lg:col-end-5 ">
          <section className="mx-auto my-14 max-w-6xl px-8 h-vh">
            <div className="my-8 max-w-[300px]  mx-auto">
              <div className="flex flex-row items-center ">
                <div className="cursor-pointer border-b-2 border-purple-600 w-full">
                  <h3
                    //onClick={() => router.push("/success")}
                    className="uppercase font-bold text-xs text-center mb-3 tracking-wider"
                  >
                    register
                  </h3>
                </div>
              </div>
              <div>
                <form onSubmit={onSubmit}>
                  <div className="flex flex-col gap-3 py-6">
                    {/* <OAuth /> */}
                  </div>
                  <div className="flex before:border-t before:flex-1 items-center after:border-t after:flex-1"></div>
                  <div className="flex flex-col gap-3 my-6">
                    <input
                      type="email"
                      id="email"
                      onChange={onChange}
                      value={email}
                      className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                      placeholder=" Email"
                    />
                    <div className="bg-inherit relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={onChange}
                        className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                        placeholder=" Your password"
                      />
                      {showPassword ? (
                        <AiFillEyeInvisible
                          className="absolute right-3 top-3  text-2xl text-gray-700 cursor-pointer"
                          onClick={() =>
                            setShowPassword((prevState) => !prevState)
                          }
                        />
                      ) : (
                        <AiFillEye
                          className="absolute right-3 top-3 text-2xl text-gray-700 cursor-pointer"
                          onClick={() =>
                            setShowPassword((prevState) => !prevState)
                          }
                        />
                      )}
                    </div>
                    <input
                      type="text"
                      id="name"
                      onChange={onChange}
                      value={name}
                      className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                      placeholder=" Full Name"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full  text px-7 py-3 font-medium text-sm  rounded-sm   bg-[#6366F1] text-white hover:text-white overflow-hidden transition ease-in-out duration-150  hover:bg-[#5F56D6] active:bg-[#5B45BB] "
                  >
                    Register {" >"}
                  </button>
                </form>
              </div>
            </div>
          </section>
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

export default RegisterPage;
