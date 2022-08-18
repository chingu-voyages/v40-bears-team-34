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
  // Formatting dummy data for Bar Chart
  const apartamentReviewRates = chartData.livabilityScore.reviewInsides;
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
    plugins: {
      title: {
        display: true,
        text: "Review Rates",
      },
    },
  };

  // Data formatted for Chart
  const [userData, setUserData] = useState({
    labels,
    datasets: [
      {
        label: "Positive",
        data: positiveValues,
        backgroundColor: "rgba(178, 222, 39, 1)",
      },
      {
        label: "Negative",
        data: negativeValues,
        backgroundColor: "rgba(255, 76, 48, 1)",
      },
    ],
  });

  return <Bar data={userData} options={options} />;
  // return <div>BarChart</div>;
};

export default BarChart;
