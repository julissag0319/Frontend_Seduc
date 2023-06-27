import * as Yup from "yup";

const isFieldRequired = "Obligatorio";
const minLenght = "Minimo de 3 caracteres";
const maxLenght = "Maximo de 50 caracteres";

export default Yup.object().shape({
    optionSelectid_Departamento: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    optionSelectid_Municipio: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    inputFielddescripcion_Escuela: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
    optionSelectid_Persona: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    optionSelectid_Red: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
    optionSelectid_Estado: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
});