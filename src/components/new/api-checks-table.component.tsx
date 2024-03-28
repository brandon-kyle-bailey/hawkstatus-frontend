import Image from "next/image";
import Link from "next/link";
import GenericTableComponent from "./generic-table.component";

const data = [
  {
    id: "1",
    name: "Check Hacker News every 30 seconds",
    url: "https://news.ycombinator.com/",
    status: "Pending",
    results: [
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
    ],
    incidents: 0,
  },
  {
    id: "1",
    name: "Check google every 30 seconds",
    url: "https://google.com",
    status: "Online",
    results: [
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 0 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 400 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 400 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
    ],
    incidents: 2,
  },
  {
    id: "2",
    name: "Check Oracle every minute",
    url: "https://oracle.com",
    status: "Offline",
    results: [
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 400 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 400 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 400 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 400 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 400 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 400 },
    ],
    incidents: 6,
  },
  {
    id: "3",
    name: "Check Stripe payment link every 5 seconds",
    url: "https://www.stripe.com/payments",
    status: "Online",
    results: [
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
      { timestamp: new Date().toLocaleString(), duration: 650, status: 200 },
    ],
    incidents: 0,
  },
];

interface ServiceCheckResult {
  timestamp: string;
  duration: number;
  status: number;
}

function ApiCheckTableRowComponent(props: {
  id: string;
  name: string;
  url: string;
  status: string;
  results: ServiceCheckResult[];
  incidents: number;
}) {
  const url = props.url.split("/");
  const faviconUrl = url[0] + "//" + url[2];
  return (
    <tr
      className="bg-white hover:bg-gray-50 border-b border-t"
      key={props.name}
    >
      <th
        scope="row"
        className="flex flex-row items-center px-6 py-4 text-gray-900 space-x-2"
      >
        <div>
          <Image
            src={`${faviconUrl}/favicon.ico`}
            alt={`${faviconUrl} logo`}
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-base font-semibold">{props.name}</p>
          <Link
            className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
            href={`${props.url}`}
            rel={"noreferrer"}
            target={"_blank"}
          >
            {props.url}
          </Link>
        </div>
      </th>
      <td className="px-6 py-4">{props.incidents}</td>
      <td className="px-6 py-4">
        {props.results.length > 0
          ? props.results[props.results.length - 1].timestamp
          : "N/A"}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {props.status.toLocaleLowerCase() === "online" ? (
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
          ) : props.status.toLocaleLowerCase() === "offline" ? (
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
          ) : (
            <div className="h-2.5 w-2.5 rounded-full bg-gray-500 me-2"></div>
          )}
          <p>{props.status}</p>
        </div>
      </td>
      <td className="px-6 py-4">
        <ul className="flex flex-row space-x-1">
          {props.results.map((res) => {
            const colorStyle =
              res.status === 0
                ? "bg-gray-500"
                : res.status >= 200 && res.status < 300
                ? "bg-green-500"
                : "bg-red-500";
            return (
              <li
                className={`w-2 h-10 rounded hover:scale-125 has-tooltip ${colorStyle}`}
                key={`${props.id}-${res.duration}-${res.status}`}
              >
                <span className="rounded tooltip bg-gray-100 shadow-lg -mt-14 -ml-28 p-2 text-xs whitespace-pre">
                  <p>timestamp: {res.timestamp}</p>
                  <p>duration: {res.duration}</p>
                  <p>status: {res.status}</p>
                </span>
              </li>
            );
          })}
        </ul>
      </td>
      <td className="px-6 py-4">
        <a
          href={`/service-check/${props.id}`}
          type="button"
          className="font-medium text-blue-600 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}

export default function ApiChecksTableComponent() {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-2">
          <p>some search field</p>
          <p>some toggles</p>
        </div>
        <a
          href="/service-check/create"
          className="rounded-md p-3 bg-gray-900 text-white w-2/12 text-center hover:cursor-pointer"
        >
          <span>Create New API Check</span>
        </a>
      </div>
      <GenericTableComponent
        headers={[
          "Url",
          "Incidents",
          "Last Checked",
          "Status",
          "Uptime (Last 24 Hours)",
          "Edit",
        ]}
      >
        {data.map((row) => {
          return (
            <ApiCheckTableRowComponent
              key={row.id}
              id={row.id}
              name={row.name}
              url={row.url}
              status={row.status}
              results={row.results}
              incidents={row.incidents}
            />
          );
        })}
      </GenericTableComponent>
    </>
  );
}
