import LinkComponent from "@/components/link.component";
import NavigationLeftComponent from "@/components/navigation-left.component";
import NavigationTopComponent from "@/components/navigation-top.component";
import { authOptions } from "@/lib/config/auth";
import { heroGradient } from "@/lib/styles/gradients";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function IntegrationsDiscord() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <main className="flex flex-row justify-evenly text-gray-900">
      <NavigationLeftComponent />
      <div className="flex-auto w-full h-max flex flex-col justify-evenly">
        <NavigationTopComponent />
        <div className="flex-auto h-screen w-full bg-gray-200 p-10 space-y-4">
          <div>
            <h2 className="text-2xl">Discord</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
