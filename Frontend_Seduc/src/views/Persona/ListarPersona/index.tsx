import { useObtenerTodasPersonaQuery } from "@/store/service/Persona";
import LayoutContent from "@/components/layout";
import TableListaPersona from "@/components/listarPersona";

function ListaPersona() {
  const { data } = useObtenerTodasPersonaQuery({});

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Listar Pantalla/Persona"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <TableListaPersona data={data} />
      </div>
    </LayoutContent>
  );
}

export default ListaPersona;
