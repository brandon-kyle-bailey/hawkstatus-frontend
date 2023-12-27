import CredentialsSigninFormComponent from "@/components/signin-form.component";
import { heroGradient } from "@/lib/styles/gradients";

export default function Signin() {
  return (
    <main className="flex flex-row h-screen w-screen justify-evenly text-white text-2xl">
      <div
        className={
          heroGradient +
          " bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex-1 h-screen w-full flex justify-center items-center"
        }
      ></div>
      <div className="flex-1 bg-stone-900 h-screen flex justify-center items-center w-full">
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center">
            <h2 className="font-bold mb-10">Welcome Back!</h2>
          </div>
          <CredentialsSigninFormComponent
            urls={{
              callback: "/dashboard",
              forgot_password: "/forgot-password",
              signup: "/signup",
            }}
            styles={{
              submit: `${heroGradient} bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-14 rounded-md hover:animate-pulse focus:animate-pulse`,
            }}
          />
        </div>
      </div>
    </main>
  );
}
