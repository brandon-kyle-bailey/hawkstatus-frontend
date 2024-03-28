"use client";
import { signOut } from "next-auth/react";

export default function SignoutButtonComponent(props: { style: string }) {
  return (
    <button
      className={props.style ?? "p-2 bg-blue-500 text-white rounded-md"}
      type="submit"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
