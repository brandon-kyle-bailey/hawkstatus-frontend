"use client";

import { heroGradient } from "@/lib/styles/gradients";
import { signOut } from "next-auth/react";

export default function Signout() {
  return (
    <main className="flex flex-row h-screen w-screen justify-evenly text-white text-2xl">
      <div
        className={
          heroGradient +
          " flex-1 h-screen w-full flex justify-center items-center"
        }
      ></div>
      <div className="flex-1 bg-stone-900 h-screen flex justify-center items-center w-full">
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center">
            <h2 className="font-bold mb-10">See you soon!</h2>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              className={
                heroGradient +
                " p-4 rounded-md hover:animate-pulse focus:animate-pulse"
              }
              type="submit"
              onClick={() => signOut()}
            >
              Sign Me Out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
