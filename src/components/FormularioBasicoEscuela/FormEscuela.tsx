import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormEvent, useEffect } from "react";
import { FormikState, FormikHandlers } from "formik";
import { IFormularioBasicoEscuela } from "@/shared/FormularioBasicoEscuela";
import ErrorMessage from "@/components/ErrorMessage";
import BackButton from "@/shared/BackButton";
import { useState } from "react";
import { apiClient } from "@/utilitarios/axios";

type FormEscuelaP = {
  form: FormikState<IFormularioBasicoEscuela>& FormikHandlers;
  onSubmitForm: (
    optionSelectid_Departamento: string,
    optionSelectid_Municipio: string, 
    inputFielddescripcion_Escuela: string, 
    optionSelectid_Persona: string, 
    optionSelectid_Red: string,
    optionSelectid_Estado: string) => void;
    formTitle: string;
    isRemove?: boolean;
};

function FormEscuela({
  form,
  onSubmitForm,
  formTitle,
  isRemove,
}: FormEscuelaP) {
  const flexInputContainer = `flex-col items-center`;
  const flexLabelInputs = `flex items-center mb-4 space-x-10`;
  const labelStyle = `block font-medium mb-2 font-bold`;
  const notamjs = () => toast.success('correctamente');
  const {
    values: { 
        optionSelectid_Departamento,
        optionSelectid_Municipio,
        inputFielddescripcion_Escuela,
        optionSelectid_Persona,
        optionSelectid_Red,
        optionSelectid_Estado},
    touched,
    errors,
    handleChange,
    handleBlur,
  } = form;

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmitForm(
        optionSelectid_Departamento,
        optionSelectid_Municipio,
        inputFielddescripcion_Escuela,
        optionSelectid_Persona,
        optionSelectid_Red,
        optionSelectid_Estado);
  };
/////////////////////////////////////////////////////////////////////
  const [departamento, setdepartamento] = useState([
    { id_Departamento: 1, descripcion_Departamento: "Atlantidad" },
  ]);
  useEffect(() => {
    apiClient.get("/departamento").then(({ data }) => {
      setdepartamento(data);
    });

    apiClient.get("/municipio").then(({ data }) => {
        setMunicipio(data);
      }); 


      apiClient.get("/red").then(({ data }) => {
        setRed(data);
      });   
  }, []);
///////////////////////////////////////////////////////////////////
const [municipio, setMunicipio] = useState([
  { id_Municipio: 1, descripcion_Municipio: "Supervision" },
]);

///////////////////////////////////////////////////////////////////

const [red, setRed] = useState([
  { id_Red: 1, descripcion_Red: "Supervision" },
]);

///////////////////////////////////////////////////////////////////
  return (
    <>
      <h2 className="pb-7 text-center font-bold text-xl">{formTitle}</h2>
      <form onSubmit={handleSubmitForm} className="p-4 border border-color-fondo rounded-lg"> 
        
        
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

    
    
       {/*Option Select de id Municipio*/}
          <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Id Municipio</label>
            <select
              value={optionSelectid_Municipio}
              onChange={handleChange}
              //defaultValue={"1"}

              name="optionSelectid_Municipio"
              className="input-styles"
              disabled={isRemove ? true : false}
            >
              <option>Seleccione una Opcion</option>
              {municipio.map(
                ({ descripcion_Municipio, id_Municipio }) => (
                  <option value={id_Municipio}>
                    {descripcion_Municipio}
                  </option>
                )
              )}
            </select>
          </div>
          {touched.optionSelectid_Municipio &&
            errors.optionSelectid_Municipio && (
              <ErrorMessage message={errors.optionSelectid_Municipio} />
            )}
        </div>


      {/*Text Box de descripcion Escuela*/}
      <div className={`${flexInputContainer}`}>
        <div className={`${flexLabelInputs}`}>
          <label className={`${labelStyle}`}>descripcion Escuela</label>
          <input
            value={inputFielddescripcion_Escuela}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="inputFielddescripcion_Escuela"
            className="input-styles"
            placeholder="descripcion Escuela"
            disabled={isRemove ? true : false}
          />
        </div>
          {touched.inputFielddescripcion_Escuela && errors.inputFielddescripcion_Escuela && (
            <ErrorMessage message={errors.inputFielddescripcion_Escuela} />
          )}
      </div>
 

  

        {/*Option Select de id Red*/}
          <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Id Red</label>
            <select
              value={optionSelectid_Red}
              onChange={handleChange}
              //defaultValue={"1"}

              name="optionSelectid_Red"
              className="input-styles"
              disabled={isRemove ? true : false}
            >
              <option>Seleccione una Opcion</option>
              {red.map(
                ({ descripcion_Red, id_Red }) => (
                  <option value={id_Red}>
                    {descripcion_Red}
                  </option>
                )
              )}
            </select>
          </div>
          {touched.optionSelectid_Red &&
            errors.optionSelectid_Red && (
              <ErrorMessage message={errors.optionSelectid_Red} />
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

              inputFielddescripcion_Escuela.length < 6 ||
              inputFielddescripcion_Escuela.length > 50
              
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

export default FormEscuela;
