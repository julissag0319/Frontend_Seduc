import FormUsuario from "./FormUsuario";
import useSetFormValues from "@/hooks/useSetFormUsuarioValues";
//import { IFormularioBasicoPersona } from "@/shared/basic_forms_employee.type";

type FormularioBasicoUsuarioP = {
  onSubmitHandler: (
    optionSelectid_Persona: string,
    inputFieldnombre_Usuario: string,
    inputFieldcontrasena_Usuario: string,
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectid_Estado: string
  ) => void;
  formTitle: string;
};

function FormularioBasicoUsuario({
  onSubmitHandler,
  formTitle,
}: FormularioBasicoUsuarioP) {
  const { form } = useSetFormValues();

  const onSubmitForm = (
    optionSelectid_Persona: string,
    inputFieldnombre_Usuario: string,
    inputFieldcontrasena_Usuario: string,
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectid_Estado: string ) => {
    onSubmitHandler(
      optionSelectid_Persona,
      inputFieldnombre_Usuario,
      inputFieldcontrasena_Usuario,
      inputFieldcodigo_Recuperacion,
      optionSelectid_Tipo_Usuario,
      optionSelectid_Estado
    );
  };

  return (
    <div className="h-full flex justify-center items-center rounded-lg">
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

export default FormularioBasicoUsuario;
