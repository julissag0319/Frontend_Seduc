import { useState } from "react";
import { IPersona } from "@/shared/PersonaBB"; //interfaz
import { useNavigate } from "react-router-dom";
import InputSearchField from "../inputSearchField";
import LayoutCards from "../layout/LayoutCards";
import BackButton from "@/shared/BackButton";

type TableProps = {
  data: IPersona[];
};

function TableList({ data }: TableProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmitHandle = (value: string) => {
    setSearchValue(value);
  };

  const Navigate = useNavigate();

  return (
    <LayoutCards title="Listado de las Persona">
      <InputSearchField
        onSubmitHandle={onSubmitHandle}
        filterText="Buscar por Nombre del Persona"
      />

      <div
        className=" max-w-fullmx-auto rounded-lg shadow-md overflow-auto"
        style={{ maxHeight: "350px" }}>
        <table className="w-full table-fixed rounded-lg">
          <thead className="overflow-y-auto border border-black text-center">
            <tr className="bg-white">
              <th className="w-1 py-1 px-5 border border-black">Id</th>
              <th className="w-3/3 py-2 px-2 border border-black">Nombre </th>
              <th className="w-3/3 py-2 px-2 border border-black">Apellido</th>
              <th className="w-3/3 py-8 px-8 border border-black">Identidad</th>
              <th className="w-3/3 py-2 px-4 border border-black">Telefono</th>
              <th className="w-3/3 py-1 px-1 border border-black">Correo Electronico</th>
              <th className="w-3/3 py-6 px-4 border border-black">Opcion</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto border border-black text-center">
            {data//cargar los datos
              ?.filter((value: IPersona) =>//filtro
                value.nombre_Persona.includes(searchValue)
                
              )
              .map((item: IPersona) => (//mapeo
                <tr
                  className={`${//color para listar par e inpar color diferente
                    item.id_Persona && item.id_Persona % 2 === 0
                      ? "bg-white"
                      : "bg-white"
                  }`}
                  key={item.id_Persona}>
                  <td className="w-1/3 py-2 px-2 border border-black">{item.id_Persona}</td> 
                  <td className="w-1/3 py-2 px-2 border border-black">{item.nombre_Persona}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.apellido_Persona}</td>
                  <td className="w-1/3 py-2 px-0 border border-black">{item.identidad_Persona}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.telefono_Persona}</td>
                  <td className="w-4/4 py-2 px-0 border border-black">{item.correo_Persona}</td>
                  <td className="w-2 py-2 px-4 space-x-2 space-y-2 border border-black align-bottom-center">
                    <button 
                      type="button" className="bg-color-fondo font text-white px-4 py-2 rounded"
                      onClick={() => {
                        Navigate(`/editar-persona/${item.id_Persona}`);
                      }}>
                      Editar
                    </button>
                    <button 
                      type="button" className="bg-color-rojo font text-white px-2 py-2 rounded"
                      onClick={() => {
                        Navigate(`/eliminar-persona/${item.id_Persona}`);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <BackButton path="/persona" />
    </LayoutCards>
  );
}

export default TableList;
