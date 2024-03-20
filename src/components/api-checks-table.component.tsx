import { getServerSession } from "next-auth";
import { ApiCheckRowComponent } from "./api-check-row.component";
import CreateApiCheckComponent from "./create-api-check.component";
import { authOptions } from "@/lib/config/auth";
import { redirect } from "next/navigation";
import { getIncidents } from "@/lib/hooks/get-incidents.hooks";
import { getServiceCheckResults } from "@/lib/hooks/get-service-check-results.hook";
import { getServiceChecks } from "@/lib/hooks/get-service-checks.hook";

export default async function ApiChecksTableComponent() {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/signin");
  // }

  // const serviceChecks = await getServiceChecks(session.user?.access_token!);
  // const results = [];
  // for (let i = 0; i < serviceChecks.length; i++) {
  //   const check = serviceChecks[i];
  //   const incidents = await getIncidents(session.user?.access_token!, check.id);
  //   const scResults = await getServiceCheckResults(
  //     session.user?.access_token!,
  //     check.id
  //   );
  //   results.push({ ...check, incidents, results: scResults });
  // }

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <div className="flex items-center justify-between flex-row space-y-4 py-4 bg-white p-10">
        <div className="relative">
          <input
            type="text"
            id="table-search-users"
            className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
          ></input>
        </div>
        {/* <CreateApiCheckComponent
          token={session.user?.access_token!}
          apiUrl={process.env.API_URL!}
        /> */}
      </div>
      <table className="w-full text-sm text-left rtl:text-right">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right bg-gray-50">
          API Checks
          <p className="mt-1 text-sm font-normal">
            These are your Service checks. You can create and configure checks
            from this table.
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Url
            </th>
            <th scope="col" className="px-6 py-3">
              Incidents
            </th>
            <th scope="col" className="px-6 py-3">
              Last checked
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Uptime (Last 24 hours)
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {/* {results.map((check: any) => {
            return <ApiCheckRowComponent key={check.id} data={check} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
}
