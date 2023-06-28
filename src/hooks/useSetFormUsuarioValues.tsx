import { useFormik } from "formik";
import formValidarUsuario from "@/utilitarios/form-validar-Usuario";
import { IFormularioBasicoUsuario } from "@/shared/FormularioBasicoUsuario";

function useSetFormValues() {
    const form = useFormik({
        initialValues: {
            optionSelectid_Persona: "", 
            inputFieldnombre_Usuario: "", 
            inputFieldcontrasena_Usuario: "", 
            inputFieldcodigo_Recuperacion: "",
            optionSelectid_Tipo_Usuario: "",
            optionSelectid_Estado: "",
        },
        validationSchema: formValidarUsuario,
            onSubmit: (values: IFormularioBasicoUsuario) => {
            const {
                optionSelectid_Persona, 
                inputFieldnombre_Usuario, 
                inputFieldcontrasena_Usuario, 
                inputFieldcodigo_Recuperacion,
                optionSelectid_Tipo_Usuario,
                optionSelectid_Estado} = values;
                 
            submitFormHandler(
                optionSelectid_Persona, 
                inputFieldnombre_Usuario, 
                inputFieldcontrasena_Usuario, 
                inputFieldcodigo_Recuperacion,
                optionSelectid_Tipo_Usuario,
                optionSelectid_Estado);
            },
    });
    const submitFormHandler = (
    optionSelectid_Persona: string, 
    inputFieldnombre_Usuario: string, 
    inputFieldcontrasena_Usuario: string, 
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectEstado: string) => {
    return { 
        optionSelectid_Persona, 
        inputFieldnombre_Usuario, 
        inputFieldcontrasena_Usuario, 
        inputFieldcodigo_Recuperacion,
        optionSelectid_Tipo_Usuario,
        optionSelectEstado
        };
    };
    return { form };
}
export default useSetFormValues;