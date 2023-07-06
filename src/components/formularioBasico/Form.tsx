import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormEvent } from "react";
import { FormikState, FormikHandlers } from "formik";
import { IFormularioBasico } from "@/shared/FormularioBasicoBB";
import ErrorMessage from "@/components/ErrorMessage";
import BackButton from "@/shared/BackButton";

type FormPP = {
  form: FormikState<IFormularioBasico> & FormikHandlers;
  onSubmitForm: (inputField: string, optionSelect: string) => void;
  formTitle: string;
  labelInput: string;
  isRemove?: boolean;
};

function Form({
  form, 
  onSubmitForm,
  formTitle,
  labelInput,
  isRemove,
}: FormPP) {
  //pantalla menu principal 26y27 flex al inicio
  const flexInputContainer = `col items-center`;
  const flexLabelInputs = `flex items-center mb-4 space-x-15`;
  const labelStyle = `block font-medium mb-2 items-center`;
  const notamjs = () => toast.success('Correctamente');
  const {
    values: { inputField, optionSelect },
    touched,
    errors,
    handleChange,
    handleBlur,
  } = form;

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmitForm(inputField, optionSelect);
  };
  return (
    <>
      <h2 className="pb-7 text-center font-bold text-xl">{formTitle}</h2>
      <form onSubmit={handleSubmitForm} className="p-4 border border-white rounded-lg toastDark">
      
        {/*Text Box*/}
        {/*Descripcion*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>{labelInput}</label>
              <input
                value={inputField}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="inputField"
                className="input-styles"
                placeholder="Descripcion"
                disabled={isRemove ? true : false}
              />
          </div>
            {touched.inputField && errors.inputField && (
              <ErrorMessage message={errors.inputField} />
            )}
        </div>

        {/*Option Select de Estado*/}
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Estado</label>
              <select
                value={optionSelect}
                onChange={handleChange}
                //defaultValue={"1"}
                defaultValue={optionSelect[1]}
                onBlur={handleBlur}
                name="optionSelect"
                className="input-styles"
                disabled={isRemove ? true: false}
                >
                  <option>Seleccione una Opcion</option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
              </select>
          </div>
          {touched.optionSelect && errors.optionSelect && (
            <ErrorMessage message={errors.optionSelect} />
          )}
        </div>  
        <div className="flex items-right py-7 border-color-fondo align-center gap-3 justify-center">
          <button 
            type="submit"
            onClick={notamjs}
            disabled={((inputField.length < 6 || inputField.length > 50) || optionSelect!="1")}
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
          toastStyle={{ background: '#FFFFFF'}} 
        />

      </form>
      <BackButton path="/main-menu-admin" />
    </>
  );
}

export default Form;