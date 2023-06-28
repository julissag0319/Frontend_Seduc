import FormularioBasicoUsuario from "@/components/FormularioBasicoUsuario";
import LayoutContent from "@/components/layout";
import { useNuevoUsuarioMutation } from "@/store/service/Usuario";
import { useNavigate } from "react-router-dom";
import { IUsuario} from "@/shared/UsuarioBB";

function NuevoUsuario() {
  const [nuevoUsuario] = useNuevoUsuarioMutation();
  const Navigate = useNavigate();

  const onSubmitHandler = async (
    optionSelectid_Persona: string,
    inputFieldnombre_Usuario: string, 
    inputFieldcontrasena_Usuario: string, 
    inputFieldcodigo_Recuperacion: string,
    optionSelecttipo_Usuario: string,
    optionSelectEstado: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const usuario: IUsuario = {
        id_Persona: parseInt(optionSelectid_Persona),
        nombre_Usuario: inputFieldnombre_Usuario,
        contrasena_Usuario: inputFieldcontrasena_Usuario,
        codigo_Recuperacion: inputFieldcodigo_Recuperacion,
        id_Tipo_Usuario: parseInt(optionSelecttipo_Usuario),
        id_Estado: parseInt(optionSelectEstado),
      };
      await sleep(4000);
      await nuevoUsuario(usuario);
      Navigate("/listar-usuario");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido estas en la Pantalla de: Usuarios/Nuevo"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <FormularioBasicoUsuario
          onSubmitHandler={onSubmitHandler}
          formTitle="Agregar Nuevo Usuario"
        />
      </div>
    </LayoutContent>
  );
}

export default NuevoUsuario;
