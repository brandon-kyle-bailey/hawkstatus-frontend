"use client";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import LinkComponent from "./link.component";

interface SigninCredentials {
  email: string;
  password: string;
}

export default function CredentialsSigninFormComponent(props: {
  urls: {
    callback: string;
    forgot_password: string;
    signup: string;
  };
  styles: {
    submit: string;
  };
}) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials: SigninCredentials = Object.fromEntries(
      new FormData(event.currentTarget)
    ) as unknown as SigninCredentials;
    signIn("credentials", {
      ...credentials,
      callbackUrl: props.urls.callback,
    });
  };
  return (
    <>
      <p className="text-lg mb-6">Please login to you account</p>
      <form
        className="text-white flex flex-col space-y-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="text-base text-white" htmlFor="email">
          Email Address
        </label>
        <input
          className="font-thin bg-stone-600 border border-neutral-700 h-14 rounded-md p-4"
          name="email"
          type="email"
          aria-label="email address"
          placeholder="Email address"
        />
        <label className="text-base text-white" htmlFor="password">
          Password
        </label>
        <input
          className="font-thin bg-stone-600 border border-neutral-700 h-14 rounded-md p-4"
          name="password"
          type="password"
          aria-label="password"
          placeholder="Password"
        />
        <button className={props.styles.submit} type="submit">
          Log In
        </button>
      </form>
      <div className="mt-6 w-full flex justify-center items-center">
        <LinkComponent
          url={props.urls.forgot_password}
          text="Forgot password?"
        />
      </div>
      <div className="text-lg mt-6 w-full flex justify-between items-center">
        <LinkComponent
          url={props.urls.signup}
          text="Don't have an account? Click here"
        />
      </div>
    </>
  );
}
