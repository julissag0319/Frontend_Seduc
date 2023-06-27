import {useEffect } from "react";
import FormRed from "../FormularioBasicoRed/FormRed";
import useSetFormValues from "@/hooks/useSetFormRedValues";
//import { IFormularioBasicoRed } from "@/shared/FormularioBasicoRed";

type EliminarFormularioBasicoRedP = {
  description1: string;
  description2: string;
  option1: string;
  onSubmitHandler:() => void;
    formTitle: string;
};

function EliminarFormularioBasicoRed({
  description1, 
  description2, 
  option1,  
  onSubmitHandler,
  formTitle,}: 
  
  EliminarFormularioBasicoRedP) {
  const {form} = useSetFormValues();

  useEffect(() => {
    if (description1 && 
        description2 && 
        option1) 
    {form.setValues({
        inputFieldcodigo_Red: description1 , 
        inputFielddescripcion_Red:description2, 
        optionSelectid_Estado:option1, 
       });}
  }, 
    
  [description1, 
   description2, 
   option1
  ]);

  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-color-fondo rounded-md p-16 border border-color-fondo">
        <FormRed
          form={form}
          onSubmitForm={onSubmitHandler}
          formTitle={formTitle}
          isRemove={true}
        />
      </div>
    </div>
  );
}

export default EliminarFormularioBasicoRed;