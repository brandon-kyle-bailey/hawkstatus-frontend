import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-row h-screen w-screen justify-evenly text-white text-2xl">
      <div className="flex-1 bg-stone-900 h-screen flex justify-center items-center w-full">
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center">
            <h2 className="font-bold mb-10">Create an account!</h2>
          </div>
          <p className="text-lg mb-6">Please create your account</p>
          <form className="text-white flex flex-col space-y-8" method="POST">
            <input
              className="font-thin bg-stone-900 border border-neutral-700 h-14 rounded-md p-4"
              name="name"
              type="name"
              aria-label="name"
              placeholder="Name"
            />
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
            <input
              className="font-thin bg-stone-900 border border-neutral-700 h-14 rounded-md p-4"
              name="confirm-password"
              type="password"
              aria-label="confirm password"
              placeholder="Confirm Password"
            />
            <button
              className="bg-gradient-to-br from-sky-500 to-emerald-500 h-14 rounded-md hover:animate-pulse focus:animate-pulse"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="text-lg mt-6 w-full flex justify-between items-center">
            <a className="text-base hover:text-emerald-500" href="/signin">
              <p>Already have an account? Click here</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-sky-500 to-emerald-500 h-screen w-full flex justify-center items-center"></div>
    </main>
  );
}
