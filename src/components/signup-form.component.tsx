'use client';
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

interface SignupCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function SignupFormComponent()  {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials: SignupCredentials = Object.fromEntries(
      new FormData(event.currentTarget)
    ) as unknown as SignupCredentials;
    signIn("credentials", {
      ...credentials,
      callbackUrl: '/signin',
    });
  };

  return (      
  <form className="flex flex-col space-y-4 w-1/4" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input className="border rounded-md p-2" type="text" name="name" aria-label="your name" placeholder="John Smith" />
        <label htmlFor="email">Email Address</label>
        <input className="border rounded-md p-2" type="email" name="email" aria-label="email address" placeholder="Email Address" />
        <label htmlFor="password">Password</label>
        <input className="border rounded-md p-2" type="password" name="password" aria-label="password" placeholder="Password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input className="border rounded-md p-2" type="password" name="confirmPassword" aria-label="confirm password" placeholder="Password" />
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Register
        </button>
      </form>
      )
}
