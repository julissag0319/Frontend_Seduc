import EliminarFormularioBasicoRed from "@/components/editarFormularioBasicoRed";
import LayoutContent from "@/components/layout";
//import { IRed } from "@/shared/RedBB";
import {
    useEliminarRedMutation,
    useObtenerUnaRedQuery,
} from "@/store/service/Red";
import { useNavigate, useParams } from "react-router-dom";

function EliminarRed() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnaRedQuery(id as string);
  const [eliminarStore] = useEliminarRedMutation();

  const onSubmitHandler = async () => {
    try {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(4000);
      await eliminarStore(id as string);
      Navigate("/listar-red");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla de Red"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EliminarFormularioBasicoRed
          description1={data && data.codigo_Red}
          description2={data && data.descripcion_Red}
          option1={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Eliminar Red"
        />
      </div>
    </LayoutContent>
  );
}

export default EliminarRed;