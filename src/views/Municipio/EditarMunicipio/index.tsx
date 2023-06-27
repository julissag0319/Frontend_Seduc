import EditarFormularioBasico from "@/components/editarFormularioBasico";
import LayoutContent from "@/components/layout";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditarMunicipioMutation,
  useObtenerUnMunicipioQuery,
} from "@/store/service/Municipio";
import { IMunicipio } from "@/shared/MunicipioBB";

function EditarMunicipio() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnMunicipioQuery(id as string);

  const [EditarMunicipio] = useEditarMunicipioMutation();

  const onSubmitHandler = async (inputField: string, optionSelect: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const Municipio: IMunicipio = {
        descripcion_Municipio: inputField,
        id_Estado: parseInt(optionSelect),
        id_Municipio: parseInt(id as string),
      };
      await sleep(4000);
      await EditarMunicipio(Municipio);
      Navigate("/listar-municipio");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Municipio/Editar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EditarFormularioBasico
          description={data && data.descripcion_Municipio}
          option={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Editar Municipio"
          labelInput="Municipio"
        />
      </div>
    </LayoutContent>
  );
}

export default EditarMunicipio;
