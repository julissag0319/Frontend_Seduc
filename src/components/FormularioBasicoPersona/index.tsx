import FormPersona from "./FormPersona";
import useSetFormValues from "@/hooks/useSetFormPersonaValues";
//import { IFormularioBasicoPersona } from "@/shared/basic_forms_employee.type";

type FormularioBasicoPersonaP = {
  onSubmitHandler: (
    inputFieldnombre_Persona: string, 
    inputFieldapellido_Persona: string, 
    inputFieldidentidad_Persona: string, 
    inputFieldtelefono_Persona: string,
    inputFieldcorreo_Persona: string, 
    optionSelectid_Departamento: string,
    optionSelectid_Tipo_Cargo: string, 
    optionSelectid_Estado: string) => void;
    formTitle: string;
};

function FormularioBasicoPersona({ 
  onSubmitHandler, formTitle}: 
  FormularioBasicoPersonaP) {
  const { form } = useSetFormValues(); 

  const onSubmitForm = (
    inputFieldnombre_Persona:string,
      inputFieldapellido_Persona: string,
      inputFieldidentidad_Persona:string,
      inputFieldtelefono_Persona:string,
      inputFieldcorreo_Persona: string,
      optionSelectid_Departamento:string,
      optionSelectid_Tipo_Cargo: string,
      optionSelectid_Estado:string) => {
    onSubmitHandler(
      inputFieldnombre_Persona, 
      inputFieldapellido_Persona, 
      inputFieldidentidad_Persona, 
      inputFieldtelefono_Persona,
      inputFieldcorreo_Persona, 
      optionSelectid_Departamento,
      optionSelectid_Tipo_Cargo, 
      optionSelectid_Estado);
  };

  return (
    <div className="h-full flex justify-center items-center rounded-lg">
      <div className="max-w-3xl bg-white rounded-md p-16 border-4 border-color-fondo">
        <FormPersona
          form={form}
          onSubmitForm={onSubmitForm}
          formTitle={formTitle}
        />
      </div>
    </div>
  );
}

export default FormularioBasicoPersona;