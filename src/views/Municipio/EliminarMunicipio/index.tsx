import EliminarFormularioBasico from "@/components/eliminarFormularioBasico";
import LayoutContent from "@/components/layout";
import {
  useEliminarMunicipioMutation,
  useObtenerUnMunicipioQuery,
} from "@/store/service/Municipio";
import { useNavigate, useParams } from "react-router-dom";

function EliminarMunicipio() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnMunicipioQuery(id as string);
  const [removeStore] = useEliminarMunicipioMutation();


  const onSubmitHandler = async () => {
    try {
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(4000);
      await removeStore(id as string);
      Navigate("/listar-municipio");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Municipio/Eliminar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EliminarFormularioBasico
          description={data && data.descripcion_Municipio}
          option={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Eliminar Municipio"
          labelInput="Municipio"
        />
      </div>
    </LayoutContent>
  );
}

export default EliminarMunicipio;
