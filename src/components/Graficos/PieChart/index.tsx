import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
    
};

interface PieChartProps {
    pointGraficar: number[];
    labelsText: string[];
    title: string;
  }

const PieChart: React.FC<PieChartProps> = ({ pointGraficar,labelsText,title }) => {

    var data = {
        labels: labelsText,
        datasets: [
            {
                label: title,
                data: pointGraficar,
                borderWidth: 1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
            },
        ],
    };

    return <Pie data={data} options={options} />
}

export default PieChart;