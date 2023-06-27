import { useEffect } from "react";
import Form from "../formularioBasico/Form";
import useSetFormValues from "@/hooks/useSetFormValues";

type EditarFormularioBasicoP = {
  description: string;
  option: string;
  onSubmitHandler: (inputField: string, optionSelect: string) => void;
  formTitle: string;
  labelInput: string;
};

function EditarFormularioBasico({
  description,
  option,
  onSubmitHandler,
  formTitle,
  labelInput,
}: EditarFormularioBasicoP) {
  const {form} = useSetFormValues();

  useEffect(() => {
    if (description && option) {
      form.setValues({
        inputField: description,
        optionSelect: option,
      });
    }
  }, [description, option]);

  const onSubmitForm = (inputField: string, optionSelect: string) => {
    onSubmitHandler(inputField, optionSelect);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl bg-white rounded-md p-16 border-4 border-color-fondo">
        <Form
          form={form}
          onSubmitForm={onSubmitForm}
          formTitle={formTitle}
          labelInput={labelInput}
        />
      </div>
    </div>
  );
}

export default EditarFormularioBasico;
