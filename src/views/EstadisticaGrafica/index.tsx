

import React from 'react';

import LinesChart from '../../components/Graficos/LineChart';
import BarChart from '../../components/Graficos/BarChart';
import PieChart from '../../components/Graficos/PieChart';
//import BarChart from '../../components/BarChat';
import LayoutContent from "@/components/layout";

import BackButton from "@/shared/BackButton";
import { useObtenerCantidadEscuelasPorDepartamentoQuery } from '@/store/service/Departamento';
import { useObtenerTodasRedesEscuelaQuery } from '@/store/service/Red';
import { useObtenerCantidadSupervisoresQuery } from '@/store/service/Persona';

const ObtenerDataDepartamento = () => {
  const { data } = useObtenerCantidadEscuelasPorDepartamentoQuery();

  var CantidadEscuelas = [];
  var DepartamentosEscuelas = [];


  if (Array.isArray(data)) {
    data.forEach(function (numero) {
      console.log(numero["Departamento"]);
      CantidadEscuelas.push(numero["Cantidad"]);
      DepartamentosEscuelas.push(numero["Departamento"])
    });
  }

  return ([{
    "Departamentos": DepartamentosEscuelas,
    "Cantidad": CantidadEscuelas
  }
  ]);

};

const ObtenerDataRedes = () => {
  const { data } = useObtenerTodasRedesEscuelaQuery();

  var CantidadRedes = [];
  var Redes = [];


  if (Array.isArray(data)) {
    data.forEach(function (numero) {
      console.log(numero["Departamento"]);
      CantidadRedes.push(numero["Cantidad"]);
      Redes.push(numero["Red"])
    });
  }

  return ([{
    "Red": Redes,
    "Cantidad": CantidadRedes
  }
  ]);

};

const ObtenerDataSupervisores = () => {
  const { data } = useObtenerCantidadSupervisoresQuery();

  var Cantidad = [];
  var Supervisores = [];


  if (Array.isArray(data)) {
    data.forEach(function (numero) {
      //console.log(numero["Departamento"]);
      Cantidad.push(numero["Cantidad"]);
      Supervisores.push(numero["Supervisor"])
    });
  }

 

  return ([{
    "Supervisores": Supervisores,
    "Cantidad": Cantidad
  }
  ]);

};



const App: React.FC = () => {

 

  //var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
  //var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const dataDepto = ObtenerDataDepartamento();
const dataRedes = ObtenerDataRedes();
const dataSupervisores = ObtenerDataSupervisores();

console.log("DATA2: ",dataDepto[0]["Cantidad"])
  //const chartData = [20, 50, 30, 80, 40];
  //var chartMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Graficos"
      icon="Icono"
      iconRight="Otro icono">

      <div className="grid grid-flow-col col-3">
        <div className='px-4'>
          <div className="mockup-window border border-base-300">
          &nbsp;&nbsp;Cantidad de Escuelas por Departamento
            <div className="flex justify-center px-4 py-16 border-t border-base-300">
              <PieChart pointGraficar={dataDepto[0]["Cantidad"]} labelsText={dataDepto[0]["Departamentos"]} title='Escuelas por Departamento' />
            </div>
          </div>
        </div>
        <div className='px-4'>
          <div className="mockup-window border border-base-300">
          &nbsp;&nbsp;Cantidad de Redes
            <div className="flex justify-center px-4 py-16 border-t border-base-300">
              <LinesChart pointGraficar={dataRedes[0]["Cantidad"]} labelsText={dataRedes[0]["Red"]} title='Escuelas Por Red' />
            </div>
          </div>
        </div>
        <div className='px-4'>
       
          <div className="mockup-window border border-base-300">
          &nbsp;&nbsp;Supervisores por Escuela
            <div className="flex justify-center px-4 py-16 border-t border-base-300">
              <BarChart pointGraficar={dataSupervisores[0]["Cantidad"]} labelsText={dataSupervisores[0]["Supervisores"]} title='Supervisor de Escuelas' />
            </div>
          </div>
       
        </div>
        
        
      </div>
      <br />
      <br></br>
      <BackButton path="/" />
   
     
    </LayoutContent>
  );
};

export default App;
