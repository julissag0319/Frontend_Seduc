import * as Yup from "yup";

const isFieldRequired = "Este Campo es Obligatorio";
const minLenght = "Minimo de 6 caracteres";
const maxLenght = "Maximo de 50 caracteres";

export default Yup.object().shape({
    inputFieldid_Persona: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldnombre_Usuario: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldcontrasena_Usuario: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFieldcodigo_Recuperacion: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    optionSelectid_Tipo_Usuario: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    optionSelectid_Estado: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
});