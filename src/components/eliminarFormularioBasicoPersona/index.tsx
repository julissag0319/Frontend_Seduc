import { useEffect} from "react";
import FormPersona from "../FormularioBasicoPersona/FormPersona";
import useSetFormValues from "@/hooks/useSetFormPersonaValues";
//import { IFormularioBasicoPersona } from "@/shared/FormularioBasicoPersona";
//import { Form } from "formik";

type EliminarFormularioBasicoPersonaP = {
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  option1: string;
  option2: string;
  option3: string;
  onSubmitHandler:() => void;
    formTitle: string;
};

function EliminarFormularioBasicoPersona({
  description1, 
  description2, 
  description3, 
  description4, 
  description5,
  option1, 
  option2, 
  option3, 
  onSubmitHandler,
  formTitle,}: 
  
  EliminarFormularioBasicoPersonaP) {
  const {form} =useSetFormValues();
 
  useEffect(() => {
    if (description1 && 
        description2 &&
        description3 && 
        description4 && 
        description5 && 
        option1 && 
        option2 &&
        option3
      ) 
    {
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
  }, 
    
  [description1, 
   description2, 
   description3, 
   description4, 
   description5, 
   option1, 
   option2, 
   option3
  ]);


  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-white rounded-md p-16 border border-color-fondo">
        <FormPersona
          form={form}
          onSubmitForm={onSubmitHandler}
          formTitle={formTitle}
          isRemove={true}
        />
      </div>
    </div>
  );
}

export default EliminarFormularioBasicoPersona;