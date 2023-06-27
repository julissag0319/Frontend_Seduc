import { useObtenerTodasEscuelaQuery } from "@/store/service/Escuela";
import LayoutContent from "@/components/layout";
import TableListaEscuela from "@/components/listarEscuela";

function ListaEscuela() {
  const { data } = useObtenerTodasEscuelaQuery({});

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Listar Pantalla/Escuela"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableListaEscuela data={data} />
      </div>
    </LayoutContent>
  );
}

export default ListaEscuela;
