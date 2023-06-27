import * as Yup from "yup";

const isFieldRequired = "obligatorio";
const minLenght = "Minimo de 3 caracteres";
const maxLenght = "Maximo de 50 caracteres";

export default Yup.object().shape({
    inputFieldnombre_Persona: Yup.string().min(3, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldapellido_Persona: Yup.string().min(3, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldidentidad_Persona: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldtelefono_Persona: Yup.string().min(8, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldcorreo_Persona: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    optionSelectid_Departamento: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    optionSelectid_Tipo_Cargo: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    optionSelectid_Estado: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
});