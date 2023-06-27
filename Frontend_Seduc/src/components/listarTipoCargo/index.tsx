import { useState } from "react";
import { ITipoCargo } from "@/shared/TipoCargoBB";
import { useNavigate } from "react-router-dom";
import InputSearchField from "../inputSearchField";
import LayoutCards from "../layout/LayoutCards";
import BackButton from "@/shared/BackButton";

type TableProps = {
  data: ITipoCargo[];
};

function TableList({ data }: TableProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmitHandle = (value: string) => {
    setSearchValue(value);
  };

  const Navigate = useNavigate();

  return (
    <LayoutCards title="Lista de los Tipo de Cargo ">
      <InputSearchField
        onSubmitHandle={onSubmitHandle}
        filterText="Filtrar Tipo de Cargo"
      />

      <div
        className="max-w-full mx-auto rounded-lg shadow-md overflow-auto "
        style={{ maxHeight: "450px" }}>
        <table className="w-full table-fixed rounded-lg">
          <thead className="overflow-y-auto border border-black text-center">
            <tr className="bg-white-400">
              <th className="w-1/3 py-2 px-4 border border-black">Codigo del Tipo de Cargo</th>
              <th className="w-1/3 py-2 px-4 border border-black">Tipo de Cargo</th>
              <th className="w-1/3 py-2 px-4 border border-black">Opcion</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto border border-black text-center">
            {data
              ?.filter((value: ITipoCargo) =>
                value.descripcion_Tipo_Cargo.includes(searchValue)
              )
              .map((item: ITipoCargo) => (
                <tr
                  className={`${
                    item.id_Tipo_Cargo && item.id_Tipo_Cargo % 2 === 0
                      ? "bg-white" ///
                      : "bg-white"
                  }`}
                  key={item.id_Tipo_Cargo}>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Tipo_Cargo}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.descripcion_Tipo_Cargo}</td>
                  <td className="w-1/3 py-2 px-4 space-x-7 border border-black">
                    <button
                      type="button" className="bg-color-fondo text-white font-bold px-4 py-2 rounded border border-white"
                      onClick={() => {
                        Navigate(`/editar-tipo_cargo/${item.id_Tipo_Cargo}`); //navegacion frontend¿
                      }}>
                      Editar
                    </button>
                    <button
                      type="button" className="bg-color-rojo text-white font-bold px-4 py-2 rounded border border-color-fondo"
                      onClick={() => {
                        Navigate(`/eliminar-tipo_cargo/${item.id_Tipo_Cargo}`);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <BackButton path="/tipo_cargo" />
    </LayoutCards>
  );
}

export default TableList;
