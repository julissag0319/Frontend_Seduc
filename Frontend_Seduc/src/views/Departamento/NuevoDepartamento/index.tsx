import FormularioBasico from "@/components/formularioBasico";
import LayoutContent from "@/components/layout";
import { useNuevoDepartamentoMutation } from "@/store/service/Departamento";
import { useNavigate } from "react-router-dom";
import { IDepartamento } from "@/shared/DepartamentoBB";

function NuevoDepartamento() {
  const [NuevoDepartamento] = useNuevoDepartamentoMutation();
  const Navigate = useNavigate();

  const onSubmitHandler = async (inputField: string, optionSelect: string) => {
    try {
      const sleep = (ms: number) => 
      new Promise(r => setTimeout(r, ms));
      const departamento: IDepartamento = {
        descripcion_Departamento: inputField,
        id_Estado: parseInt(optionSelect),
      };
      await sleep(4000);
      await NuevoDepartamento(departamento);
      Navigate("/listar-departamento");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla : Departamento/Nuevo"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <FormularioBasico
          onSubmitHandler={onSubmitHandler}
          formTitle="NuevoDepartamento"
          labelInput="Departamento"
        />
      </div>
    </LayoutContent>
  );
}

export default NuevoDepartamento;
