import { IFormularioBasicoUsuario } from "@/shared/FormularioBasicoUsuario";
import BackButton from "@/shared/BackButton";

type FormUsuarioP = {
  form: IFormularioBasicoUsuario;
  onChangeHandler: (name: string, value: string) => void;
  onSubmitForm: (
    inputFieldid_Persona: string, 
    inputFieldnombre_Usuario: string, 
    inputFieldcontrasena_Usuario: string, 
    inputFieldcodigo_Recuperacion: string,
    optionSelectid_Tipo_Usuario: string,
    optionSelectEstado: string) => void;
  formTitle: string;
  isRemove?: boolean;
};

function FormUsuario({
  form,
  onChangeHandler,
  onSubmitForm,
  formTitle,
  isRemove,
}: FormUsuarioP) {
  const flexLabelInputs = `flex items-center mb-4 space-x-10`;
  const labelStyle = `block font-medium mb-2 font-bold`;

  return (
    <>
      <h2 className="pb-7 text-center font-bold text-xl">{formTitle}</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onSubmitForm(
            form.inputFieldid_Persona, 
            form.inputFieldnombre_Usuario, 
            form.inputFieldcontrasena_Usuario, 
            form.inputFieldcodigo_Recuperacion,
            form.optionSelectid_Tipo_Usuario,
            form.optionSelectid_Estado);
        }}
        className="p-4 border border-black rounded-lg">
          
        {/*Text Box de Nombre Usuario*/}
        <div className={`${flexLabelInputs}`}>
          <label className={`${labelStyle}`}>Nombre Usuario</label>
          <input
            value={form.inputFieldnombre_Usuario}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            type="text"
            name="inputFieldnombre_Usuario"
            className="input-styles"
            placeholder="Nombre Usuario"
            disabled={isRemove ? true : false}
          />
        </div>


        {/*Text Box de contrasena del Usuario*/}
        <div className={`${flexLabelInputs}`}>
          <label className={`${labelStyle}`}>contrasena del Usuario</label>
          <input
            value={form.inputFieldcontrasena_Usuario}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            type="text"
            name="inputFieldcontrasena_Usuario"
            className="input-styles"
            placeholder="Introduzca el contrasena del Usuario"
            disabled={isRemove ? true : false}
          />
        </div>

        {/*Text Box de codigo de Recuperacion*/}
        <div className={`${flexLabelInputs}`}>
          <label className={`${labelStyle}`}>codigo de Recuperacion ---</label>
          <input
            value={form.inputFieldcodigo_Recuperacion}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            type="text"
            name="inputFieldcodigo_Recuperacion"
            className="input-styles"
            placeholder="codigo de Recuperacion"
            disabled={isRemove ? true : false}
          />
        </div>


        {/*Option Select de Tipo Usuario*/}
        <div className={`${flexLabelInputs}`}>
          <label className={`${labelStyle}`}>Tipo Usuario</label>
          <select
            value={form.optionSelectid_Tipo_Usuario}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            name="optionSelectid_Tipo_Usuario"
            className="input-styles"
            disabled={isRemove ? true : false}>
            <option>Selecione el Tipo de Usuario</option>
            <option value="1">Coordinador De Red</option>
            <option value="2">Coordinador Departamental USAD</option>
            <option value="3">Supervision y Acompañamiento Docente</option>
          </select>
        </div>

        {/*Option Select de Estado*/}
        <div className={`${flexLabelInputs}`}>
          <label className={`${labelStyle}`}>Estado</label>
          <select
            value={form.optionSelectid_Estado}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            name="optionSelectid_Estado"
            className="input-styles"
            disabled={isRemove ? true : false}>
            <option>Selecione una Opcion</option>
            <option value="1">Activo</option>
            <option value="2">Inactivo</option>
          </select>
        </div>
        <div className="flex items-right py-7 border-color-fondo align-center gap-3 justify-center">
          <button 
            type="submit"
            className="bg-color-fondo text-white font-bold px-4 py-2 rounded border border-color-fondo">
            {!isRemove ? "Guardar" : "Eliminar"}
          </button>
        </div>
      </form>
      <BackButton path="/main-menu-admin" />
    </>
  );
}

export default FormUsuario;