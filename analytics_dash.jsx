// Importing the Line chart from the react-chart.js-2 library
import { Line } from 'react-chartjs-2';

// Defining the data for the chart
const data = {
    // Labels for the x-axis
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {    
            // Label for the dataset
            label: 'Stock Levels',
            // Data points corresponding to the labels
            data: [65, 59, 80, 81, 56],
            // Do not fill the area under the line
            fill: false,
            // Background color of the points
            backgroundColor: 'rgba(75,192,192,0.2)',
            // Border color of the line
            borderColor: 'rgba(75,192,192,1)',
        },
    ],
};
// Defining the options for the chart
const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    // Starting the y-axis at zero
                    beginAtZero: true,
                },
            },
        ],
    },
};
// Functional component to render the chart
function StockChar() {
    return <Line data={data} options={options} />;
}
