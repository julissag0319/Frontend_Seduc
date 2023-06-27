import EditarFormularioBasicoRed from "@/components/editarFormularioBasicoRed";
import LayoutContent from "@/components/layout";
import { IRed } from "@/shared/RedBB";
import {
  useEditarRedMutation,
  useObtenerUnaRedQuery,
} from "@/store/service/Red";
import { useNavigate, useParams } from "react-router-dom";

function EditarRed() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnaRedQuery(id as string);
  const [editarRed] = useEditarRedMutation();

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
        id_Red: parseInt(id as string),
      };
      await sleep(4000);
      await editarRed(red);
      Navigate("/listar-red");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a): Estas en la pantalla de Red"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EditarFormularioBasicoRed
          description1={data && data.codigo_Red}
          description2={data && data.descripcion_Red}
          option1={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Editar Red"
        />
      </div>
    </LayoutContent>
  );
}

export default EditarRed;