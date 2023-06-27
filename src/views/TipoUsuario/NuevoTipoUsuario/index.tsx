import FormularioBasico from "@/components/formularioBasico";
import LayoutContent from "@/components/layout";
import { useNuevoTipoUsuarioMutation } from "@/store/service/TipoUsuario";
import { useNavigate } from "react-router-dom";
import { ITipoUsuario } from "@/shared/TipoUsuarioBB";

function NuevoTipoUsuario() {
  const [NuevoTipoUsuario] = useNuevoTipoUsuarioMutation();
  const Navigate = useNavigate();

  const onSubmitHandler = async (inputField: string, optionSelect: string) => {
    try {
      const TipoUsuario: ITipoUsuario = {
        descripcion_Tipo_Usuario: inputField,
        id_Estado: parseInt(optionSelect),
      };

      await NuevoTipoUsuario(TipoUsuario);
      Navigate("/listar-tipo_usuario");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenida estas en la Pantalla de: Tipo de Usuario/Nuevo"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <FormularioBasico
          onSubmitHandler={onSubmitHandler}
          formTitle="Nuevo Tipo Usuario"
          labelInput="Tipo Usuario"
        />
      </div>
    </LayoutContent>
  );
}

export default NuevoTipoUsuario;
