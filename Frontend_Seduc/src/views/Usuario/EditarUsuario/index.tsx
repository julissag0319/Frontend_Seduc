import EditarFormularioBasicoUsuario from "@/components/editarFormularioBasicoUsuario";
import LayoutContent from "@/components/layout";
import { IUsuario } from "@/shared/UsuarioBB";
import {
  useEditarUsuarioMutation,
  useObtenerUnUsuarioQuery,
} from "@/store/service/Usuario";
import { useNavigate, useParams } from "react-router-dom";

function EditarUsuario() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnUsuarioQuery(id as string);
  const [editarUsuario] = useEditarUsuarioMutation();

  const onSubmitHandler = async (
    inputFieldid_Persona: string,
    inputFieldnombre_Usuario: string, 
    inputFielcontrasena_Usuario: string, 
    inputFieldCodigoRecuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectid_Estado: string) => {
    try {
      const usuario: IUsuario = {
        id_Persona: inputFieldid_Persona,
        nombre_Usuario: inputFieldnombre_Usuario,
        contrasena_Usuario: inputFielcontrasena_Usuario,
        codigo_Recuperacion: inputFieldCodigoRecuperacion,
        id_Tipo_Usuario: parseInt(optionSelectid_Tipo_Usuario),
        id_Estado: parseInt(optionSelectid_Estado),
        id_Usuario: parseInt(id as string),
      };

      await editarUsuario(usuario);
      Navigate("/listar-usuario");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
    title="Bienvenido estas en la Pantalla de: Editar Usuario"
    icon="Icono"
    iconRight="Otro icono">
    <div className="h-full">
      <EditarFormularioBasicoUsuario
        description1={data && data.id_Persona}
        description2={data && data.nombre_Usuario}
        description3={data && data.contrasena_Usuario}
        description4={data && data.codigo_Usuario}
        description5={data && data.id_Usuario}
        option1={data && data.id_Tipo_Usuario}
        option2={data && data.id_Estado}
        onSubmitHandler={onSubmitHandler}
        formTitle="Editar Usuario"
      />
    </div>
    </LayoutContent>
  );
}

export default EditarUsuario;