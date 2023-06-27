import { useObtenerTodosUsuarioQuery } from "@/store/service/Usuario";
import TableList from "@/components/listarUsuario/index";
import LayoutContent from "@/components/layout";

function ListarUsuario() {
  const { data } = useObtenerTodosUsuarioQuery({});

  return (
    <LayoutContent
      title="Bienvemido (a) Estas estas en la pantalla: Usuario/Listar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableList data={data} />
      </div>
    </LayoutContent>
  );
}

export default ListarUsuario;