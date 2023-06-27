import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormEvent } from "react";
import { FormikState, FormikHandlers } from "formik";
import { IFormularioBasicoEscuela } from "@/shared/FormularioBasicoEscuela";
import ErrorMessage from "@/components/ErrorMessage";
import BackButton from "@/shared/BackButton";

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
              onBlur={handleBlur}
              name="optionSelectid_Departamento"
              className="input-styles"
              disabled={isRemove ? true : false}>
                <option>Seleccione una Opcion</option>
                <option value="1">Atlántida</option>
                <option value="2">Colón</option>
                <option value="3">Comayagua</option>
                <option value="4">Copán</option>
                <option value="5">Cortés</option>
                <option value="6">Choluteca</option>
                <option value="7">Paraíso</option>
                <option value="8">Francisco Morazán</option>
                <option value="9">Gracias a Dios</option>
                <option value="10">Intibucá</option>
                <option value="11">Islas de la Bahía</option>
                <option value="12">La Paz</option>
                <option value="13">Lempira</option>
                <option value="14">Ocotepeque</option>
                <option value="15">Olancho</option>
                <option value="16">Santa Bárbara</option>
                <option value="17">Valle</option>
                <option value="18">Yoro</option>
            </select>
          </div>
            {touched.optionSelectid_Departamento && errors.optionSelectid_Departamento&& (
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
              onBlur={handleBlur}
              name="optionSelectid_Municipio"
              className="input-styles"
              disabled={isRemove ? true : false}>
                <option>Seleccione una Opcion</option>
                <option value="1">Atlántida</option>
                <option value="2">Colón</option>
                <option value="3">Comayagua</option>
                <option value="4">Copán</option>
                <option value="5">Cortés</option>
                <option value="6">Choluteca</option>
                <option value="7">Paraíso</option>
                <option value="8">Francisco Morazán</option>
                <option value="9">Gracias a Dios</option>
                <option value="10">Intibucá</option>
                <option value="11">Islas de la Bahía</option>
                <option value="12">La Paz</option>
                <option value="13">Lempira</option>
                <option value="14">Ocotepeque</option>
                <option value="15">Olancho</option>
                <option value="16">Santa Bárbara</option>
                <option value="17">Valle</option>
                <option value="18">Yoro</option>
            </select>
          </div>
            {touched.optionSelectid_Municipio && errors.optionSelectid_Municipio&& (
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
 

  

        {/*Option Select id Red*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>id Red</label>
              <select
                value={optionSelectid_Red}
                onChange={handleChange}
                //defaultValue={optionSelectid_Red["1"]}
                onBlur={handleBlur}
                name="optionSelectid_Red"
                className="input-styles"
                disabled={isRemove ? true : false}>
                  <option>Seleccione una Opcion</option>
                  <option value="1">Coordinador De Red</option>
                  <option value="2">Coordinador Departamental USAD</option>
                  <option value="3">Supervison y Acompañamiento Docente</option>
              </select>
          </div>
            {touched.optionSelectid_Red && errors.optionSelectid_Red && (
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
                disabled={isRemove ? true: false}
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
           disabled={((
              inputFielddescripcion_Escuela.length < 3|| inputFielddescripcion_Escuela.length > 50) 
              )}
            className="bg-color-fondo text-white font-bold px-4 py-2 rounded border border-color-fondo">
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
