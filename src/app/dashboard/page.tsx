import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Image from "next/image";
import LinkComponent from "@/components/link.component";
import { heroGradient } from "@/lib/styles/gradients";

const checks = [{}];

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/sigin");
  }
  return (
    <main className="flex flex-row h-screen w-screen justify-evenly text-gray-900">
      <div className="flex-none w-500 h-full p-10 text-gray-100 bg-gray-900 flex flex-col justify-evenly">
        <h1 className="flex-none text-2xl h-100 w-10">
          <a href="/dashboard">Hawkstauts</a>
        </h1>
        <h2 className="flex-none">Welcome {session.user?.email}</h2>
        <div className="flex-auto mt-10">
          <ul className="space-y-4">
            <li>
              <a href="/billing">API Checks</a>
            </li>
            <li>
              <a href="/billing">Incidents</a>
            </li>
            <li>
              <a href="/billing">Billing</a>
            </li>
          </ul>
        </div>
        <div className="flex-end">
          <LinkComponent url="/signout" text="Sign out" />
        </div>
      </div>
      <div className="flex-auto w-full h-full flex flex-col justify-evenly">
        <nav className="flex-none h-100 bg-white p-8">
          <ul className="flex flex-row justify-end space-x-2">
            <li className="flex flex-row items-center">
              <LinkComponent url="/signout" text="Sign out" />
            </li>
            <li className="flex flex-row space-x-2 items-center">
              <Image
                src={
                  "https://pbs.twimg.com/profile_images/1720492852336070656/iLs6Fd18_400x400.jpg"
                }
                alt={"profile picture"}
                width={50}
                height={50}
                className="rounded-full"
              ></Image>
              <p>{session.user?.email}</p>
            </li>
          </ul>
        </nav>
        <div className="flex-auto h-full w-full bg-gray-200 p-10">
          <div className="w-full flex flex-row itemx-center justify-between p-2">
            <h3 className="text-2xl">My Dashboard</h3>
            <div className="text-white">
              <button
                className={
                  " p-4 rounded-md hover:animate-pulse focus:animate-pulse bg-gray-900"
                }
                type="submit"
              >
                Create API check
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white p-10">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                ></input>
              </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
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
                <tr className="bg-white border-b hover:bg-gray-100">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowra"
                  >
                    <div>
                      <Image
                        src={"https://stripe.com/favicon.ico"}
                        alt={"stripe logo"}
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                    <div className="ps-3">
                      <div className="font-bold text-gray-900">
                        Check Stripe payment link ever 5 seconds
                      </div>
                      <div className="text-xs">
                        <LinkComponent
                          url="https://www.stripe.com/payments"
                          text="https://www.stripe.com/payments"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p>{new Date().toISOString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="flex flex-row justify-evenly">
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <LinkComponent url="/edit" text="Edit" />
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-100">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowra"
                  >
                    <div>
                      <Image
                        src={"https://google.com/favicon.ico"}
                        alt={"google logo"}
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                    <div className="ps-3">
                      <div className="font-bold text-gray-900">
                        Ping google every 30 seconds
                      </div>
                      <div className="text-xs">
                        <LinkComponent
                          url="https://www.google.com"
                          text="https://www.google.com"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p>{new Date().toISOString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="flex flex-row justify-evenly">
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-gray-400 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <LinkComponent url="/edit" text="Edit" />
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-100">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowra"
                  >
                    <div>
                      <Image
                        src={"https://oracle.com/favicon.ico"}
                        alt={"oracle logo"}
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                    <div className="ps-3">
                      <div className="font-bold text-gray-900">
                        Ping Oracle every minute
                      </div>
                      <div className="text-xs">
                        <LinkComponent
                          url="https://www.oracle.com"
                          text="https://www.oracle.com"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p>{new Date().toISOString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                      Offline
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="flex flex-row justify-evenly">
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                      <li className="bg-green-500 w-2 h-10 rounded"></li>
                      <li className="bg-red-500 w-2 h-10 rounded"></li>
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <LinkComponent url="/edit" text="Edit" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
