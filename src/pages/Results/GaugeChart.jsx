import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Creates gradient background for chart
function createGradient(ctx, area) {
  const colorStart = "#E32804";
  const colorMid = "#EFF542";
  const colorEnd = "#31CC0C";

  const gradient = ctx.createLinearGradient(area.left, 0, area.right, 0);
  // const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

// Gauge Chart component
const GaugeChart = ({ score }) => {
  // Making Doughnut a gauge Chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    circumference: 180,
    cutout: "50%",
    rotation: -90,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Initial data from chart
  const data = {
    // Data set for a particular city
    labels: ["City Score", "Rest of the score"],
    datasets: [
      {
        label: "City Score",
        // Must receive a number
        data: [score, 100 - score],
        borderWidth: 7,
      },
    ],
  };

  const [chartData, setChartData] = useState({ datasets: [] });

  const chartRef = useRef();

  console.log(chartRef);

  // Getting gradient colors
  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    const newChartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(newChartData);
  }, []);

  return <Doughnut ref={chartRef} data={chartData} options={options} />;
};

export default GaugeChart;
