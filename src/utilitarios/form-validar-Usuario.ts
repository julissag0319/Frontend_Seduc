import * as Yup from "yup";

const isFieldRequired = "Obligatorio";
const minLenght = "Minimo de 6 caracteres";
const maxLenght = "Maximo de 50 caracteres";

export default Yup.object().shape({
    optionSelectid_Persona: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    inputFieldnombre_Usuario: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldcontrasena_Usuario: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldcodigo_Recuperacion: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    optionSelectid_Tipo_Usuario: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    optionSelectid_Estado: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
});