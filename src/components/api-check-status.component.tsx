import { ApiCheckResult } from "./api-check-row.component";

export function ApiCheckStatusComponent(props: { results: ApiCheckResult[] }) {

  const lastResultStatus = props.results.length > 0 ? props.results[props.results.length - 1].status : null;
  if (!lastResultStatus) {
    return (<td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500 me-2"></div>{" "}
            Pending
          </div>
        </td>)
  }
  if (lastResultStatus < 399) {
    return (<td className="px-6 py-4">
      <div className="flex items-center">
        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
        Online
      </div>
    </td>)
  } else {

  return (<td className="px-6 py-4">
      <div className="flex items-center">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
        Offline
      </div>
    </td>)
  }
}
