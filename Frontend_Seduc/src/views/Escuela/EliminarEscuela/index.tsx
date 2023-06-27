import EliminarFormularioBasicoEscuela from "@/components/eliminarFormularioBasicoEscuela";
import LayoutContent from "@/components/layout";
import {
    useEliminarEscuelaMutation,
    useObtenerUnaEscuelaQuery,
} from "@/store/service/Escuela";
import { useNavigate, useParams } from "react-router-dom";

function EliminarEscuela() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnaEscuelaQuery(id as string);
  const [eliminarEscuela] = useEliminarEscuelaMutation();

  const onSubmitHandler = async () => {
    try {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(2000);
      await eliminarEscuela(id as string);
      Navigate("/listar-escuela");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla Eliminar Escuela"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EliminarFormularioBasicoEscuela
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

export default EliminarEscuela;