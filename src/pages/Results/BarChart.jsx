import { useState } from "react";

// Importing Bar component from Chart Js Library
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Component that will contain bar chart
// to display positivity and negativity rate
const BarChart = ({ chartData }) => {
  const [oficialData, setOficialData] = useState(chartData);
  console.log(chartData[0]);
  // Formatting dummy data for Bar Chart
  const apartamentReviewRates = chartData[0].livabilityScore.reviewInsides;
  // List that represent labels for chart, must be an array
  const labels = [];
  const positiveValues = [];
  const negativeValues = [];

  for (const amenity in apartamentReviewRates) {
    // Positive Values
    positiveValues.push(Object.values(apartamentReviewRates[amenity])[0]);
    // Negative values
    negativeValues.push(Object.values(apartamentReviewRates[amenity])[1]);
    // Amenity labels
    labels.push(amenity);
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Review Rates",
        color: "#000000",
        font: {
          family: "'Verdana', 'sans-serif'",
        },
      },
      legend: {
        position: "bottom",
        labels: {
          color: "#000000",
          font: {
            family: "'Verdana', 'sans-serif'",
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000000",
          font: {
            family: "'Verdana', 'sans-serif'",
          },
        },
      },
      y: {
        ticks: {
          color: "#000000",
          font: {
            family: "'Verdana', 'sans-serif'",
          },
        },
      },
    },
  };

  // Data formatted for Chart
  const [userData, setUserData] = useState({
    labels: ["Quiet", "Clean", "Management", "Bugs", "Neighboorhood", "Crime"],
    datasets: [
      {
        label: "Positive",
        data: positiveValues,
        backgroundColor: "#31CC0C",
      },
      {
        label: "Negative",
        data: negativeValues,
        backgroundColor: "#E32804",
      },
    ],
  });

  return <Bar data={userData} options={options} />;
  // return <div>BarChart</div>;
};

export default BarChart;
