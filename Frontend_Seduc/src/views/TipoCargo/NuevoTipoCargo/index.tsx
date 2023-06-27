import FormularioBasico from "@/components/formularioBasico";
import LayoutContent from "@/components/layout";
import { useNuevoTipoCargoMutation } from "@/store/service/TipoCargo";
import { useNavigate } from "react-router-dom";
import { ITipoCargo } from "@/shared/TipoCargoBB";

function NuevoTipoCargo() {
  const [NuevoTipoCargo] = useNuevoTipoCargoMutation();
  const Navigate = useNavigate();

  const onSubmitHandler = async (inputField: string, optionSelect: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const TipoCargo: ITipoCargo = {
        descripcion_Tipo_Cargo: inputField,
        id_Estado: parseInt(optionSelect),
      };
      await sleep(4000);
      await NuevoTipoCargo(TipoCargo);
      Navigate("/listar-tipo_cargo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenida estas en la Pantalla de: Tipo de Cargo/Nuevo"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <FormularioBasico
          onSubmitHandler={onSubmitHandler}
          formTitle="Nuevo Tipo Cargo"
          labelInput="Tipo Cargo"
        />
      </div>
    </LayoutContent>
  );
}

export default NuevoTipoCargo;
