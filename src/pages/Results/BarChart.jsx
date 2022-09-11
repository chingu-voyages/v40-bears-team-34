
// Importing Bar component from Chart Js Library
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Component that will contain bar chart
// to display positivity and negativity rate
const BarChart = ({ chartData, apartmentName }) => {
    const positiveValues = []
    const negativeValues = []

    for (const rating in chartData) {
        if (rating.includes('Positive')) {
            positiveValues.push(chartData[rating])
        } else {
            negativeValues.push(chartData[rating])
        }
    }

    const mainTitle = `Ratings Reviews for ${apartmentName}`
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: mainTitle,
                color: '#000000',
                font: {
                    family: "'Verdana', 'sans-serif'",
                },
            },
            legend: {
                position: 'bottom',
                labels: {
                    color: '#000000',
                    font: {
                        family: "'Verdana', 'sans-serif'",
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#000000',
                    font: {
                        family: "'Verdana', 'sans-serif'",
                    },
                },
            },
            y: {
                ticks: {
                    color: '#000000',
                    font: {
                        family: "'Verdana', 'sans-serif'",
                    },
                },
            },
        },
    }

    // Data formatted for Chart
    const userData ={
        labels: [
            'Quiet',
            'Clean',
            'Management',
            'Bugs',
            'Neighboorhood',
            'Crime',
        ],
        datasets: [
            {
                label: 'Positive',
                data: positiveValues,
                backgroundColor: '#31CC0C',
            },
            {
                label: 'Negative',
                data: negativeValues,
                backgroundColor: '#E32804',
            },
        ],
    }

    return <Bar data={userData} options={options} />
    // return <div>BarChart</div>;
}

export default BarChart
