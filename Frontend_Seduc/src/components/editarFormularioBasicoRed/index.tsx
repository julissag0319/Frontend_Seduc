import { useEffect } from "react";
import FormRed from "../FormularioBasicoRed/FormRed";
//import { IFormularioBasicoRed } from "@/shared/FormularioBasicoRed";
import useSetFormValues from "@/hooks/useSetFormRedValues";

type EditarFormularioBasicoRedP = {
  description1: string;
  description2: string;
  option1: string;
  onSubmitHandler: (
    inputFieldcodigo_Red: string,
    inputFielddescripcion_Red: string, 
    optionSelectid_Estado: string) => void; 
 formTitle: string;
};

function EditarFormularioBasicoRed({
  description1, 
  description2, 
  option1, 
  onSubmitHandler,
  formTitle,
}:

EditarFormularioBasicoRedP) {
  const {form} = useSetFormValues();
  useEffect(() => {
    if (
      description1 && 
      description2 && 
      option1 ) 
      {
      form.setValues({
        inputFieldcodigo_Red: description1 , 
        inputFielddescripcion_Red:description2, 
        optionSelectid_Estado:option1, 
      });
    }
  }, 
    [description1, 
      description2, 
      option1
    ]);

    const onSubmitForm = (
      inputFieldcodigo_Red: string,
      inputFielddescripcion_Red: string,
      optionSelectid_Estado: string) => {
      onSubmitHandler(
        inputFieldcodigo_Red, 
        inputFielddescripcion_Red , 
        optionSelectid_Estado );
    };


  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-white rounded-md p-16 border border-color-fondo">
        <FormRed
        form={form}
           onSubmitForm={onSubmitForm}
           formTitle={formTitle}
        />
      </div>
    </div>
  );
}

export default EditarFormularioBasicoRed;