import { Line } from 'react-chartjs-2';
const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Stock Levels',
            data: [65, 59, 80, 81, 56],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
        },
    ],
};
const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};
function StockChar() {
    return <Line data={data} options={options} />;
}