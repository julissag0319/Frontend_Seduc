import FormularioBasicoRed from "@/components/FormularioBasicoRed";
import LayoutContent from "@/components/layout";
import { useNuevaRedMutation } from "@/store/service/Red";
import { useNavigate } from "react-router-dom";
import { IRed } from "@/shared/RedBB";

function NuevaRed() {
  const [NuevaRed] = useNuevaRedMutation();
  const Navigate = useNavigate();

  const onSubmitHandler = async (
    inputFieldcodigo_Red: string, 
    inputFielddescripcion_Red: string, 
    optionSelectid_Estado: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const red: IRed = {
        codigo_Red: inputFieldcodigo_Red,
        descripcion_Red: inputFielddescripcion_Red,
        id_Estado: parseInt(optionSelectid_Estado),
      };
      await sleep(4000);
      await NuevaRed(red);
      Navigate("/listar-red");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Red, Agregar Nueva Red"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <FormularioBasicoRed
          onSubmitHandler={onSubmitHandler}
          formTitle="Nueva Red"
        />
      </div>
    </LayoutContent>
  );
}

export default NuevaRed;
