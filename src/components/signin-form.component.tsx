'use client';
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

interface SigninCredentials {
  email: string;
  password: string;
}

export default function SigninFormComponent()  {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials: SigninCredentials = Object.fromEntries(
      new FormData(event.currentTarget)
    ) as unknown as SigninCredentials;
    signIn("credentials", {
      ...credentials,
      callbackUrl: '/dashboard',
    });
  };

  return (      
  <form className="flex flex-col space-y-4 w-1/4" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email Address</label>
        <input className="border rounded-md p-2" type="email" name="email" aria-label="email address" placeholder="Email Address" />
        <label htmlFor="password">Password</label>
        <input className="border rounded-md p-2" type="password" name="password" aria-label="password" placeholder="Password" />
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Log In
        </button>
      </form>
      )
}