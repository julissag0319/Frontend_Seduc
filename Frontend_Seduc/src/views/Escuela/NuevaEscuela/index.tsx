import FormularioBasicoEscuela from "@/components/FormularioBasicoEscuela";
import LayoutContent from "@/components/layout";
import { useNuevaEscuelaMutation } from "@/store/service/Escuela";
import { useNavigate } from "react-router-dom";
import { IEscuela } from "@/shared/EscuelaBB";

function NuevoEscuela() {
  const [nuevoEscuela] = useNuevaEscuelaMutation();
  const Navigate = useNavigate();

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
      };
      await sleep(4000);
      await nuevoEscuela(escuela);
      Navigate("/listar-escuela");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContent
      title="Bienvenido(a): Estas en la Pantalla de Escuelas"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-full">
        <FormularioBasicoEscuela
          onSubmitHandler={onSubmitHandler}
          formTitle="Agregar Nuevo Escuela"
        />
      </div>
    </LayoutContent>
  );
}

export default NuevoEscuela;
