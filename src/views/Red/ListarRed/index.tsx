import { useObtenerTodasRedQuery } from "@/store/service/Red";
import LayoutContent from "@/components/layout";
import TableListRed from "@/components/listarRed";

function ListRed() {
  const { data } = useObtenerTodasRedQuery({});

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Red/Listar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableListRed data={data} />
      </div>
    </LayoutContent>
  );
}

export default ListRed;
