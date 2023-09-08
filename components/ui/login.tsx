"use client";

import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
//import OAuth from "../components/OAuth";
import { useRouter } from "next/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link"; // Import the Link component

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [pageState, setPageState] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
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
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials.user) {
        <Link href="/account"></Link>;
      }
      toast.success("Sign In Successful.");
    } catch (error) {
      toast.error("Sign In Credentials Invalid");
    }
  }

  useEffect(() => {
    document.body.classList.add("page-animation");

    return () => {
      document.body.classList.remove("page-animation");
    };
  }, []);
  return (
    <section className="mx-auto my-14 max-w-6xl px-8 h-vh">
      <div className="my-8 max-w-[300px]  mx-auto">
        <div className="flex flex-row items-center ">
          <div className="cursor-pointer border-b-2 border-purple-600 w-full">
            <h3 className="uppercase font-bold text-xs text-center mb-3 tracking-wider">
              <Link href="/account">login</Link>
            </h3>
          </div>
          <div className="cursor-pointer border-b border-gray-400 w-full">
            <h3 className="uppercase font-medium text-xs text-center mb-3 tracking-wider">
              <Link href="/register">register</Link>
            </h3>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3 py-6">
              {/* <OAuth /> */}
              {/* github auth  */}
              {/* facebook auth */}
            </div>
            <div className="flex before:border-t before:flex-1 items-center before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
              <p className="text-center text-xs font-medium px-3">OR</p>
            </div>
            <div className="flex flex-col gap-3 my-6">
              <input
                id="email"
                type="email"
                value={email}
                onChange={onChange}
                className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                placeholder="Email"
              />
              <div className="bg-inherit relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={onChange}
                  className="pr-4 pl- py-3 w-full border-slate-400 border-[1px]  transition duration-150 rounded-sm text-sm bg-inherit focus:ring-purple-600 hover:border-purple-600 active:border-purple-900"
                  placeholder="Your password"
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="absolute right-3 top-3  text-2xl text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-3 text-2xl text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
              <p>
                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold hover:text-purple-600 transition duration-200 ease-in-out "
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full  text px-7 py-3 font-medium text-sm  rounded-sm   bg-[#6366F1] text-white hover:text-white overflow-hidden transition ease-in-out duration-150  hover:bg-[#5F56D6] active:bg-[#5B45BB] "
            >
              Continue {" >"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
