import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
   
};

interface BarChartProps {
    pointGraficar: number[];
    labelsText: string[];
    title: string;
  }

const BarChart: React.FC<BarChartProps> = ({ pointGraficar,labelsText,title }) =>  {
    var midata = {
        labels: labelsText,
        datasets: [
            {
                label: title,
                data: pointGraficar,
                backgroundColor: 'rgba(255, 94, 0, 0.5)'
            }
        ]
    };
    return <Bar data={midata} options={misoptions} />
}

export default BarChart;