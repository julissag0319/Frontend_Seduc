import EliminarFormularioBasicoPersona from "@/components/eliminarFormularioBasicoPersona";
import LayoutContent from "@/components/layout";
import {
    useEliminarPersonaMutation,
    useObtenerUnaPersonaQuery,
} from "@/store/service/Persona";
import { useNavigate, useParams } from "react-router-dom";

function EliminarPersona() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnaPersonaQuery(id as string);
  const [eliminarPersona] = useEliminarPersonaMutation();

  const onSubmitHandler = async () => {
    try {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(2000);
      await eliminarPersona(id as string);
      Navigate("/listar-persona");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LayoutContent
      title="Bienvenido (a) Estas en la Pantalla Eliminar Persona"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EliminarFormularioBasicoPersona
    description1={data && data.nombre_Persona}
    description2={data && data.apellido_Persona}
    description3={data && data.identidad_Persona}
    description4={data && data.telefono_Persona}
    description5={data && data.correo_Persona}
    option1={data && data.id_Departamento}
    option2={data && data.id_Tipo_Cargo}
    option3={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Eliminar Persona"
        />
      </div>
    </LayoutContent>
  );
}

export default EliminarPersona;