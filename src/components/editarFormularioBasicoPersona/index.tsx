import { useEffect } from "react";
import FormPersona from "../FormularioBasicoPersona/FormPersona";
import useSetFormValues from "@/hooks/useSetFormPersonaValues";
//import { IFormularioBasicoPersona } from "@/shared/basic_forms_employee.type";

type EditarFormularioBasicoPersonaP = {
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  option1: string;
  option2: string;
  option3: string;
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

function EditarFormularioBasicoPersona({
  description1, 
  description2, 
  description3, 
  description4, 
  description5,
  option1, 
  option2, 
  option3, 
  onSubmitHandler,
  formTitle,
}: EditarFormularioBasicoPersonaP) {
  const {form} = useSetFormValues();
  useEffect(() => {
    if (description1 && 
        description2 && 
        description3 && 
        description4 && 
        description5 && 
            option1 && 
            option2 && 
            option3) {
      form.setValues({
        inputFieldnombre_Persona: description1,
        inputFieldapellido_Persona: description2,
        inputFieldidentidad_Persona: description3,
        inputFieldtelefono_Persona:description4,
        inputFieldcorreo_Persona: description5,
        optionSelectid_Departamento:option1,
        optionSelectid_Tipo_Cargo: option2,
        optionSelectid_Estado:option3,
      });
    }
  },[description1, 
    description2, 
    description3, 
    description4,
    description5, 
    option1, 
    option2, 
    option3]);

  const onSubmitForm = (
    inputFieldnombre_Persona: string,
    inputFieldapellido_Persona: string,
    inputFieldidentidad_Persona: string,
    inputFieldtelefono_Persona:string,
    inputFieldcorreo_Persona: string,
    optionSelectid_Departamento:string,
    optionSelectid_Tipo_Cargo:  string,
    optionSelectid_Estado: string) => {
    onSubmitHandler(
      inputFieldnombre_Persona, 
      inputFieldapellido_Persona, 
      inputFieldidentidad_Persona, 
      inputFieldtelefono_Persona,
      inputFieldcorreo_Persona, 
      optionSelectid_Departamento,
      optionSelectid_Tipo_Cargo, 
      optionSelectid_Estado );
  };

  return (
    <div className="h-full flex justify-center items-center">
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

export default EditarFormularioBasicoPersona;