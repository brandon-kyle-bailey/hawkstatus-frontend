"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function UptimeChartComponent() {
  const canvasEl = useRef(null);
  const uptimeScore = 95.55;
  const downtimeScore = 100 - uptimeScore;

  useEffect(() => {
    const ctx = canvasEl.current;
    const chart = new Chart(ctx!, {
      type: "doughnut",
      data: {
        labels: ["Uptime", "Downtime"],
        datasets: [
          {
            label: "Uptime",
            data: [uptimeScore, downtimeScore],
            backgroundColor: ["rgb(34 197 94)", "rgb(239 68 68)"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-fit h-fit p-2">
      <h2 className="text-4xl">Average Uptime %</h2>
      <p className="text-green-500">{uptimeScore}%</p>
      <canvas ref={canvasEl} width={"100%"} height={"100%"} />
    </div>
  );
}
