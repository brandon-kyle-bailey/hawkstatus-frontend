import { ApiCheckResult } from "./api-check-row.component";

export function ApiCheckStatusComponent(props: { results: ApiCheckResult[] }) {
  return (
    <td className="px-6 py-4">
      <div className="flex items-center">
        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
        Online
      </div>
    </td>
  );
}
