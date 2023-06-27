import * as Yup from "yup";

const isFieldRequired = "Obligatorio";
const minLenght = "Este Campo debe tener un Minimo de 6 caracteres";
const maxLenght = "Este Campo debe tener un Maximo de 50 caracteres";

export default Yup.object().shape({
  inputField: Yup.string().min(6, minLenght).max(50, maxLenght).required(isFieldRequired),
  optionSelect: Yup.string()
    .required(isFieldRequired)
    .test("valid-option", "Seleccionada una Opcion Invalida", (value) => {
      return value !== "Seleccione una Opcion";
    }),
});
