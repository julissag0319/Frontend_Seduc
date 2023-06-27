import { useEffect } from "react";
import Form from "../formularioBasico/Form";
import useSetFormValues from "@/hooks/useSetFormValues";

type EliminarFormularioBasicoP = {
  description: string;
  option: string;
  onSubmitHandler: () => void;
  formTitle: string;
  labelInput: string;
};

function EliminarFormularioBasico({
  description,
  option,
  onSubmitHandler,
  formTitle,
  labelInput,
}: EliminarFormularioBasicoP) {
  const {form} = useSetFormValues();

  useEffect(() => {
    if (description && option) {
      form.setValues({
        inputField: description,
        optionSelect: option,
      });
    }
  }, [description, option]);

  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-white rounded-md p-16 border-4 border-color-fondo">
        <Form
          form={form}
          onSubmitForm={onSubmitHandler}
          formTitle={formTitle}
          labelInput={labelInput}
          isRemove={true}
        />
      </div>
    </div>
  );
}

export default EliminarFormularioBasico;