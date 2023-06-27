import EditarFormularioBasico from "@/components/editarFormularioBasico";
import LayoutContent from "@/components/layout";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditarDepartamentoMutation,
  useObtenerUnDepartamentoQuery,
} from "@/store/service/Departamento";
import { IDepartamento } from "@/shared/DepartamentoBB";

function EditarDepartamento() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { data } = useObtenerUnDepartamentoQuery(id as string);

  const [EditarDepartamento] = useEditarDepartamentoMutation();

  const onSubmitHandler = async (inputField: string, optionSelect: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const departamento: IDepartamento = {
        descripcion_Departamento: inputField,
        id_Estado: parseInt(optionSelect),
        id_Departamento: parseInt(id as string),
      };
      await sleep(4000);
      await EditarDepartamento(departamento);
      Navigate("/listar-departamento");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Departamento/Editar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <EditarFormularioBasico
          description={data && data.descripcion_Departamento}
          option={data && data.id_Estado}
          onSubmitHandler={onSubmitHandler}
          formTitle="Editar Departamento"
          labelInput="Departamento"
        />
      </div>
    </LayoutContent>
  );
}

export default EditarDepartamento;
