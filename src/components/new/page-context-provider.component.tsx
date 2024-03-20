import Footer from "@/components/footer.component";
import NavLeftComponent from "@/components/new/nav-left.component";
import React from "react";

export default async function PageContextProviderComponent(props: {
  breadcrumb: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="h-full flex flex-row">
      <NavLeftComponent />
      <section className="flex flex-col w-full bg-gray-200 space-y-4">
        <div className="flex flex-col p-10 w-full">
          <h1 className="text-2xl pb-10">{props.breadcrumb}</h1>
          {props.children}
        </div>
        <Footer />
      </section>
    </main>
  );
}
