import Form from "./Form";
import useSetFormValues from "@/hooks/useSetFormValues";

type FormularioBasicoP = {
  onSubmitHandler: (inputField: string, optionSelect: string) => void;
  formTitle: string;
  labelInput: string;
};

function FormularioBasico({ onSubmitHandler, formTitle, labelInput }: FormularioBasicoP) {
  const { form } = useSetFormValues();

  const onSubmitForm = (inputField: string, optionSelect: string) => {
    onSubmitHandler(inputField, optionSelect);
  };

  return (
    <div className="h-full flex justify-center items-center rounded-lg">
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

export default FormularioBasico;

