import { useFormik } from "formik";
import formValidarPersona from "@/utilitarios/form-validar-persona";
import { IFormularioBasicoPersona } from "@/shared/FormularioBasicoPersona";

function useSetFormValues() {
    const form = useFormik({
        initialValues: {
            inputFieldnombre_Persona: "", 
            inputFieldapellido_Persona: "", 
            inputFieldidentidad_Persona: "", 
            inputFieldtelefono_Persona: "",
            inputFieldcorreo_Persona: "", 
            optionSelectid_Departamento: "",
            optionSelectid_Tipo_Cargo: "", 
            optionSelectid_Estado: "",
        },
        validationSchema: formValidarPersona,
            onSubmit: (values: IFormularioBasicoPersona) => {
            const {
                inputFieldnombre_Persona, 
                inputFieldapellido_Persona, 
                inputFieldidentidad_Persona, 
                inputFieldtelefono_Persona,
                inputFieldcorreo_Persona, 
                optionSelectid_Departamento,
                optionSelectid_Tipo_Cargo, 
                optionSelectid_Estado} = values;
                 
            submitFormHandler(
                inputFieldnombre_Persona, 
                inputFieldapellido_Persona, 
                inputFieldidentidad_Persona, 
                inputFieldtelefono_Persona,
                inputFieldcorreo_Persona, 
                optionSelectid_Departamento,
                optionSelectid_Tipo_Cargo, 
                optionSelectid_Estado);
            },
    });
    const submitFormHandler = (
        inputFieldnombre_Persona:string,
        inputFieldapellido_Persona: string,
        inputFieldidentidad_Persona:string,
        inputFieldtelefono_Persona:string,
        inputFieldcorreo_Persona: string,
        optionSelectid_Departamento:string,
        optionSelectid_Tipo_Cargo: string,
        optionSelectid_Estado:string) => {
    return { 
        inputFieldnombre_Persona, 
        inputFieldapellido_Persona, 
        inputFieldidentidad_Persona, 
        inputFieldtelefono_Persona,
        inputFieldcorreo_Persona, 
        optionSelectid_Departamento,
        optionSelectid_Tipo_Cargo, 
        optionSelectid_Estado 
        };
    };
    return { form };
}
export default useSetFormValues;