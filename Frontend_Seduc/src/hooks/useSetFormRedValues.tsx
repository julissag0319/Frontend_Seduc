import { useFormik } from "formik";
import formValidarRed from "@/utilitarios/form-validar-red";
import { IFormularioBasicoRed } from "@/shared/FormularioBasicoRed";

function useSetFormValues() {
    const form = useFormik({
        initialValues: {
            inputFieldcodigo_Red: "", 
            inputFielddescripcion_Red: "", 
            optionSelectid_Estado: "",
        },
        validationSchema: formValidarRed,
            onSubmit: (values: IFormularioBasicoRed) => {
            const {
                inputFieldcodigo_Red, 
                inputFielddescripcion_Red, 
                optionSelectid_Estado} = values;
                 
            submitFormHandler(
                inputFieldcodigo_Red, 
                inputFielddescripcion_Red, 
                optionSelectid_Estado);
            },
    });
    const submitFormHandler = (
        inputFieldcodigo_Red:string, 
        inputFielddescripcion_Red:string, 
        optionSelectid_Estado:string) => {
    return { 
        inputFieldcodigo_Red, 
        inputFielddescripcion_Red,
        optionSelectid_Estado 
        };
    };
    return { form };
}
export default useSetFormValues;