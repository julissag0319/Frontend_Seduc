import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormEvent, useEffect } from "react";
import { FormikState, FormikHandlers } from "formik";
import { IFormularioBasicoUsuario } from "@/shared/FormularioBasicoUsuario";
import ErrorMessage from "@/components/ErrorMessage";
import BackButton from "@/shared/BackButton";
import { useState } from "react";
import { apiClient } from "@/utilitarios/axios";

type FormUsuarioP = {
  form: FormikState<IFormularioBasicoUsuario> & FormikHandlers;
  onSubmitForm: (
    optionSelectid_Persona: string,
    inputFieldnombre_Usuario: string,
    inputFieldcontrasena_Usuario: string,
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectid_Estado: string
  ) => void;
  formTitle: string;
  isRemove?: boolean;
};

function FormUsuario({
  form,
  onSubmitForm,
  formTitle,
  isRemove,
}: FormUsuarioP) {
  const flexInputContainer = `flex-col items-center`;
  const flexLabelInputs = `flex items-center mb-4 space-x-10`;
  const labelStyle = `block font-medium mb-2 font-bold`;
  const notamjs = () => toast.success("correctamente");
  const {
    values: {
      optionSelectid_Persona,
      inputFieldnombre_Usuario,
      inputFieldcontrasena_Usuario,
      inputFieldcodigo_Recuperacion,
      optionSelectid_Tipo_Usuario,
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
      optionSelectid_Persona,
      inputFieldnombre_Usuario,
      inputFieldcontrasena_Usuario,
      inputFieldcodigo_Recuperacion,
      optionSelectid_Tipo_Usuario,
      optionSelectid_Estado
    );
  };

  const [persona, setpersona] = useState([
    { id_Persona: 1, nombre_Persona: "Julissa" },
  ]);
  useEffect(() => {
    apiClient.get("/persona").then(({ data }) => {
      setpersona(data); //actualizar la variable del depart al valor que retorna la api
    });
    apiClient.get("/tipo_usuario").then(({ data }) => {
      settipo_usuario(data); //actualizar la variable del depart al valor que retorna la api
    });
  }, []); //solo ejecutar una vez

  const [tipo_usuario, settipo_usuario] = useState([
    { id_Tipo_Usuario: 1, descripcion_Tipo_Usuario: "" },
  ]);

  return (
    <>
      <h2 className="pb-7 text-center font-bold text-xl">{formTitle}</h2>

      <form
        onSubmit={handleSubmitForm}
        className="p-4 border border-black rounded-lg"
      >
        {/*Option Select id Persona*/}
        <div className={`${flexLabelInputs}`}>
          <label className={`${labelStyle}`}>id Persona</label>
          <select
            value={optionSelectid_Persona}
            onChange={handleChange}
            //defaultValue={optionSelectid_Persona["1"]}
            onBlur={handleBlur}
            name="optionSelectid_Persona"
            className="input-styles"
            disabled={isRemove ? true : false}
          >
            <option>Selecione el id Persona</option>
            {persona.map(
                ({ nombre_Persona, id_Persona }) => (
                  <option value={id_Persona}>
                    {nombre_Persona}
                  </option>
                )
              )}
          </select>
        </div>

        {/*Text Box de Nombre Usuario*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Nombre Usuario</label>
            <input
              value={inputFieldnombre_Usuario}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFieldnombre_Usuario"
              className="input-styles"
              placeholder="Nombre Usuario"
              disabled={isRemove ? true : false}
            />
          </div>

          {touched.inputFieldnombre_Usuario &&
            errors.inputFieldnombre_Usuario && (
              <ErrorMessage message={errors.inputFieldnombre_Usuario} />
            )}
        </div>

        

        {/*Text Box de contrasena del Usuario*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>contrasena del Usuario</label>
            <input
              value={inputFieldcontrasena_Usuario}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFieldcontrasena_Usuario"
              className="input-styles"
              placeholder="Nombre Usuario"
              disabled={isRemove ? true : false}
            />
          </div>

          {touched.inputFieldcontrasena_Usuario &&
            errors.inputFieldcontrasena_Usuario && (
              <ErrorMessage message={errors.inputFieldcontrasena_Usuario} />
            )}
        </div>

        {/*Text Box de codigo de Recuperacion*/}

        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>codigo de Recuperacion</label>
            <input
              value={inputFieldcodigo_Recuperacion}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFieldcodigo_Recuperacion"
              className="input-styles"
              placeholder="codigo de Recuperacion"
              disabled={isRemove ? true : false}
            />
          </div>
          {touched.inputFieldcodigo_Recuperacion &&
            errors.inputFieldcodigo_Recuperacion && (
              <ErrorMessage message={errors.inputFieldcodigo_Recuperacion} />
            )}
        </div>

        {/*Option Select de Tipo Usuario*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Tipo Usuario</label>
            <select
              value={optionSelectid_Tipo_Usuario}
              onChange={handleChange}
              defaultValue={optionSelectid_Estado[1]}
              onBlur={handleBlur}
              name="optionSelectid_Tipo_Usuario"
              className="input-styles"
              disabled={isRemove ? true : false}
            >
              <option>Selecione el Tipo de Usuario</option>

              {tipo_usuario.map(
                ({ descripcion_Tipo_Usuario, id_Tipo_Usuario }) => (
                  <option value={id_Tipo_Usuario}>
                    {descripcion_Tipo_Usuario}
                  </option>
                )
              )}


            </select>
          </div>
          {touched.optionSelectid_Tipo_Usuario &&
            errors.optionSelectid_Tipo_Usuario && (
              <ErrorMessage message={errors.optionSelectid_Tipo_Usuario} />
            )}
        </div>

        {/*Option Select de Estado*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Estado</label>
            <select
              value={optionSelectid_Estado}
              onChange={handleChange}
              defaultValue={optionSelectid_Estado[1]}
              onBlur={handleBlur}
              name="optionSelectid_Estado"
              className="input-styles"
              disabled={isRemove ? true : false}
            >
              <option>Selecione una Opcion</option>
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
              inputFieldnombre_Usuario.length < 3 ||
              inputFieldnombre_Usuario.length > 50 ||
              inputFieldcontrasena_Usuario.length < 3 ||
              inputFieldcontrasena_Usuario.length > 50 ||
              inputFieldcodigo_Recuperacion.length < 6 ||
              inputFieldcodigo_Recuperacion.length > 50
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

export default FormUsuario;
