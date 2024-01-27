import { ApiCheckResult } from "./api-check-row.component";

export function ApiCheckUptimeComponent(props: { results: ApiCheckResult[] }) {

  let records: ApiCheckResult[] = [];
  if (props.results.length < 24) {
    // fill array
    const remainder = 24 - props.results.length;
    for (let i = 0; i < remainder; i++) {
      records.push({status: 0, duration: 0, createdAt: new Date().toISOString(), response: ""});
    };
    records = [...records, ...props.results];
  } else {
    // clip array for last 24 records
    records = props.results.slice(props.results.length - 25, props.results.length-1);
  }
  return (
    <td className="px-6 py-4">
      <ul className="flex flex-row justify-evenly">
        {
        records.map((r, idx) => {
          if (r.status === 0 && r.duration === 0) {
            return <li key={idx} className="bg-gray-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {r.createdAt}</p>
            <p>duration: {r.duration}ms</p>
            <p>status: {r.status}</p>
          </span>
        </li>
          }
          if (r.status < 399) {
            return <li key={idx} className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {r.createdAt}</p>
            <p>duration: {r.duration}ms</p>
            <p>status: {r.status}</p>
          </span>
        </li>
          } else {
            return <li key={idx} className="bg-red-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {r.createdAt}</p>
            <p>duration: {r.duration}ms</p>
            <p>status: {r.status}</p>
          </span>
        </li>
          }
        })
        }
        {/* <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li>
        <li className="bg-green-500 w-2 h-10 rounded hover:scale-125 has-tooltip">
          <span className="tooltip rounded bg-gray-200 text-xs -mt-20 -ml-20 flex flex-col justify-evenly p-2 shadow-lg">
            <p suppressHydrationWarning>timestamp: {new Date().toISOString()}</p>
            <p>duration: {Math.floor(Math.random() * 1000)}</p>
            <p>status: 200</p>
          </span>
        </li> */}
      </ul>
    </td>
  );
}
