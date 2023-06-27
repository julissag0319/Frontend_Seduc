import { useState, useEffect } from "react";
import FormUsuario from "../FormularioBasicoUsuario/FormUsuario";
import { IFormularioBasicoUsuario } from "@/shared/FormularioBasicoUsuario";


type EditarFormularioBasicoP = {
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  option1: string;
  option2: string;
  option3: string;
  onSubmitHandler: (
    inputFieldNombreUsuario: string, 
    inputFieldContrasenaUsuario: string, 
    inputFieldCodigoRecuperacion: string, 
    optionSelectTipoUsuario: string,
    optionSelectEstado: string)  => void;
 formTitle: string;
};

function EditarFormularioBasicoUsuario({
  description1, 
  description2, 
  description3, 
  option1, 
  option2, 
  onSubmitHandler,
  formTitle,
}: EditarFormularioBasicoP) {
  const [form, setFormData] = useState<IFormularioBasicoUsuario>({
    inputFieldNombreUsuario: "", 
    inputFieldContrasenaUsuario: "",
    inputFieldCodigoRecuperacion: "",   
    optionSelectTipoUsuario: "",
    optionSelectEstado: "",
  });

  useEffect(() => {
    if (
      description1 && 
      description2 && 
      description3 && 
            option1 &&
            option2 ) {
      setFormData({
        inputFieldNombreUsuario: description1,  
        inputFieldContrasenaUsuario: description2, 
        inputFieldCodigoRecuperacion: description3,
        optionSelectTipoUsuario: option1,
        optionSelectEstado: option2,
      });
    }
  }, [description1, 
      description2, 
      description3, 
      option1, 
      option2]);

  const onChangeHandler = (name: string, value: string) => {
    setFormData({ ...form, [name]: value });
  };

  const onSubmitForm = (
    inputFieldNombreUsuario: string, 
    inputFieldContrasenaUsuario: string, 
    inputFieldCodigoRecuperacion: string, 
    optionSelectTipoUsuario: string,
    optionSelectEstado: string) => {
    onSubmitHandler(
      inputFieldNombreUsuario,  
      inputFieldContrasenaUsuario, 
      inputFieldCodigoRecuperacion,
      optionSelectTipoUsuario,
      optionSelectEstado);
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