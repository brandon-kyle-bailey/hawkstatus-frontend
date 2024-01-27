import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import NavigationLeftComponent from "@/components/navigation-left.component";
import NavigationTopComponent from "@/components/navigation-top.component";
import LatencyChartComponent from "@/components/latency-chart.component";
import UptimeChartComponent from "@/components/uptime-chart.component";
import { getIncidents } from "@/lib/hooks/get-incidents.hooks";
import { getServiceCheckResults } from "@/lib/hooks/get-service-check-results.hook";
import { getServiceChecks } from "@/lib/hooks/get-service-checks.hook";
import { ApiCheckRowComponentData } from "@/components/api-check-row.component";

export default async function Analytics() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const serviceChecks = await getServiceChecks(session.user?.access_token!);
  const results: ApiCheckRowComponentData[] = [];
  for (let i = 0; i < serviceChecks.length; i++) {
    const check = serviceChecks[i];
    const incidents = await getIncidents(session.user?.access_token!, check.id);
    const scResults = await getServiceCheckResults(session.user?.access_token!, check.id);
    results.push({...check, incidents, results: scResults})
  }
  
  return (
    <main className="flex flex-row justify-evenly text-gray-900">
      <NavigationLeftComponent />
      <div className="flex-auto w-full h-max flex flex-col justify-evenly">
        <NavigationTopComponent />
        <div className="flex-auto w-full bg-gray-200 p-10 space-y-4 h-screen">
          <div>
            <h3 className="text-2xl">Analytics</h3>
          </div>
          <div className="flex flex-row justify-stretch">
            <div className="flex-auto bg-white rounded-lg mr-2 p-2 w-80 h-26 flex flex-row justify-center align-middle text-center">
              <LatencyChartComponent data={results} />
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
