import { useEffect } from "react";
import FormEscuela from "../FormularioBasicoEscuela/FormEscuela";
import useSetFormValues from "@/hooks/useSetFormEscuelaValues";
//import { IFormularioBasicoPersona } from "@/shared/basic_forms_employee.type";

type EditarFormularioBasicoEscuelaP = {
  option1: string;
  option2: string;
  description1: string;
  option3: string;
  option4: string;
  option5: string;
  onSubmitHandler: (
    optionSelectid_Departamento: string,
    optionSelectid_Municipio: string, 
    inputFielddescripcion_Escuela: string, 
    optionSelectid_Persona: string, 
    optionSelectid_Red: string,
    optionSelectid_Estado: string) => void;
  formTitle: string;
};

function EditarFormularioBasicoEscuela({
  option1, 
  option2, 
  description1, 
  option3, 
  option4, 
  option5,
  onSubmitHandler,
  formTitle,
}: EditarFormularioBasicoEscuelaP) {
  const {form} = useSetFormValues();
  useEffect(() => {
    if (
        option1 && 
        option2 && 
        description1 && 
        option3 && 
        option4 && 
        option5) {
      form.setValues({
        optionSelectid_Departamento:option1,
        optionSelectid_Municipio: option2,
        inputFielddescripcion_Escuela: description1,
        optionSelectid_Persona:option3,
        optionSelectid_Red:option4,
        optionSelectid_Estado:option5,
      });
    }
  },[
    option1, 
    option2,
    description1,  
    option3, 
    option4, 
    option5]);

  const onSubmitForm = (
    optionSelectid_Departamento: string,
    optionSelectid_Municipio: string, 
    inputFielddescripcion_Escuela: string, 
    optionSelectid_Persona: string, 
    optionSelectid_Red: string,
    optionSelectid_Estado: string) => {
    onSubmitHandler(
    optionSelectid_Departamento,
    optionSelectid_Municipio, 
    inputFielddescripcion_Escuela, 
    optionSelectid_Persona, 
    optionSelectid_Red,
    optionSelectid_Estado );
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-white rounded-md p-16 border-4 border-color-fondo">
        <FormEscuela
          form={form}
          onSubmitForm={onSubmitForm}
          formTitle={formTitle}
        />
      </div>
    </div>
  );
}

export default EditarFormularioBasicoEscuela;