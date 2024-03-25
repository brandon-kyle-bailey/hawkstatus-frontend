import Footer from "@/components/footer.component";
import NavLeftComponent from "@/components/new/nav-left.component";
import React from "react";
import NavTopComponent from "./nav-top.component";

export default async function PageContextProviderComponent(props: {
  breadcrumb: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="relative flex">
      <NavLeftComponent />
      <section className="h-fill w-full flex flex-col bg-gray-200 space-y-4 p-10">
        <NavTopComponent breadcrumb={props.breadcrumb} />
        {props.children}
        <Footer />
      </section>
    </main>
  );
}
