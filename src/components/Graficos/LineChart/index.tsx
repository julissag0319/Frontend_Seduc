import { Line } from 'react-chartjs-2';
import 'chart.js/auto'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

 



var misoptions = {
    scales : {
        y : {
            min : 0
        },
        
    }
};

interface LineChartProps {
    pointGraficar: number[];
    labelsText: string[];
    title: string;
  }

  const LinesChart: React.FC<LineChartProps> = ({ pointGraficar,labelsText,title }) => {
    var midata = {
        labels: labelsText,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: title,
                data: pointGraficar,
                tension: 0.5,
                fill : true,
            
            }
        ],
    };
    return <Line data={midata} options={misoptions}/>
}

export default LinesChart;