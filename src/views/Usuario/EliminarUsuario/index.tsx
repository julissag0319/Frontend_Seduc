import EliminarFormularioUsuario from "@/components/eliminarFormularioBasicoUsuario";
import LayoutContent from "@/components/layout";
//import { IUsuario } from "@/shared/UsuarioBB";
import {
    useEliminarUsuarioMutation,
    useObtenerUnUsuarioQuery,
} from "@/store/service/Usuario";
import { useNavigate, useParams } from "react-router-dom";

function EliminarUsuario() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnUsuarioQuery(id as string);
  const [eliminarUsuario] = useEliminarUsuarioMutation();

  const onSubmitHandler = async () => {
    try {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(2000);
      await eliminarUsuario(id as string);
      Navigate("/listar-usuario");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido estas en la Pantalla de: Eliminar Usuario"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EliminarFormularioUsuario
          option1={data && data.id_Persona}
          description1={data && data.nombre_Usuario}
          description2={data && data.contrasena_Usuario}
          description3={data && data.codigo_Recuperacion}
          option2={data && data.id_Tipo_Usuario}
          option3={data && data.id_Estado} 
          onSubmitHandler={onSubmitHandler}
          formTitle="Eliminar Usuario"
        />
      </div>
    </LayoutContent>
  );
}

export default EliminarUsuario;