"use client";

import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
//import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../lib/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export function Register() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = formData;
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
        password
      );

      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up was successful");
      router.push("/success");
    } catch (error) {
      console.log(error);
      toast.error("There was an error during registration");
    }
  }

  return (
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
            <div className="flex flex-col gap-3 py-6">{/* <OAuth /> */}</div>
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
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-3 text-2xl text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
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
  );
}
