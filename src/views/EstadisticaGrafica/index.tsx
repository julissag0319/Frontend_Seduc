//import Chart from 'chart.js';

// Obtén una referencia al elemento del DOM donde se mostrará el gráfico
//const chartCanvas = document.getElementById('myChart') as HTMLCanvasElement;
//const ctx = chartCanvas.getContext('2d');

// Define los datos y opciones del gráfico
//const data = {
 // labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
 /// datasets: [
  //  {
    //  label: 'Ventas',
   //   data: [12, 19, 3, 5, 2],
    //  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //    borderColor: 'rgba(75, 192, 192, 1)',
  //    borderWidth: 1,
  //  },
  //],
//};

//const options = {
  //scales: {
    //y: {
      //beginAtZero: true,
    //},
  //},
//};

// Crea una instancia del gráfico utilizando los datos y opciones
//const myChart = new Chart(ctx, {
  //type: 'bar',
 // data: data,
 // options: options,
//});
//import React from 'react';
//import ChartComponent from './chart';

//const App: React.FC = () => {
  //const chartData = [10, 20, 30, 40, 50];
  //const chartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];

  //return (
    //<div>
      //<h1>Gráfico con TypeScript y React</h1>
      //<ChartComponent data={chartData} labels={chartLabels} />
    //</div>
  //);
//};

//export default App;

import React from 'react';
import BarChart from '../../components/BarChat';

const App: React.FC = () => {
  const chartData = [20, 50, 30, 80, 40];

  return (
    <div>
      <h1>Mi Aplicación de Gráficos</h1>
      <BarChart data={chartData} />
    </div>
  );
};

export default App;
