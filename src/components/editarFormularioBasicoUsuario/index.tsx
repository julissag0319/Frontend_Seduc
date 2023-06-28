import { useState, useEffect } from "react";
import FormUsuario from "../FormularioBasicoUsuario/FormUsuario";
import { IFormularioBasicoUsuario } from "@/shared/FormularioBasicoUsuario";


type EditarFormularioBasicoP = {
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  option1: string;
  option2: string;
  onSubmitHandler: (
    inputFieldid_Persona: string,
    inputFieldnombre_Usuario: string,
    inputFieldcontrasena_Usuario: string,
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectid_Estado: string)  => void;
 formTitle: string;
};

function EditarFormularioBasicoUsuario({
  description1, 
  description2, 
  description3, 
  description4,
  option1, 
  option2, 
  onSubmitHandler,
  formTitle,
}: EditarFormularioBasicoP) {
  const [form, setFormData] = useState<IFormularioBasicoUsuario>({
    inputFieldid_Persona: "",
    inputFieldnombre_Usuario: "",
    inputFieldcontrasena_Usuario: "",
    inputFieldcodigo_Recuperacion: "",
    optionSelectid_Tipo_Usuario: "",
    optionSelectid_Estado: "",
  });

  useEffect(() => {
    if (
      description1 && 
      description2 && 
      description3 && 
      description4 && 
            option1 &&
            option2 ) {
      setFormData({
        inputFieldid_Persona: description1,
        inputFieldnombre_Usuario: description2,
        inputFieldcontrasena_Usuario: description3,
        inputFieldcodigo_Recuperacion: description4,
        optionSelectid_Tipo_Usuario: option1,
        optionSelectid_Estado:option2,

      });
    }
  }, [description1, 
      description2, 
      description3, 
      description4,
      option1, 
      option2]);

  const onChangeHandler = (name: string, value: string) => {
    setFormData({ ...form, [name]: value });
  };

  const onSubmitForm = (
    inputFieldid_Persona: string,
    inputFieldnombre_Usuario: string,
    inputFieldcontrasena_Usuario: string,
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectid_Estado: string) => {
    onSubmitHandler(
      inputFieldid_Persona,
      inputFieldnombre_Usuario,
      inputFieldcontrasena_Usuario,
      inputFieldcodigo_Recuperacion,
      optionSelectid_Tipo_Usuario,
      optionSelectid_Estado);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-gray-100 rounded-md p-16 border border-black 200">
        <FormUsuario
          form={form}
          onChangeHandler={onChangeHandler}
          onSubmitForm={onSubmitForm}
          formTitle={formTitle}
        />
      </div>
    </div>
  );
}

export default EditarFormularioBasicoUsuario;