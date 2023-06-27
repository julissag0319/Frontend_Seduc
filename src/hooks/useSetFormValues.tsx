import { useFormik } from "formik";
import formValidar from "@/utilitarios/form-validar";
import { IFormularioBasico } from "@/shared/FormularioBasicoBB";

function useSetFormValues() {
  const form = useFormik({
    initialValues: {
      inputField: "",
      optionSelect: "",
    },
    validationSchema: formValidar,
    onSubmit: (values: IFormularioBasico) => {
      const { inputField, optionSelect } = values;
      submitFormHandler(inputField, optionSelect);
    },
  });
  const submitFormHandler = (inputField: string, optionSelect: string) => {
    return { inputField, optionSelect };
  };
  return { form };
}

export default useSetFormValues;