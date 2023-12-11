import { ApiCheckResult } from "./api-check-row.component";

export function ApiCheckLastCheckComponent(props: {
  results: ApiCheckResult[];
}) {
  return (
    <td className="px-6 py-4">
      <p>{new Date().toISOString()}</p>
    </td>
  );
}
