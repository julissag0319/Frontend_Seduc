import EliminarFormularioBasico from "@/components/editarFormularioBasico"
import LayoutContent from "@/components/layout";
import {
  useEliminarDepartamentoMutation,
  useObtenerUnDepartamentoQuery,
} from "@/store/service/Departamento";
import { useNavigate, useParams } from "react-router-dom";

function EliminarDepartamento() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnDepartamentoQuery(id as string);
  const [removeStore] = useEliminarDepartamentoMutation();

  const onSubmitHandler = async () => {
    try {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(4000);
      await removeStore(id as string);
      Navigate("/listar-departamento");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido (a) Estas en la Pantalla Departamento/Eliminar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EliminarFormularioBasico
          description={data && data.descripcion_Departamento}
          option={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Eliminar Departamento"
          labelInput="Nombre del Departamento"
        />
      </div>
    </LayoutContent>
  );
}

export default EliminarDepartamento;