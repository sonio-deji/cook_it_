import React from "react";
import { useState } from "react";

function Login() {
  const [passwordType, setpasswordType] = useState("password");
  const pass = () => {
    passwordType === "password"
      ? setpasswordType("text")
      : setpasswordType("password");
  };
  return (
    <div>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <form
          action=""
          className="mt-6 w-1/2 bg-white p-10 shadow-slate-500/50 rounded-lg"
        >
          <label htmlFor="" className="mt-4">
            <p className="font-bold">Your Name</p>
            <input
              type="text"
              placeholder="John Doe"
              className="border w-full mt-4 p-4 border-gray-200 outline-none"
            />
          </label>
          <label htmlFor="" className="mt-4">
            <p className="font-bold mt-4">E-mail</p>
            <input
              type="email"
              placeholder="john@example.com"
              className="border w-full mt-4 p-4 border-gray-200 outline-none bg-transparent"
            />
          </label>
          <label>
            <p className="font-bold mt-4">Password</p>
            <div className="relative">
              <input
                type={passwordType}
                placeholder="At least 8 characters"
                className="border w-full mt-4 p-4 border-gray-200 outline-none"
              />
              <svg
                width="24"
                height="24"
                className="absolute top-8 right-2 cursor-pointer"
                onClick={pass}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12ZM24 11.551C24 11.551 19.748 20 12.015 20C4.835 20 0 11.551 0 11.551C0 11.551 4.446 4 12.015 4C19.709 4 24 11.551 24 11.551ZM17 12C17 9.243 14.757 7 12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12Z"
                  fill="#A9A9A9"
                />
              </svg>
            </div>
          </label>
          <label
            htmlFor=""
            className="flex items-baseline space-x-3 pt-4"
          ></label>
          <button
            type="submit"
            className="mt-7 w-full p-4 bg-[#D30C12] rounded-lg text-white font-bold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
