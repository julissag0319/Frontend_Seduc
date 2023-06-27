import useSetFormValues from "@/hooks/useSetFormRedValues";
import FormRed from "./FormRed";
//import { IFormularioBasicoRed } from "@/shared/FormularioBasicoRed";
///
type FormularioBasicoRedP = {
  onSubmitHandler: (
    inputFieldcodigo_Red: string, 
    inputFielddescripcion_Red: string, 
    optionSelectid_Estado: string) => void;
    formTitle: string;
  };
///
function FormularioBasicoRed({ onSubmitHandler, formTitle}: FormularioBasicoRedP) {
  const {form} = useSetFormValues();
  const onSubmitForm = (
    inputFieldcodigo_Red: string, 
    inputFielddescripcion_Red: string, 
    optionSelectid_Estado: string) => {
    onSubmitHandler(
    inputFieldcodigo_Red, 
    inputFielddescripcion_Red, 
    optionSelectid_Estado);       
  };

  return (//cuadro
    <div className="h-full flex justify-center items-center rounded-lg">
      <div className="max-w-3xl bg-white rounded-md p-16 border border-blue 200">
        <FormRed
          form={form}
          onSubmitForm={onSubmitForm}
          formTitle={formTitle}
        />
      </div>
    </div>
  );
}

export default FormularioBasicoRed;
