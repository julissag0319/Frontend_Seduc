import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';import { FormEvent } from "react";
import { IFormularioBasicoRed } from "@/shared/FormularioBasicoRed";
import { FormikState, FormikHandlers } from "formik";
import ErrorMessage from "@/components/ErrorMessage";
import BackButton from "@/shared/BackButton";

type FormRedP = {
  form: FormikState<IFormularioBasicoRed>& FormikHandlers;
  onSubmitForm: (
  inputFieldcodigo_Red: string, 
  inputFielddescripcion_Red: string, 
  optionSelectid_Estado: string) => void;
  formTitle: string;
  isRemove?: boolean;
};

function FormRed({
  form,
  onSubmitForm,
  formTitle,
  isRemove,
}: FormRedP) {
  const flexInputContainer = `flex-col items-center`;
  const flexLabelInputs = `flex items-center mb-1 space-x-10`;
  const labelStyle = `block font-medium mb-3 font-bold`;

  const toastSuccess = () => toast.success('Correctamente');
 
  const {
    values: { 
    inputFieldcodigo_Red, 
    inputFielddescripcion_Red, 
    optionSelectid_Estado  },
    touched,
    errors,
    handleChange,
    handleBlur,
  } = form;

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmitForm(
      inputFieldcodigo_Red, 
      inputFielddescripcion_Red, 
      optionSelectid_Estado);
  };

  return (
    <>
      <h2 className="pb-5 text-center font-bold text-xl">{formTitle}</h2>
      <form onSubmit={handleSubmitForm} className="p-4 border border-color-fondo rounded-lg"> 
       
        {/*Text Box de Codigo Red*/}
        <div className={`${flexInputContainer}`}>
        <div className={`${flexLabelInputs}`}>
          <label className={`${labelStyle}`}>Codigo Red</label>
          <input
            value={inputFieldcodigo_Red}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="inputFieldcodigo_Red"
            className="input-styles"
            placeholder="Codigo Red"
            disabled={isRemove ? true : false}
          />
        </div>

        {touched.inputFieldcodigo_Red && errors.inputFieldcodigo_Red && (
              <ErrorMessage message={errors.inputFieldcodigo_Red} />
            )}
        </div>

        {/*Text Box de Descripcion del Red*/}
        
        <div className={`${flexInputContainer}`}>
          <div className={`${flexLabelInputs}`}>
            <label className={`${labelStyle}`}>Descripcion Red</label>
            <input
              value={inputFielddescripcion_Red}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="inputFielddescripcion_Red"
              className="input-styles"
              placeholder="Descripcion Red"
              disabled={isRemove ? true : false}
            />
          </div>
            {touched.inputFielddescripcion_Red && errors.inputFielddescripcion_Red && (
              <ErrorMessage message={errors.inputFielddescripcion_Red} />
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
            onClick={toastSuccess}
           disabled={((
              inputFieldcodigo_Red.length < 1|| inputFieldcodigo_Red.length > 50) 
               || (inputFielddescripcion_Red.length < 1 || inputFielddescripcion_Red.length > 50)
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

export default FormRed;