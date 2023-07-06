import FormEscuela from "./FormEscuela";
import useSetFormValues from "@/hooks/useSetFormEscuelaValues";
//import { IFormularioBasicoEscuela } from "@/shared/basic_forms_employee.type";

type FormularioBasicoEscuelaP = {
  onSubmitHandler: (
    optionSelectid_Departamento: string,
    optionSelectid_Municipio: string, 
    inputFielddescripcion_Escuela: string, 
    optionSelectid_Persona: string, 
    optionSelectid_Red: string,
    optionSelectid_Estado: string) => void;
    formTitle: string;
};

function FormularioBasicoEscuela({
   onSubmitHandler, formTitle}:
    FormularioBasicoEscuelaP) {
  const { form } = useSetFormValues(); 

  const onSubmitForm = (
    optionSelectid_Departamento: string,
    optionSelectid_Municipio: string, 
    inputFielddescripcion_Escuela: string, 
    optionSelectid_Persona: string, 
    optionSelectid_Red: string,
    optionSelectid_Estado:string) => {
    onSubmitHandler(
        optionSelectid_Departamento,
        optionSelectid_Municipio,
        inputFielddescripcion_Escuela,
        optionSelectid_Persona,
        optionSelectid_Red,
        optionSelectid_Estado);
  };

  return (
    <div className="h-full flex justify-center items-center rounded-lg">
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

export default FormularioBasicoEscuela;