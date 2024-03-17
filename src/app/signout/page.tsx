"use client";
import Footer from "@/components/footer.component";
import GenericNavigationBar from "@/components/generic-navigation-bar.component";
import { signOut } from "next-auth/react";


export default function Signout() {
  return (
    <>
    <GenericNavigationBar />
    <main className="flex flex-col align-middle justify-center items-center">
      <p className="text-lg">See you soon!</p>
      <button className="p-2 bg-blue-500 text-white rounded-md" type="submit" onClick={() => signOut()}>Sign out</button>
    </main>
    <Footer />
    </>
  );
}

