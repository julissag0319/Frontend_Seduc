import { useState } from "react";
import { IDepartamento } from "@/shared/DepartamentoBB";
import { useNavigate } from "react-router-dom";
import InputSearchField from "../inputSearchField";
import LayoutCards from "../layout/LayoutCards";
import BackButton from "@/shared/BackButton";

type TableProps = {
  data: IDepartamento[];
};

function TableList({ data }: TableProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmitHandle = (value: string) => {
    setSearchValue(value);
  };

  const Navigate = useNavigate();

  return (
    <LayoutCards title="Listado de los Departamentos ">
      <InputSearchField
        onSubmitHandle={onSubmitHandle}
        filterText="Filtrar Departamento por nombre"
      />

      <div
        className="max-w-full mx-auto rounded-lg shadow-md overflow-auto "
        style={{ maxHeight: "450px" }}>
        <table className="w-full table-fixed rounded-lg">
          <thead className="overflow-y-auto border border-black text-center">
            <tr className="bg-white-400">
              <th className="w-1/3 py-2 px-4 border border-black">Codigo del Departamento</th>
              <th className="w-1/3 py-2 px-4 border border-black">Nombre del Departamento</th>
              <th className="w-1/3 py-2 px-4 border border-black">Opcion</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto border border-black text-center">
            {data
              ?.filter((value: IDepartamento) =>
                value.descripcion_Departamento.includes(searchValue)
              )
              .map((item: IDepartamento) => (
                <tr
                  className={`${
                    item.id_Departamento && item.id_Departamento % 2 === 0
                      ? "bg-white"
                      : "bg-white"
                  }`}
                  key={item.id_Departamento}>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Departamento}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.descripcion_Departamento}</td>
                  <td className="w-1/3 py-2 px-4 space-x-7 border border-black">
                    <button
                      type="button" className="bg-color-fondo text-white font-bold px-4 py-2 rounded border border-color-fondo"
                      onClick={() => {
                        Navigate(`/editar-departamento/${item.id_Departamento}`);
                      }}>
                      Editar
                    </button>
                    <button
                      type="button" className="bg-color-rojo text-white font-bold px-4 py-2 rounded border border-color-fondo"
                      onClick={() => {
                        Navigate(`/eliminar-departamento/${item.id_Departamento}`);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <BackButton path="/departamento" />
    </LayoutCards>
  );
}

export default TableList;
