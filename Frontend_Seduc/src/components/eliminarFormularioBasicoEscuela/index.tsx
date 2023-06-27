import { useEffect} from "react";
import FormEscuela from "../FormularioBasicoEscuela/FormEscuela";
import useSetFormValues from "@/hooks/useSetFormEscuelaValues";
//import { IFormularioBasicoEscuela } from "@/shared/FormularioBasicoEscuela";
//import { Form } from "formik";

type EliminarFormularioBasicoEscuelaP = {
  option1: string;
  option2: string;
  description1: string;
  option3: string;
  option4: string;
  option5: string;
  onSubmitHandler:() => void;
    formTitle: string;
};

function EliminarFormularioBasicoEscuela({
  option1, 
  option2,
  description1, 
  option3, 
  option4,
  option5,
  onSubmitHandler,
  formTitle,}: 
  
  EliminarFormularioBasicoEscuelaP) {
  const {form} =useSetFormValues();
 
  useEffect(() => {
    if (
        option1 && 
        option2 &&
        description1 &&  
        option3 && 
        option4 &&
        option5
      ) 
    {
     form.setValues({
        optionSelectid_Departamento: option1,
        optionSelectid_Municipio: option2,
        inputFielddescripcion_Escuela:option1,
        optionSelectid_Persona: option3,
        optionSelectid_Red:option4,
        optionSelectid_Estado:option5,
       });
    }
  }, 
    
  [
  option1, 
  option2,
  description1, 
  option3, 
  option4,
  option5,
  ]);


  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-white rounded-md p-16 border border-color-fondo">
        <FormEscuela
          form={form}
          onSubmitForm={onSubmitHandler}
          formTitle={formTitle}
          isRemove={true}
        />
      </div>
    </div>
  );
}

export default EliminarFormularioBasicoEscuela;