import EditarFormularioBasicoEscuela from "@/components/editarFormularioBasicoEscuela";
import LayoutContent from "@/components/layout";
import { IEscuela } from "@/shared/EscuelaBB";
import {
  useEditarEscuelaMutation,
  useObtenerUnaEscuelaQuery,
} from "@/store/service/Escuela";
import { useNavigate, useParams } from "react-router-dom";

function EditarEscuela() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnaEscuelaQuery(id as string);
  const [editarEscuela] = useEditarEscuelaMutation();

  const onSubmitHandler = async (
    optionSelectid_Departamento: string,
    optionSelectid_Municipio: string, 
    inputFielddescripcion_Escuela: string, 
    optionSelectid_Persona: string, 
    optionSelectid_Red: string,
    optionSelectid_Estado: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const escuela: IEscuela = {
        id_Departamento: parseInt(optionSelectid_Departamento),
        id_Municipio: parseInt(optionSelectid_Municipio),
        descripcion_Escuela: inputFielddescripcion_Escuela,
        id_Persona: parseInt(optionSelectid_Persona),
        id_Red: parseInt(optionSelectid_Red),
        id_Estado: parseInt(optionSelectid_Estado),
        id_Escuela: parseInt(id as string),
      };
      await sleep(4000);
      await editarEscuela(escuela);
      Navigate("/listar-persona");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a): Estas en la Pantalla de Escuela"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EditarFormularioBasicoEscuela
         option1={data && data.id_Departamento}
         option2={data && data.id_Municipio}
          description1={data && data.descripcion_Escuela}
          option3={data && data.id_Persona}
          option4={data && data.id_Red}
          option5={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Editar Escuela"
        />
      </div>
    </LayoutContent>
  );
}

export default EditarEscuela;