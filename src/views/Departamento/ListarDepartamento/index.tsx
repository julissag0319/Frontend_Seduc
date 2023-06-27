import { useObtenerTodoDepartamentoQuery } from "@/store/service/Departamento";
import TableList from "@/components/listarDepartamento/index";
import LayoutContent from "@/components/layout";

function ListarDepartamento() {
  const { data } = useObtenerTodoDepartamentoQuery({});

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Departamento/Listar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableList data={data} />
      </div>
    </LayoutContent>
  );
}

export default ListarDepartamento;
