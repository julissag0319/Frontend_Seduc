import { useState } from "react";
import { IMunicipio } from "@/shared/MunicipioBB";
import { useNavigate } from "react-router-dom";
import InputSearchField from "../inputSearchField";
import LayoutCards from "../layout/LayoutCards";
import BackButton from "@/shared/BackButton";

type TableProps = {
  data: IMunicipio[];
};

function TableList({ data }: TableProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmitHandle = (value: string) => {
    setSearchValue(value);
  };

  const Navigate = useNavigate();

  return (
    <LayoutCards title="Listado de los Municipio ">
      <InputSearchField
        onSubmitHandle={onSubmitHandle}
        filterText="Filtrar Municipio por su nombre"
      />

      <div
        className="max-w-full mx-auto rounded-lg shadow-md overflow-auto "
        style={{ maxHeight: "450px" }}>
        <table className="w-full table-fixed rounded-lg">
          <thead className="overflow-y-auto border border-black text-center">
            <tr className="bg-white-400">
              <th className="w-1/3 py-2 px-4 border border-black">Codigo del Municipioo</th>
              <th className="w-1/3 py-2 px-4 border border-black">Nombre del Municipio</th>
              <th className="w-1/3 py-2 px-4 border border-black">Opcion</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto border border-black text-center">
            {data
              ?.filter((value: IMunicipio) =>
                value.descripcion_Municipio.includes(searchValue)
              )
              .map((item: IMunicipio) => (
                <tr
                  className={`${
                    item.id_Municipio && item.id_Municipio % 2 === 0
                      ? "bg-white"
                      : "bg-white"
                  }`}
                  key={item.id_Municipio}>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Municipio}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.descripcion_Municipio}</td>
                  <td className="w-1/3 py-2 px-4 space-x-7 border border-black">
                    <button
                      type="button" className="bg-color-fondo text-white font-bold px-4 py-2 rounded border border-color-fondo"
                      onClick={() => {
                        Navigate(`/editar-municipio/${item.id_Municipio}`);
                      }}>
                      Editar
                    </button>
                    <button
                      type="button" className="bg-color-rojo text-white font-bold px-4 py-2 rounded border border-color-fondo"
                      onClick={() => {
                        Navigate(`/eliminar-municipio/${item.id_Municipio}`);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <BackButton path="/municipio" />
    </LayoutCards>
  );
}

export default TableList;
