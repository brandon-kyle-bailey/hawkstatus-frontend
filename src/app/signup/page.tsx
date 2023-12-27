import CredentialsSignupFormComponent from "@/components/signup-form.component";
import { authOptions } from "@/lib/config/auth";
import { heroGradient } from "@/lib/styles/gradients";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

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
            <h2 className="font-bold mb-10">Create an account!</h2>
          </div>
          <CredentialsSignupFormComponent
            urls={{ callback: "/signin", signin: "/signin" }}
            styles={{
              submit: `${heroGradient} h-14 rounded-md hover:animate-pulse focus:animate-pulse`,
            }}
          />
        </div>
      </div>
    </main>
  );
}
