import { useState } from "react";
import { IEscuela } from "@/shared/EscuelaBB";
import { useNavigate } from "react-router-dom";
import InputSearchField from "../inputSearchField";
import LayoutCards from "../layout/LayoutCards";
import BackButton from "@/shared/BackButton";

import ReactHTMLTableToExcel from 'react-html-table-to-excel';
type TableProps = {
  data: IEscuela[];
};

function TableList({ data }: TableProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmitHandle = (value: string) => {
    setSearchValue(value);
  };

  const Navigate = useNavigate();

  return (
    <LayoutCards title="Listado de las Escuela">
      <InputSearchField
        onSubmitHandle={onSubmitHandle}
        filterText="Filtrado por Nombre de la Escuela"
      />

<br/>

<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn  btn-success"
                    table="ListadoEscuelas"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Descargar Lista de Escuelas Activas"/>

                    <br/>
                    <br/>

      <div
        className="overflow-x-auto">
        <table className="table" id="ListadoEscuelas">
          <thead className="overflow-y-auto border border-black text-black text-center">
            <tr className="bg-white">
              <th className="w-2 py-2 px-7 border border-black">Id Escuela</th>
              <th className="w-1/4 py-2 px-4 border border-black">Id Departamento</th>
              <th className="w-1/3 py-2 px-4 border border-black">Id Municipio</th>
              <th className="w-1/3 py-2 px-5 border border-black">Descripcion Escuela</th>
              <th className="w-1/3 py-2 px-4 border border-black">Id Persona</th>
              <th className="w-1/3 py-2 px-4 border border-black">Id Red</th>
              <th className="w-1/3 py-2 px-4 border border-black">Estado</th>
              <th className="w-1/3 py-6 px-12 border border-black">Opcion</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto border border-color-fondo text-center text-black">

            {(data === undefined) ? null : Object.values(data)?.filter((value: IEscuela) =>
              value?.descripcion_Escuela?.includes(searchValue)
            )
              .map((item: IEscuela) => (
                <tr
                  className={`${item?.id_Escuela && item?.id_Escuela % 2 === 0
                      ? "bg-white"
                      : "bg-white"
                    }`}
                  key={item.id_Escuela}>
                  <td className="w-1/3 py-2 px-2 border border-black">{item.id_Escuela}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Departamento}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Municipio}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.descripcion_Escuela}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Persona}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Red}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Estado}</td>
                  <td className="w-1/3 py-0 px-1 space-x-1 space-y-1 border border-black align-bottom-center">
                    <button
                      type="button" className="bg-blue-700 font-bold text-white px-1 py-2 rounded"
                      onClick={() => {
                        Navigate(`/editar-escuela/${item.id_Escuela}`);
                      }}>
                      Editar
                    </button>
                    <button
                      type="button" className="bg-color-rojo font-bold text-white px-1 py-2 rounded"
                      onClick={() => {
                        Navigate(`/eliminar-escuela/${item.id_Escuela}`);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <BackButton path="/escuela" />
    </LayoutCards>
  );
}

export default TableList;
