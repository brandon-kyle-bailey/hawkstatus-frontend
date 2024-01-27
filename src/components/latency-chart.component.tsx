"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { ApiCheckRowComponentData } from "./api-check-row.component";

export default function LatencyChartComponent(props: {
  data: ApiCheckRowComponentData[];
}) {
  const canvasEl = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let labels: string[] = [];
  for (let i = 0; i <= 24; i++) {
    let hour = new Date();
    hour.setHours(i, i % 2 === 0 ? 0 : 30);
    labels.push(hour.toLocaleTimeString());
  }

  const datasets = props.data.map((res) => {
    return {
      label: res.name,
      fill: true,
      tension: 0.1,
      data: res.results.length > 24 ? res.results.slice(res.results.length - 26, res.results.length - 1).map((i) => i.duration) : res.results.map((i) => i.duration),
    };
  });

  useEffect(() => {
    const ctx = canvasEl.current;
    const chart = new Chart(ctx!, {
      type: "line",
      data: {
        labels,
        datasets,
      },
      options: {
        responsive: true,
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return `${value}ms`;
              },
            },
          },
        },
      },
    });
    return () => {
      chart.destroy();
    };
  }, [datasets, labels]);

  return (
    <div className="w-full h-fit p-2">
      <h2 className="text-4xl">Average Response time (24hr)</h2>
      <canvas ref={canvasEl} width={"100%"} height={"50%"} />
    </div>
  );
}
