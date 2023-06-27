import EliminarFormularioBasico from "@/components/eliminarFormularioBasico";
import LayoutContent from "@/components/layout";
import {
  useEliminarTipoCargoMutation,
  useObtenerUnTipoCargoQuery,
} from "@/store/service/TipoCargo";
import { useNavigate, useParams } from "react-router-dom";

function EliminarTipoCargo() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnTipoCargoQuery(id as string);
  const [removeStore] = useEliminarTipoCargoMutation();

     const onSubmitHandler = async () => {
    try {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(4000);
      await removeStore(id as string);
      Navigate("/listar-tipo_cargo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido Estas en la Pantalla: Tipo Cargo/Eliminar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EliminarFormularioBasico
          description={data && data.descripcion_Tipo_Cargo}
          option={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Eliminar Tipo Cargo"
          labelInput="Tipo de Cargho"
        />
      </div>
    </LayoutContent>
  );
}

export default EliminarTipoCargo;
