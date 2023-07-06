import { useEffect} from "react";
import FormUsuario from "../FormularioBasicoUsuario/FormUsuario";
import useSetFormValues from "@/hooks/useSetFormUsuarioValues";
//import { IFormularioBasicoPersona } from "@/shared/FormularioBasicoPersona";
//import { Form } from "formik";




type EliminarFormularioBasicoUsuarioP = {
  option1: string;
  description1: string;
  description2: string;
  description3: string;
  option2: string;
  option3: string;
  onSubmitHandler:() => void;

 formTitle: string;
};

function EliminarFormularioBasicoUsuario({
  option1,
  description1,
  description2,
  description3,
  option2,
  option3,
  onSubmitHandler,
  formTitle,}: 
  
  EliminarFormularioBasicoUsuarioP) {
  const {form}= useSetFormValues();

  useEffect(() => {
    if (
       option1&&
        description1 && 
        description2 &&
        description3 && 
        option2 && 
        option3 
      ) 
    {
      form.setValues({
        optionSelectid_Persona: option1, 
        inputFieldnombre_Usuario: description1, 
        inputFieldcontrasena_Usuario: description2, 
        inputFieldcodigo_Recuperacion: description3,
        optionSelectid_Tipo_Usuario: option2,
        optionSelectid_Estado: option3,

       });
    }
  }, 
    
  [ option1,
    description1 , 
    description2 ,
    description3 , 
    option2 , 
    option3 
  ]);

  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-white-100 rounded-md p-16 border border-color-fondo">
        <FormUsuario
          form={form}
          onSubmitForm={onSubmitHandler}
          formTitle={formTitle}
          isRemove={true}
        />
      </div>
    </div>
  );
}

export default EliminarFormularioBasicoUsuario;