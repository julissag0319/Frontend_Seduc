import { useObtenerTodoMunicipioQuery } from "@/store/service/Municipio";
import TableList from "@/components/listarMunicipio/index";
import LayoutContent from "@/components/layout";

function listarMunicipio() {
  const { data } = useObtenerTodoMunicipioQuery({});

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Municipio/Listar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableList data={data} />
      </div>
    </LayoutContent>
  );
}

export default listarMunicipio;
