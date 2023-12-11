"use client";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import LinkComponent from "./link.component";

interface SignupCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function CredentialsSignupFormComponent(props: {
  urls: {
    callback: string;
    signin: string;
  };
  styles: {
    submit: string;
  };
}) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials: SignupCredentials = Object.fromEntries(
      new FormData(event.currentTarget)
    ) as unknown as SignupCredentials;
    signIn("credentials", {
      ...credentials,
      signup: true,
      callbackUrl: props.urls.callback,
    });
  };
  return (
    <>
      <p className="text-lg mb-6">Please create your account</p>
      <form
        className="text-white flex flex-col space-y-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="text-base text-white" htmlFor="name">
          Name
        </label>
        <input
          className="font-thin bg-stone-600 border border-neutral-700 h-14 rounded-md p-4"
          name="name"
          type="text"
          aria-label="name"
          placeholder="Name"
        />
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
        <label className="text-base text-white" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className="font-thin bg-stone-600 border border-neutral-700 h-14 rounded-md p-4"
          name="confirmPassword"
          type="confirmPassword"
          aria-label="confirmPassword"
          placeholder="Confirm Password"
        />
        <button className={props.styles.submit} type="submit">
          Sign up
        </button>
      </form>
      <div className="text-lg mt-6 w-full flex justify-between items-center">
        <LinkComponent
          url={props.urls.signin}
          text="Already have an account? Click here"
        />
      </div>
    </>
  );
}
