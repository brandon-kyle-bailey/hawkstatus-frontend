import { mockApiData } from "@/lib/mock/api";
import { ApiCheckRowComponent } from "./api-check-row.component";
import ModalVideo from "./create-api-check.component";
// import { CreateApiCheckComponent } from "./create-api-check.component";

export function ApiChecksTableComponent() {
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
        {/* <CreateApiCheckComponent /> */}
        <ModalVideo />
      </div>
      <table className="w-full text-sm text-left rtl:text-right">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right bg-gray-50">
          API Checks
          <p className="mt-1 text-sm font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut
            magni tenetur eos consequuntur aut, dolores in voluptate harum
            possimus similique nemo nihil sequi laborum alias illo, autem
            quisquam ullam.
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
          {mockApiData.map((check) => (
            <ApiCheckRowComponent key={check.id} data={check} />
          ))}
          {/* <tr className="bg-white border-b hover:bg-gray-100">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label htmlFor="checkbox-table-search-1" className="sr-only">
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
              <p>0</p>
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
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 hover:fill-current hover:text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </a>
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
                <label htmlFor="checkbox-table-search-1" className="sr-only">
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
              <p>0</p>
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
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 hover:fill-current hover:text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </a>
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
                <label htmlFor="checkbox-table-search-1" className="sr-only">
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
              <p>0</p>
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
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 hover:fill-current hover:text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </a>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
