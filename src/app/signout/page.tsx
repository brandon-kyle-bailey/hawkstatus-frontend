"use client";

import { signOut } from "next-auth/react";

export default function Signout() {
  return (
    <main className="flex flex-row h-screen w-screen justify-evenly text-white text-2xl">
      <div className="flex-1 bg-gradient-to-br from-sky-500 to-emerald-500 h-screen w-full flex justify-center items-center"></div>
      <div className="flex-1 bg-stone-900 h-screen flex justify-center items-center w-full">
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center">
            <h2 className="font-bold mb-10">Hope to see you soon!</h2>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-lg mb-6">Are you sure?</p>
          </div>
          <div className="text-white flex flex-col space-y-8">
            <button
              className="bg-gradient-to-br from-sky-500 to-emerald-500 h-14 rounded-md hover:animate-pulse focus:animate-pulse"
              type="submit"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
