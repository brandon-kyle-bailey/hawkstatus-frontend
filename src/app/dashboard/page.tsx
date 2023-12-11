import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import NavigationLeftComponent from "@/components/navigation-left.component";
import NavigationTopComponent from "@/components/navigation-top.component";
import LatencyChartComponent from "@/components/latency-chart.component";
import UptimeChartComponent from "@/components/uptime-chart.component copy";
import { mockApiData } from "@/lib/mock/api";
import { ApiChecksTableComponent } from "@/components/api-checks-table.component";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <main className="flex flex-row justify-evenly text-gray-900">
      <NavigationLeftComponent />
      <div className="flex-auto w-full h-max flex flex-col justify-evenly">
        <NavigationTopComponent />
        <div className="flex-auto h-max w-full bg-gray-200 p-10 space-y-4">
          <div>
            <h3 className="text-2xl">My Dashboard</h3>
          </div>
          <ApiChecksTableComponent />
          <div className="flex flex-row justify-stretch">
            <div className="flex-auto bg-white rounded-lg mr-2 p-2 w-80 h-26 flex flex-row justify-center align-middle text-center">
              <LatencyChartComponent data={mockApiData} />
            </div>
            <div className="flex-auto bg-white rounded-lg ml-2 p-2 w-20 h-26 flex flex-row justify-center align-middle text-center">
              <UptimeChartComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
