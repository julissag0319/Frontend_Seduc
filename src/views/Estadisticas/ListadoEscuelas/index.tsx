import { useObtenerTodasEscuelaQuery } from "@/store/service/Escuela";
import LayoutContent from "@/components/layout";
import TableListaEscuela from "@/components/listarEscuela";

import { useObtenerTodasRedQuery } from "@/store/service/Red";

import TableListRed from "@/components/listarRed";


export const ObtenerListaEscuelas = () => {
  const { data } = useObtenerTodasEscuelaQuery({});
  return data ? data : [];
};

export const ObtenerListaRedes = () => {
  const { data } = useObtenerTodasRedQuery({});
  return data ? data : [];
};

function ListaEscuela() {


  
  
  const DataEscuelas = ObtenerListaEscuelas();
  const DataRedes = ObtenerListaRedes();
  

  //<TableListaEscuela data={Escuelas} />

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Exportar Datos a Excel"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">





        <br />
        <br></br>
        <TableListaEscuela data={DataEscuelas} />
       
        <br />
        <br></br>
        <TableListRed data={DataRedes} />
      </div>
    </LayoutContent>
  );
}

export default ListaEscuela;
