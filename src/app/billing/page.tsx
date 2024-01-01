import LinkComponent from "@/components/link.component";
import NavigationLeftComponent from "@/components/navigation-left.component";
import NavigationTopComponent from "@/components/navigation-top.component";
import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Billing() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <main className="flex flex-row justify-evenly text-gray-900">
      <NavigationLeftComponent />
      <div className="flex-auto w-full h-max flex flex-col justify-evenly">
        <NavigationTopComponent />
        <div className="flex-auto h-full w-full bg-gray-200 p-10 space-y-4">
          <div>
            <h2 className="text-2xl">Billing</h2>
            <p>Manage your billing and payment details.</p>
          </div>
          <div className="relative flex flex-col flex-auto justify-evenly space-y-6">
            <div className="shadow-md flex flex-col flex-auto justify-evenly space-y-2 bg-white rounded-lg">
              <div className="flex flex-row text-xl border border-neutral-200 align-middle justify-center items-center text-center p-6 bg-cyan-400 rounded-t-lg">
                <div className="flex flex-row space-x-6 align-middle justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                  <p>Basic plan</p>
                </div>
                <a href="#" className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-6">
                <div className="flex flex-row justify-start align-middle items-end space-x-1">
                  <p className="text-3xl">$10</p>
                  <p className="text-gray-500">per month</p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda quam aliquid ducimus nulla tempora. Dolore, commodi
                  enim facere molestiae eaque provident voluptatum itaque magni
                  saepe qui sit culpa accusantium minus!
                </p>
              </div>
            </div>
            <div className="shadow-md flex flex-col flex-auto justify-evenly space-y-2 bg-white rounded-lg">
              <div className="flex flex-row text-xl border border-neutral-200 align-middle justify-center items-center text-center p-6  rounded-t-lg">
                <div className="flex flex-row space-x-6 align-middle justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                  <p>Basic plan</p>
                </div>
                <a href="#" className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-6">
                <div className="flex flex-row justify-start align-middle items-end space-x-1">
                  <p className="text-3xl">$10</p>
                  <p className="text-gray-500">per month</p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda quam aliquid ducimus nulla tempora. Dolore, commodi
                  enim facere molestiae eaque provident voluptatum itaque magni
                  saepe qui sit culpa accusantium minus!
                </p>
              </div>
            </div>
            <div className="shadow-md flex flex-col flex-auto justify-evenly space-y-2 bg-white rounded-lg">
              <div className="flex flex-row text-xl border border-neutral-200 align-middle justify-center items-center text-center p-6 rounded-t-lg">
                <div className="flex flex-row space-x-6 align-middle justify-center items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                  <p>Basic plan</p>
                </div>
                <a href="#" className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-6">
                <div className="flex flex-row justify-start align-middle items-end space-x-1">
                  <p className="text-3xl">$10</p>
                  <p className="text-gray-500">per month</p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda quam aliquid ducimus nulla tempora. Dolore, commodi
                  enim facere molestiae eaque provident voluptatum itaque magni
                  saepe qui sit culpa accusantium minus!
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <h3 className="text-xl">Billing history</h3>
            <table className="w-full text-sm text-left rtl:text-right">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right bg-gray-50 rounded-t-lg">
                API Checks
                <p className="mt-1 text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam ut magni tenetur eos consequuntur aut, dolores in
                  voluptate harum possimus similique nemo nihil sequi laborum
                  alias illo, autem quisquam ullam.
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 rounded-lg">
                <tr className="rounded-lg">
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
                    Invoice
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="rounded-lg">
                <tr className="bg-white border-b hover:bg-gray-100 rounded-lg">
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
                  <td className="px-6 py-4">
                    <p>hello world</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>hello world</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>hello world</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>hello world</p>
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
