import Image from "next/image";
import Link from "next/link";

export default function ApiChecksTableComponent() {
  return (
    <table className="table-auto bg-white rounded-lg border-separate border-spacing-8 text-gray-700">
      <caption className="caption-top">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam
        dolorum provident maiores, unde veniam vitae. Mollitia, consectetur sint
        repellendus ducimus fugit totam, doloremque at rerum harum aliquid,
        repellat et?
      </caption>
      <thead className="text-xs uppercase">
        <tr className="">
          <th scope="col" className="text-start">
            Url
          </th>
          <th scope="col" className="text-start">
            Incidents
          </th>
          <th scope="col" className="text-start">
            Last checked
          </th>
          <th scope="col" className="text-start">
            Status
          </th>
          <th scope="col" className="text-start">
            Uptime (Last 24 hours)
          </th>
          <th className="text-start"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="flex flex-row justify-start space-x-2 items-center text-start">
            <Image
              src={`https://www.google.com/favicon.ico`}
              alt={`https://www.google.com logo`}
              width={20}
              height={20}
            />
            <div className="flex flex-col justify-start">
              <p>Ping Google every 30 seconds</p>
              <Link
                className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href={"https://www.google.com"}
                rel={"noreferrer"}
                target={"_blank"}
              >
                https://www.google.com
              </Link>
            </div>
          </td>
          <td className="text-start pt-3">0</td>
          <td className="text-start pt-3">{new Date().toISOString()}</td>
          <td className="text-start flex flex-row items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <p>Online</p>
          </td>
          <td className="text-start pt-3">
            <ul className="flex flex-row space-x-1">
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
            </ul>
          </td>
          <td className="text-start pt-3">
            <a href="/service-check/id">Edit</a>
          </td>
        </tr>
        <tr>
          <td className="flex flex-row justify-start space-x-2 items-center text-start">
            <Image
              src={`https://www.google.com/favicon.ico`}
              alt={`https://www.google.com logo`}
              width={20}
              height={20}
            />
            <div className="flex flex-col justify-start">
              <p>Ping Google every 30 seconds</p>
              <Link
                className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href={"https://www.google.com"}
                rel={"noreferrer"}
                target={"_blank"}
              >
                https://www.google.com
              </Link>
            </div>
          </td>
          <td className="text-start pt-3">0</td>
          <td className="text-start pt-3">{new Date().toISOString()}</td>
          <td className="text-start flex flex-row items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <p>Online</p>
          </td>
          <td className="text-start pt-3">
            <ul className="flex flex-row space-x-1">
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
            </ul>
          </td>
          <td className="text-start pt-3">
            <a href="/service-check/id">Edit</a>
          </td>
        </tr>
        <tr>
          <td className="flex flex-row justify-start space-x-2 items-center text-start">
            <Image
              src={`https://www.google.com/favicon.ico`}
              alt={`https://www.google.com logo`}
              width={20}
              height={20}
            />
            <div className="flex flex-col justify-start">
              <p>Ping Google every 30 seconds</p>
              <Link
                className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href={"https://www.google.com"}
                rel={"noreferrer"}
                target={"_blank"}
              >
                https://www.google.com
              </Link>
            </div>
          </td>
          <td className="text-start pt-3">0</td>
          <td className="text-start pt-3">{new Date().toISOString()}</td>
          <td className="text-start flex flex-row items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <p>Online</p>
          </td>
          <td className="text-start pt-3">
            <ul className="flex flex-row space-x-1">
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
            </ul>
          </td>
          <td className="text-start pt-3">
            <a href="/service-check/id">Edit</a>
          </td>
        </tr>
        <tr>
          <td className="flex flex-row justify-start space-x-2 items-center text-start">
            <Image
              src={`https://www.google.com/favicon.ico`}
              alt={`https://www.google.com logo`}
              width={20}
              height={20}
            />
            <div className="flex flex-col justify-start">
              <p>Ping Google every 30 seconds</p>
              <Link
                className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href={"https://www.google.com"}
                rel={"noreferrer"}
                target={"_blank"}
              >
                https://www.google.com
              </Link>
            </div>
          </td>
          <td className="text-start pt-3">0</td>
          <td className="text-start pt-3">{new Date().toISOString()}</td>
          <td className="text-start flex flex-row items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <p>Online</p>
          </td>
          <td className="text-start pt-3">
            <ul className="flex flex-row space-x-1">
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
            </ul>
          </td>
          <td className="text-start pt-3">
            <a href="/service-check/id">Edit</a>
          </td>
        </tr>
        <tr>
          <td className="flex flex-row justify-start space-x-2 items-center text-start">
            <Image
              src={`https://www.google.com/favicon.ico`}
              alt={`https://www.google.com logo`}
              width={20}
              height={20}
            />
            <div className="flex flex-col justify-start">
              <p>Ping Google every 30 seconds</p>
              <Link
                className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href={"https://www.google.com"}
                rel={"noreferrer"}
                target={"_blank"}
              >
                https://www.google.com
              </Link>
            </div>
          </td>
          <td className="text-start pt-3">0</td>
          <td className="text-start pt-3">{new Date().toISOString()}</td>
          <td className="text-start flex flex-row items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <p>Online</p>
          </td>
          <td className="text-start pt-3">
            <ul className="flex flex-row space-x-1">
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
            </ul>
          </td>
          <td className="text-start pt-3">
            <a href="/service-check/id">Edit</a>
          </td>
        </tr>
        <tr>
          <td className="flex flex-row justify-start space-x-2 items-center text-start">
            <Image
              src={`https://www.google.com/favicon.ico`}
              alt={`https://www.google.com logo`}
              width={20}
              height={20}
            />
            <div className="flex flex-col justify-start">
              <p>Ping Google every 30 seconds</p>
              <Link
                className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href={"https://www.google.com"}
                rel={"noreferrer"}
                target={"_blank"}
              >
                https://www.google.com
              </Link>
            </div>
          </td>
          <td className="text-start pt-3">0</td>
          <td className="text-start pt-3">{new Date().toISOString()}</td>
          <td className="text-start flex flex-row items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <p>Online</p>
          </td>
          <td className="text-start pt-3">
            <ul className="flex flex-row space-x-1">
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
            </ul>
          </td>
          <td className="text-start pt-3">
            <a href="/service-check/id">Edit</a>
          </td>
        </tr>
        <tr>
          <td className="flex flex-row justify-start space-x-2 items-center text-start">
            <Image
              src={`https://www.google.com/favicon.ico`}
              alt={`https://www.google.com logo`}
              width={20}
              height={20}
            />
            <div className="flex flex-col justify-start">
              <p>Ping Google every 30 seconds</p>
              <Link
                className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
                href={"https://www.google.com"}
                rel={"noreferrer"}
                target={"_blank"}
              >
                https://www.google.com
              </Link>
            </div>
          </td>
          <td className="text-start pt-3">0</td>
          <td className="text-start pt-3">{new Date().toISOString()}</td>
          <td className="text-start flex flex-row items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <p>Online</p>
          </td>
          <td className="text-start pt-3">
            <ul className="flex flex-row space-x-1">
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
              <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
                <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
                  <p suppressHydrationWarning>
                    timestamp: {new Date().toISOString()}
                  </p>
                  <p>duration: 100ms</p>
                  <p>status: 200</p>
                </span>
              </li>
            </ul>
          </td>
          <td className="text-start pt-3">
            <a href="/service-check/id">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
