import FormularioBasicoPersona from "@/components/FormularioBasicoPersona";
import LayoutContent from "@/components/layout";
import { useNuevaPersonaMutation } from "@/store/service/Persona";
import { useNavigate } from "react-router-dom";
import { IPersona } from "@/shared/PersonaBB";

function NuevoPersona() {
  const [nuevoPersona] = useNuevaPersonaMutation();
  const Navigate = useNavigate();

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
      };
      await sleep(4000);
      await nuevoPersona(persona);
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
        <FormularioBasicoPersona
          onSubmitHandler={onSubmitHandler}
          formTitle="Agregar Nuevo Persona"
        />
      </div>
    </LayoutContent>
  );
}

export default NuevoPersona;
