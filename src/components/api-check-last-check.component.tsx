import { ApiCheckResult } from "./api-check-row.component";

export function ApiCheckLastCheckComponent(props: {
  results: ApiCheckResult[];
}) {
  return (
    <td className="px-6 py-4" suppressHydrationWarning>
      <p>{props.results.length > 0 ? props.results[props.results.length - 1].createdAt : "N/A"}</p>
    </td>
  );
}
