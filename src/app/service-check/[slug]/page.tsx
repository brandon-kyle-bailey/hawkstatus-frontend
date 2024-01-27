import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import NavigationLeftComponent from "@/components/navigation-left.component";
import NavigationTopComponent from "@/components/navigation-top.component";

export default async function Page({ params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <main className="flex flex-row justify-evenly text-gray-900">
      <NavigationLeftComponent />
      <div className="flex-auto w-full h-max flex flex-col justify-evenly">
        <NavigationTopComponent />
        <div className="flex-auto w-full bg-gray-200 p-10 space-y-4 h-screen">
          <div>
            <h3 className="text-2xl">Service check {params.slug}</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
