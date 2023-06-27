import EliminarFormularioBasico from "@/components/eliminarFormularioBasico";
import LayoutContent from "@/components/layout";
import {
  useEliminarTipoUsuarioMutation,
  useObtenerUnTipoUsuarioQuery,
} from "@/store/service/TipoUsuario";
import { useNavigate, useParams } from "react-router-dom";

function EliminarTipoUsuario() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnTipoUsuarioQuery(id as string);
  const [removeStore] = useEliminarTipoUsuarioMutation();

  const onSubmitHandler = async () => {
    try {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(4000);
      await removeStore(id as string);
      Navigate("/listar-tipo_usuario");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido Estas en la Pantalla: Tipo Usuario/Eliminar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EliminarFormularioBasico
          description={data && data.descripcion_Tipo_Usuario}
          option={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Eliminar Tipo Usuario"
          labelInput="Tipo de usuario"
        />
      </div>
    </LayoutContent>
  );
}

export default EliminarTipoUsuario;
