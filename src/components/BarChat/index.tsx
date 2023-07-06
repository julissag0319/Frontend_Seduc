//import React, { useEffect, useRef } from 'react';
//import Chart from 'chart.js';


//interface ChartProps {
  //data: number[];
  //labels: string[];
//}
//const ChartComponent: React.FC<ChartProps> = ({ data, labels }) => {
  //const chartRef = useRef<HTMLCanvasElement | null>(null);
  //useEffect(() => {
    //if (chartRef.current) {
      //const ctx = chartRef.current.getContext('2d');
      //if (ctx) {
        //new Chart(ctx, {
          //type: 'bar',
          //data: {
            //labels,
            //datasets: [
              //{
              //  label: 'Data',
                //data,
             //  backgroundColor: 'rgba(75, 192, 192, 0.6)',
             // },
            //],
          //},
        //});
      //}
    //}
  //}, [data, labels]);

 // return <canvas ref={chartRef} />;
//};

//export default ChartComponent;


//import React from 'react';
//import { Chart } from 'chart.js';

//const ChartComponent: React.FC = () => {
//  const data = {
  //  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //datasets: [
      //{
        //label: 'Example Dataset',
       // data: [12, 19, 3, 5, 2, 3],
    //    backgroundColor: [
      //    'rgba(255, 99, 132, 0.2)',
        //  'rgba(54, 162, 235, 0.2)',
          //'rgba(255, 206, 86, 0.2)',
//          'rgba(75, 192, 192, 0.2)',
  //        'rgba(153, 102, 255, 0.2)',
    //      'rgba(255, 159, 64, 0.2)',
      //  ],
        //borderColor: [
          //'rgba(255, 99, 132, 1)',
         // 'rgba(54, 162, 235, 1)',
         // 'rgba(255, 206, 86, 1)',
//          'rgba(75, 192, 192, 1)',
  //        'rgba(153, 102, 255, 1)',
    //      'rgba(255, 159, 64, 1)',
      //  ],
        //borderWidth: 1,
     // },
  //  ],
 // };

 // return <Chart data={data} />;
//};

//export default ChartComponent;


import React from 'react';

import BackButton from "@/shared/BackButton";
interface BarChartProps {
  data: number[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div>
      <h2>Gráfico de Barras</h2>
      <div>
        {data.map((value, index) => (
          <div key={index} style={{ height: `${value}px`, backgroundColor: 'blue', margin: '2px' }} />
        ))}
      </div>
      <BackButton path="/grafica" />
    </div>
  );
};

export default BarChart;
