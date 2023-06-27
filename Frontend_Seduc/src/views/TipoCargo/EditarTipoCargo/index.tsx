import EditarFormularioBasico from "@/components/editarFormularioBasico";
import LayoutContent from "@/components/layout";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditarTipoCargoMutation,
  useObtenerUnTipoCargoQuery,
} from "@/store/service/TipoCargo";
import { ITipoCargo } from "@/shared/TipoCargoBB";

function EditarTipoCargo() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnTipoCargoQuery(id as string);

  const [EditarTipoCargo] = useEditarTipoCargoMutation();

  const onSubmitHandler = async (inputField: string, optionSelect: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const TipoCargo: ITipoCargo = {
        descripcion_Tipo_Cargo: inputField,
        id_Estado: parseInt(optionSelect),
        id_Tipo_Cargo: parseInt(id as string),
      };
      await sleep(4000);
      await EditarTipoCargo(TipoCargo);
      Navigate("/listar-tipo_cargo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido (a) Estas en la Pantalla: Tipo Cargo/Editar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EditarFormularioBasico
          description={data && data.descripcion_Tipo_Cargo}
          option={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Editar Tipo Cargo"
          labelInput="Tipo Cargo"
        />
      </div>
    </LayoutContent>
  );
}

export default EditarTipoCargo;
