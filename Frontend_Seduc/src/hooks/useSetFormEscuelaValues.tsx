import { useFormik } from "formik";
import formValidarEscuela from "@/utilitarios/form-validar-Escuela";
import { IFormularioBasicoEscuela } from "@/shared/FormularioBasicoEscuela";

function useSetFormValues() {
    const form = useFormik({
        initialValues: {
            optionSelectid_Departamento:"", 
            optionSelectid_Municipio: "", 
            inputFielddescripcion_Escuela: "", 
            optionSelectid_Persona: "",
            optionSelectid_Red: "", 
            optionSelectid_Estado: "",
        },
        validationSchema: formValidarEscuela,
            onSubmit: (values: IFormularioBasicoEscuela) => {
            const {
                optionSelectid_Departamento, 
                optionSelectid_Municipio, 
                inputFielddescripcion_Escuela, 
                optionSelectid_Persona,
                optionSelectid_Red, 
                optionSelectid_Estado} = values;
                 
            submitFormHandler(
                optionSelectid_Departamento, 
                optionSelectid_Municipio, 
                inputFielddescripcion_Escuela, 
                optionSelectid_Persona,
                optionSelectid_Red,  
                optionSelectid_Estado);
            },
    });
    const submitFormHandler = (
                optionSelectid_Departamento:string, 
                optionSelectid_Municipio:string, 
                inputFieldidescripcion_Escuela:string, 
                optionSelectid_Persona:string,
                optionSelectid_Red:string, 
                optionSelectid_Estado:string) => {
    return { 
        optionSelectid_Departamento, 
        optionSelectid_Municipio, 
        inputFieldidescripcion_Escuela, 
        optionSelectid_Persona,
        optionSelectid_Red, 
        optionSelectid_Estado 
        };
    };
    return { form };
}
export default useSetFormValues;