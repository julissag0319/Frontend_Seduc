import { useObtenerTodoTipoCargoQuery } from "@/store/service/TipoCargo";
import TableList from "@/components/listarTipoCargo/index";
import LayoutContent from "@/components/layout";

function ListarTipoCargo() {
  const { data } = useObtenerTodoTipoCargoQuery({});

  return (
    <LayoutContent
      title="Bienvenido (a) Estas en la Pantalla: Tipo de Cargo/Listar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableList data={data} />
      </div>
    </LayoutContent>
  );
}

export default ListarTipoCargo;