import { useState } from "react";
import { IRed } from "@/shared/RedBB";
import { useNavigate } from "react-router-dom";
import InputSearchField from "../inputSearchField";
import LayoutCards from "../layout/LayoutCards";
import BackButton from "@/shared/BackButton";

type TableProps = {
  data: IRed[];
};

function TableList({ data }: TableProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmitHandle = (value: string) => {
    setSearchValue(value);
  };

  const Navigate = useNavigate();

  return (
    <LayoutCards title="Listado de las Red">
      <InputSearchField
        onSubmitHandle={onSubmitHandle}
        filterText="Filtrado por Nombre del Red"
      />

      <div
        className=" max-w-fullmx-auto rounded-lg shadow-md overflow-auto"
        style={{ maxHeight: "250px" }}>
        <table className="w-full table-fixed rounded-lg">
          <thead className="overflow-y-auto border border-black text-center">
            <tr className="bg-white">
             <th className="w-1/3 py-2 px-4 border border-black">Id</th>
              <th className="w-1/3 py-2 px-4 border border-black">Codigo Red</th>
              <th className="w-1/3 py-2 px-4 border border-black">Descripcion de la Red</th>
              <th className="w-1/3 py-2 px-4 border border-black">Opcion</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto border border-black text-center">
            {data
              ?.filter((value: IRed) =>
                value.codigo_Red.includes(searchValue)
              )
              .map((item: IRed) => (
                <tr
                  className={`${
                    item.id_Red && item.id_Red % 2 === 0
                      ? "bg-white"
                      : "bg-white"
                  }`}
                  key={item.id_Red}>
                  <td className="w-1/1 py-2 px-4 border border-black">{item.id_Red}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.codigo_Red}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.descripcion_Red}</td>
                  <td className="w-1/3 py-2 px-4 space-x-1 space-y-1 border border-black align-bottom-center">
                    <button 
                      type="button" className="bg-color-fondo font-bold text-white px-4 py-2 rounded"
                      onClick={() => {
                        Navigate(`/editar-red/${item.id_Red}`);
                      }}>
                      Editar
                    </button>
                    <button 
                      type="button" className="bg-color-rojo font-bold text-white px-4 py-2 rounded"
                      onClick={() => {
                        Navigate(`/eliminar-red/${item.id_Red}`);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <BackButton path="/red" />
    </LayoutCards>
  );
}

export default TableList;
