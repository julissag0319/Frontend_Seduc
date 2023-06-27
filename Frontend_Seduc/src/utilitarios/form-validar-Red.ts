import * as Yup from "yup";

const isFieldRequired = "obligatorio";
const minLenght = " Minimo de 1 caracteres";
const maxLenght = "Maximo de 50 caracteres";

export default Yup.object().shape({
    inputFieldcodigo_Red: Yup.string().min(1, minLenght).max(50, maxLenght).required(isFieldRequired),
    inputFielddescripcion_Red: Yup.string().min(1, minLenght).max(50, maxLenght).required(isFieldRequired),
    optionSelectid_Estado: Yup.string().required(isFieldRequired).test("valid-option", "Opcion Invalida", (value) => {return value !== "Seleccione una Opcion";}),
});