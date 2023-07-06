import { useObtenerTodosUsuarioQuery } from "@/store/service/Usuario";
import LayoutContent from "@/components/layout";
import TableListaUsuario from "@/components/listarUsuario";


function ListarUsuario() {
  const { data } = useObtenerTodosUsuarioQuery({});

  return (
    <LayoutContent
      title="Bienvemido(a) Estas estas en la pantalla: Usuario/Listar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableListaUsuario data={data} />
      </div>
    </LayoutContent>
  );
}

export default ListarUsuario;