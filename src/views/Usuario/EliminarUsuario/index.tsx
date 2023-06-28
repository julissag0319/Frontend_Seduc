import EliminarFormularioUsuario from "@/components/eliminarFormularioBasicoUsuario";
import LayoutContent from "@/components/layout";
import { IUsuario } from "@/shared/UsuarioBB";
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

  const onSubmitHandler = async (
    inputFieldid_Persona: string,
    inputFieldnombre_Usuario: string, 
    inputFieldcontrasena_Usuario: string, 
    inputFieldcodigo_Recuperacion: string,
    optionSelecttipo_Usuario: string,
    optionSelectEstado: string) => {
    try {
      const usuario: IUsuario = {
        id_Persona: inputFieldid_Persona,
        nombre_Usuario: inputFieldnombre_Usuario,
        contrasena_Usuario: inputFieldcontrasena_Usuario,
        codigo_Recuperacion: inputFieldcodigo_Recuperacion,
        id_Tipo_Usuario: parseInt(optionSelecttipo_Usuario),
        id_Estado: parseInt(optionSelectEstado),
        id_Usuario: parseInt(id as string),
      };

      await eliminarUsuario(usuario);
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
          description1={data && data.id_Persona}
          description2={data && data.nombre_Usuario}
          description3={data && data.contrasena_Usuario}
          description4={data && data.codigo_Recuperacion}
          option1={data && data.id_Tipo_Usuario}
          option2={data && data.id_Estado}
          
          onSubmitHandler={onSubmitHandler}
          formTitle="Eliminar Usuario"
        />
      </div>
    </LayoutContent>
  );
}

export default EliminarUsuario;