import FormularioBasico from "@/components/formularioBasico";
import LayoutContent from "@/components/layout";
import { useNuevoMunicipioMutation } from "@/store/service/Municipio";
import { useNavigate } from "react-router-dom";
import { IMunicipio } from "@/shared/MunicipioBB";

function NuevoMunicipio() {
  const [NuevoMunicipio] = useNuevoMunicipioMutation();
  const Navigate = useNavigate();

  const onSubmitHandler = async (inputField: string, optionSelect: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const Municipio: IMunicipio = {
        descripcion_Municipio: inputField,
        id_Estado: parseInt(optionSelect),
      };
      await sleep(4000);
      await NuevoMunicipio(Municipio);
      Navigate("/listar-municipio");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a) estas en la pantalla: Municipio/Nuevo"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <FormularioBasico
          onSubmitHandler={onSubmitHandler}
          formTitle="NuevoMunicipio"
          labelInput="Municipio"
        />
      </div>
    </LayoutContent>
  );
}

export default NuevoMunicipio;
