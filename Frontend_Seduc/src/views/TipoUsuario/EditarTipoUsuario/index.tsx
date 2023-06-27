import EditarFormularioBasico from "@/components/editarFormularioBasico";
import LayoutContent from "@/components/layout";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditarTipoUsuarioMutation,
  useObtenerUnTipoUsuarioQuery,
} from "@/store/service/TipoUsuario";
import { ITipoUsuario } from "@/shared/TipoUsuarioBB";

function EditarTipoUsuario() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnTipoUsuarioQuery(id as string);

  const [EditarTipoUsuario] = useEditarTipoUsuarioMutation();

  const onSubmitHandler = async (inputField: string, optionSelect: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const TipoUsuario: ITipoUsuario = {
        descripcion_Tipo_Usuario: inputField,
        id_Estado: parseInt(optionSelect),
        id_Tipo_Usuario: parseInt(id as string),
      };
      await sleep(4000);
      await EditarTipoUsuario(TipoUsuario);
      Navigate("/listar-tipo_usuario");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido (a) Estas en la Pantalla: Tipo Usuario/Editar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EditarFormularioBasico
          description={data && data.descripcion_Tipo_Usuario}
          option={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Editar Tipo Usuario"
          labelInput="Tipo Usuario"
        />
      </div>
    </LayoutContent>
  );
}

export default EditarTipoUsuario;
