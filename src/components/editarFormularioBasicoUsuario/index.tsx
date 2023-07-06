import { useEffect } from "react";
import FormUsuario from "../FormularioBasicoUsuario/FormUsuario";
//import { IFormularioBasicoUsuario } from "@/shared/FormularioBasicoUsuario";
import useSetFormValues from "@/hooks/useSetFormUsuarioValues";

type EditarFormularioBasicoUsuarioP = {
  option1: string;
  description1: string;
  description2: string;
  description3: string;
  option2: string;
  option3: string;
  onSubmitHandler: (
    optionSelectid_Persona: string, 
    inputFieldnombre_Usuario: string, 
    inputFieldcontrasena_Usuario: string, 
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectid_Estado: string) => void;
    formTitle: string;
};

function EditarFormularioBasicoUsuario({
  option1,
  description1,
  description2,
  description3,
  option2,
  option3,
  onSubmitHandler,
  formTitle,
}: EditarFormularioBasicoUsuarioP) {
  const {form} = useSetFormValues();
  useEffect(() => {
    if (
      option1&&
       description1 && 
       description2 &&
       description3 && 
       option2 && 
       option3  ) {
      form.setValues({
        optionSelectid_Persona: option1, 
        inputFieldnombre_Usuario: description1, 
        inputFieldcontrasena_Usuario: description2, 
        inputFieldcodigo_Recuperacion: description3,
        optionSelectid_Tipo_Usuario: option2,
        optionSelectid_Estado: option3,

      });
    }
  }, [option1,
    description1 , 
    description2 ,
    description3 , 
    option2 , 
    option3 ]);

  const onSubmitForm = (
    optionSelectid_Persona: string, 
    inputFieldnombre_Usuario: string, 
    inputFieldcontrasena_Usuario: string, 
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectid_Estado: string) => {
    onSubmitHandler(
      optionSelectid_Persona, 
      inputFieldnombre_Usuario, 
      inputFieldcontrasena_Usuario, 
      inputFieldcodigo_Recuperacion,
      optionSelectid_Tipo_Usuario,
      optionSelectid_Estado);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-white rounded-md p-16 border-4 border-color-fondo">
        <FormUsuario
          form={form}
          onSubmitForm={onSubmitForm}
          formTitle={formTitle}
        />
      </div>
    </div>
  );
}

export default EditarFormularioBasicoUsuario;