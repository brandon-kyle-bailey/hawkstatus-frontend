import { ApiCheckLastCheckComponent } from "./api-check-last-check.component";
import { ApiCheckStatusComponent } from "./api-check-status.component";
import { ApiCheckUptimeComponent } from "./api-check-uptime.component";
import LinkComponent from "./link.component";
import Image from "next/image";

export interface ApiCheckIncident {
  status: string;
  createdAt: string;
}

export interface ApiCheckResult {
  status: number;
  duration: number;
  createdAt: string;
  response: string;
}

export interface ApiCheckRowComponentData {
  id: string;
  name: string;
  url: string;
  incidents: ApiCheckIncident[];
  results: ApiCheckResult[];
}

export function ApiCheckRowComponent(props: {
  data: ApiCheckRowComponentData;
}) {
  const url = props.data.url.split("/");
  const faviconUrl = url[0] + "//" + url[2];
  return (
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
            src={`${faviconUrl}/favicon.ico`}
            alt={`${props.data.url} logo`}
            width={20}
            height={20}
          ></Image>
        </div>
        <div className="ps-3">
          <div className="text-lg text-gray-900">{props.data.name}</div>
          <div className="text-xs">
            <LinkComponent url={props.data.url} text={props.data.url} />
            {/* <a href={props.data.url}>{props.data.url}</a> */}
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <p>{props.data.incidents.length}</p>
      </td>
      <ApiCheckLastCheckComponent results={props.data.results} />
      <ApiCheckStatusComponent results={props.data.results} />
      <ApiCheckUptimeComponent results={props.data.results} />
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
  );
}
