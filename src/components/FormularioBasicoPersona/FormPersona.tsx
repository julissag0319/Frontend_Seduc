import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormEvent, useEffect } from "react";
import { FormikState, FormikHandlers } from "formik";
import { IFormularioBasicoPersona } from "@/shared/FormularioBasicoPersona";
import ErrorMessage from "@/components/ErrorMessage";
import BackButton from "@/shared/BackButton";
import { useState } from "react";
import { apiClient } from "@/utilitarios/axios";

type FormPersonaP = {
  form: FormikState<IFormularioBasicoPersona> & FormikHandlers;
  onSubmitForm: (
    inputFieldnombre_Persona: string,
    inputFieldapellido_Persona: string,
    inputFieldidentidad_Persona: string,
    inputFieldtelefono_Persona: string,
    inputFieldcorreo_Persona: string,
    optionSelectid_Departamento: string,
    optionSelectid_Tipo_Cargo: string,
    optionSelectid_Estado: string
  ) => void;
  formTitle: string;
  isRemove?: boolean;
};

function FormPersona({
  form,
  onSubmitForm,
  formTitle,
  isRemove,
}: FormPersonaP) {
  const flexInputContainer = `flex-col items-center`;
  const flexLabelInputs = `flex items-center mb-4 space-x-10`;
  const labelStyle = `block font-medium mb-2 font-bold`;
  const notamjs = () => toast.success("correctamente");
  const {
    values: {
      inputFieldnombre_Persona,
      inputFieldapellido_Persona,
      inputFieldidentidad_Persona,
      inputFieldtelefono_Persona,
      inputFieldcorreo_Persona,
      optionSelectid_Departamento,
      optionSelectid_Tipo_Cargo,
      optionSelectid_Estado,
    },
    touched,
    errors,
    handleChange,
    handleBlur,
  } = form;

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmitForm(
      inputFieldnombre_Persona,
      inputFieldapellido_Persona,
      inputFieldidentidad_Persona,
      inputFieldtelefono_Persona,
      inputFieldcorreo_Persona,
      optionSelectid_Departamento,
      optionSelectid_Tipo_Cargo,
      optionSelectid_Estado
    );
  };
  const [departamento, setdepartamento] = useState([
    { id_Departamento: 1, descripcion_Departamento: "Atlantidad" },
  ]);
  useEffect(() => {
    apiClient.get("/departamento").then(({ data }) => {
      setdepartamento(data);
    });
    apiClient.get("/tipo_cargo").then(({ data }) => {
      setTipo_Cargo(data); //actualizar la variable del depart al valor que retorna la api
    });
  }, []); //solo ejecutar una vez

  ////////////////////////////////////////////////////////////////
  const [tipo_cargo, setTipo_Cargo] = useState([
    { id_Tipo_Cargo: 1, descripcion_Tipo_Cargo: "Supervision" },
  ]);

  return (
    <>
      <h2 className="pb-7 text-center font-bold text-xl">{formTitle}</h2>
      
      <form
        onSubmit={handleSubmitForm}
        className="p-4 border border-color-fondo rounded-lg"
      >
        {/*Text Box de Nombre Persona*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Nombre Persona</label>
            <input
              value={inputFieldnombre_Persona}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFieldnombre_Persona"
              className="input-styles"
              placeholder="Nombre Persona"
              disabled={isRemove ? true : false}
            />
          </div>
          {touched.inputFieldnombre_Persona &&
            errors.inputFieldnombre_Persona && (
              <ErrorMessage message={errors.inputFieldnombre_Persona} />
            )}
        </div>

        {/*Text Box de Apellido Persona*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Apellido Persona</label>
            <input
              value={inputFieldapellido_Persona}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFieldapellido_Persona"
              className="input-styles"
              placeholder="Apellido Persona"
              disabled={isRemove ? true : false}
            />
          </div>
          {touched.inputFieldapellido_Persona &&
            errors.inputFieldapellido_Persona && (
              <ErrorMessage message={errors.inputFieldapellido_Persona} />
            )}
        </div>

        {/*Text Box de Identidad Persona*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Identidad Persona</label>
            <input
              value={inputFieldidentidad_Persona}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFieldidentidad_Persona"
              className="input-styles"
              placeholder="Identidad Persona"
              disabled={isRemove ? true : false}
            />
          </div>
          {touched.inputFieldidentidad_Persona &&
            errors.inputFieldidentidad_Persona && (
              <ErrorMessage message={errors.inputFieldidentidad_Persona} />
            )}
        </div>

        {/*Text Box de Telefono Persona*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Telefono de La Persona</label>
            <input
              value={inputFieldtelefono_Persona}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFieldtelefono_Persona"
              className="input-styles"
              placeholder="Telefono Persona"
              disabled={isRemove ? true : false}
            />
          </div>
          {touched.inputFieldtelefono_Persona &&
            errors.inputFieldtelefono_Persona && (
              <ErrorMessage message={errors.inputFieldtelefono_Persona} />
            )}
        </div>

        {/*Text Box de Correo Persona*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Correo Persona</label>
            <input
              value={inputFieldcorreo_Persona}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFieldcorreo_Persona"
              className="input-styles"
              placeholder="Correo Persona"
              disabled={isRemove ? true : false}
            />
          </div>
          {touched.inputFieldcorreo_Persona &&
            errors.inputFieldcorreo_Persona && (
              <ErrorMessage message={errors.inputFieldcorreo_Persona} />
            )}
        </div>

        {/*Option Select de id Departamento*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Id Departamento</label>
            <select
              value={optionSelectid_Departamento}
              onChange={handleChange}
              //defaultValue={"1"}

              name="optionSelectid_Departamento"
              className="input-styles"
              disabled={isRemove ? true : false}
            >
              <option>Seleccione una Opcion</option>
              {departamento.map(
                ({ descripcion_Departamento, id_Departamento }) => (
                  <option value={id_Departamento}>
                    {descripcion_Departamento}
                  </option>
                )
              )}
            </select>
          </div>
          {touched.optionSelectid_Departamento &&
            errors.optionSelectid_Departamento && (
              <ErrorMessage message={errors.optionSelectid_Departamento} />
            )}
        </div>

        {/*Option Select id tipo cargo*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Id Tipo Cargo</label>
            <select
              value={optionSelectid_Tipo_Cargo}
              onChange={handleChange}
              //defaultValue={optionSelectid_Tipo_Cargo["1"]}
              onBlur={handleBlur}
              name="optionSelectid_Tipo_Cargo"
              className="input-styles"
              disabled={isRemove ? true : false}
            >
              <option>Seleccione una Opcion</option>
              {tipo_cargo.map(({ descripcion_Tipo_Cargo, id_Tipo_Cargo }) => (
                <option value={id_Tipo_Cargo}>{descripcion_Tipo_Cargo}</option>
              ))}
            </select>
          </div>
          {touched.optionSelectid_Tipo_Cargo &&
            errors.optionSelectid_Tipo_Cargo && (
              <ErrorMessage message={errors.optionSelectid_Tipo_Cargo} />
            )}
        </div>

        {/*Option Select de Estado*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Estado</label>
            <select
              value={optionSelectid_Estado}
              onChange={handleChange}
              //defaultValue={"1"}
              defaultValue={optionSelectid_Estado[1]}
              onBlur={handleBlur}
              name="optionSelectid_Estado"
              className="input-styles"
              disabled={isRemove ? true : false}
            >
              <option>Seleccione una Opcion</option>
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </select>
          </div>
          {touched.optionSelectid_Estado && errors.optionSelectid_Estado && (
            <ErrorMessage message={errors.optionSelectid_Estado} />
          )}
        </div>
        <div className="flex items-right py-7 border-color-fondo align-center gap-3 justify-center">
          <button
            type="submit"
            onClick={notamjs}
            disabled={
              inputFieldnombre_Persona.length < 3 ||
              inputFieldnombre_Persona.length > 50 ||
              inputFieldapellido_Persona.length < 3 ||
              inputFieldapellido_Persona.length > 50 ||
              inputFieldidentidad_Persona.length < 6 ||
              inputFieldidentidad_Persona.length > 50 ||
              inputFieldtelefono_Persona.length < 8 ||
              inputFieldtelefono_Persona.length > 50 ||
              inputFieldcorreo_Persona.length < 6 ||
              inputFieldcorreo_Persona.length > 50
            }
            className="bg-color-fondo text-white font-bold px-4 py-2 rounded border border-color-fondo"
          >
            {!isRemove ? "Guardar" : "Eliminar"}
          </button>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
      <BackButton path="/main-menu-admin" />
    </>
  );
}
export default FormPersona;
