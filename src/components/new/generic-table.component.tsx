import React from "react";

export default function GenericTableComponent(props: {
  headers: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-white">
          <tr>
            {props.headers.map((row) => {
              return (
                <th key={row} scope="col" className="text-start px-6 py-6">
                  {row}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}
