"use client";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

interface SigninCredentials {
  email: string;
  password: string;
}

export default function Signin() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials: SigninCredentials = Object.fromEntries(
      new FormData(event.currentTarget)
    ) as unknown as SigninCredentials;
    signIn("credentials", {
      ...credentials,
      callbackUrl: "/dashboard",
    });
  };
  return (
    <main className="flex flex-row h-screen w-screen justify-evenly text-white text-2xl">
      <div className="flex-1 bg-gradient-to-br from-amber-500 to-pink-500 h-screen w-full flex justify-center items-center"></div>
      <div className="flex-1 bg-stone-900 h-screen flex justify-center items-center w-full">
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center">
            <h2 className="font-bold mb-10">Welcome Back!</h2>
          </div>
          <p className="text-lg mb-6">Please login to you account</p>
          <form
            className="text-white flex flex-col space-y-8"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="font-thin bg-stone-900 border border-neutral-700 h-14 rounded-md p-4"
              name="email"
              type="email"
              aria-label="email address"
              placeholder="Email address"
            />
            <input
              className="font-thin bg-stone-900 border border-neutral-700 h-14 rounded-md p-4"
              name="password"
              type="password"
              aria-label="password"
              placeholder="Password"
            />
            <button
              className="bg-gradient-to-br from-amber-500 to-pink-500 h-14 rounded-md hover:animate-pulse focus:animate-pulse"
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className="mt-6 w-full flex justify-center items-center">
            <a
              className="text-base hover:text-pink-500"
              href="/forgot-password"
            >
              Forgot password?
            </a>
          </div>
          <div className="text-lg mt-6 w-full flex justify-between items-center">
            <a className="text-base hover:text-pink-500" href="/signup">
              <p>Dont have an account? Click here</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
