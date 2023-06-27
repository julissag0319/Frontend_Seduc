import EditarFormularioBasicoPersona from "@/components/editarFormularioBasicoPersona";
import LayoutContent from "@/components/layout";
import { IPersona } from "@/shared/PersonaBB";
import {
  useEditarPersonaMutation,
  useObtenerUnaPersonaQuery,
} from "@/store/service/Persona";
import { useNavigate, useParams } from "react-router-dom";

function EditarPersona() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnaPersonaQuery(id as string);
  const [editarPersona] = useEditarPersonaMutation();

  const onSubmitHandler = async (
    inputFieldnombre_Persona: string, 
    inputFieldapellido_Persona: string, 
    inputFieldidentidad_Persona: string, 
    inputFieldtelefono_Persona: string,
    inputFieldcorreo_Persona: string, 
    optionSelectid_Departamento: string,
    optionSelectid_Tipo_Cargo: string, 
    optionSelectid_Estado: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const persona: IPersona = {
        nombre_Persona: inputFieldnombre_Persona,
        apellido_Persona: inputFieldapellido_Persona,
        identidad_Persona: inputFieldidentidad_Persona,
        telefono_Persona: inputFieldtelefono_Persona,
        correo_Persona: inputFieldcorreo_Persona,
        id_Departamento: parseInt(optionSelectid_Departamento),
        id_Tipo_Cargo: parseInt(optionSelectid_Tipo_Cargo),
        id_Estado: parseInt(optionSelectid_Estado),
        id_Persona: parseInt(id as string),
      };
      await sleep(4000);
      await editarPersona(persona);
      Navigate("/listar-persona");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a): Estas en la Pantalla de Personas"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EditarFormularioBasicoPersona
          description1={data && data.nombre_Persona}
          description2={data && data.apellido_Persona}
          description3={data && data.identidad_Persona}
          description4={data && data.telefono_Persona}
          description5={data && data.correo_Persona}
          option1={data && data.id_Departamento}
          option2={data && data.id_Tipo_Cargo}
          option3={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Editar Persona"
        />
      </div>
    </LayoutContent>
  );
}

export default EditarPersona;