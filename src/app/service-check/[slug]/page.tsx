import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import NavigationLeftComponent from "@/components/navigation-left.component";
import NavigationTopComponent from "@/components/navigation-top.component";
import { heroGradient } from "@/lib/styles/gradients";
import Image from "next/image";
import { getServiceCheck } from "@/lib/hooks/get-service-check.hook";
import { getIncidents } from "@/lib/hooks/get-incidents.hooks";
import { getServiceCheckResults } from "@/lib/hooks/get-service-check-results.hook";

export default async function Page({ params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  const serviceCheck = await getServiceCheck(session.user?.access_token!, params.slug);
  const incidents = await getIncidents(session.user?.access_token!, params.slug);
  const scResults = await getServiceCheckResults(session.user?.access_token!, params.slug);
  const results = {...serviceCheck, incidents, results: scResults};

  const url = serviceCheck.url.split("/");
  const faviconUrl = url[0] + "//" + url[2];

  console.log(serviceCheck);
  return (
    <main className="flex flex-row justify-evenly text-gray-900">
      <NavigationLeftComponent />
      <div className="flex-auto w-full h-max flex flex-col justify-evenly">
        <NavigationTopComponent />
        <div className="flex-auto h-screen w-full bg-gray-200 p-10 space-y-4">
          <div>
            <h2 className="text-2xl">Service check Settings</h2>
          </div>
          <div className="relative shadow-md rounded-lg flex flex-row flex-auto justify-start bg-white">
            <div className="flex justify-between flex-col p-10">
              <div className="flex flex-row flex-auto items-center justify-start space-x-4">
              <Image
                src={`${faviconUrl}/favicon.ico`}
                alt={`${serviceCheck.url} logo`}
                width={80}
                height={80}
              ></Image>
              <h3 className="text-2xl">{results.name}</h3>
              </div>
              <form className="text-gray-600 flex flex-col space-y-6 text-xl">
                <label htmlFor="name">Name</label>
                <input
                  className="border h-14 rounded-md p-4"
                  name="name"
                  type="text"
                  aria-label="name"
                  placeholder={`${serviceCheck.name}`}
                />
                <label htmlFor="url">Url</label>
                <input
                  className="border h-14 rounded-md p-4"
                  name="url"
                  type="url"
                  aria-label="url"
                  placeholder={`${serviceCheck.url}`}
                />
                <label htmlFor="body">Body</label>
                <input
                  className="border h-14 rounded-md p-4"
                  name="body"
                  type="body"
                  aria-label="body"
                  placeholder={`${serviceCheck.body ? serviceCheck.body : "{'hello': 'world'}"}`}
                />
                    <label htmlFor="headers">Headers</label>
                    <button
                      // onClick=""
                      type="button"
                      className="text-white bg-green-500 rounded-md hover:animate-pulse focus:animate-pulse p-2 flex-end"
                    >
                      +
                    </button>
                    <ul className="space-y-4 w-full">
                      {Object.entries(serviceCheck.headers).map((entry: any, idx) => {return {id: idx, key: entry[0], value: entry[1]}}).map((header) => {
                        return (
                          <li
                            key={header.id}
                            className="flex flex-row space-x-2"
                          >
                            <input
                              name="header"
                              type="text"
                              aria-label="header"
                              placeholder={header.key}
                              defaultValue={header.key}
                              className="placeholder-gray-400 bg-gray-200 border border-neutral-700 rounded-md p-4 flex-auto h-14 w-10"
                              // onChange=""
                            />
                            <input
                              name="header"
                              type="text"
                              aria-label="header"
                              placeholder={header.value}
                              defaultValue={header.value}
                              className="placeholder-gray-400 bg-gray-200 border border-neutral-700 rounded-md p-4 flex-auto h-14 w-10"
                              // onChange=""
                            />
                            <button
                              className="bg-red-500 hover:cursor-pointer rounded text-white w-6"
                              // onClick=""
                              type="button"
                            >
                              X
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                <button
                  className={`${heroGradient} h-14 rounded-md hover:animate-pulse focus:animate-pulse text-white`}
                  type="submit"
                >
                  Update My Servie Check
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
