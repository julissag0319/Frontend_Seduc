import { useObtenerTodoTipoUsuarioQuery } from "@/store/service/TipoUsuario";
import TableList from "@/components/listarTipoUsuario/index";
import LayoutContent from "@/components/layout";

function ListarTipoUsuario() {
  const { data } = useObtenerTodoTipoUsuarioQuery({});

  return (
    <LayoutContent
      title="Bienvenido Estas en la Pantalla: Tipo de Usuario/Listar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableList data={data} />
      </div>
    </LayoutContent>
  );
}

export default ListarTipoUsuario;