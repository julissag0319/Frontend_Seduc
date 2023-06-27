import { useState } from "react";
import { ITipoUsuario } from "@/shared/TipoUsuarioBB";
import { useNavigate } from "react-router-dom";
import InputSearchField from "../inputSearchField";
import LayoutCards from "../layout/LayoutCards";
import BackButton from "@/shared/BackButton";

type TableProps = {
  data: ITipoUsuario[];
};

function TableList({ data }: TableProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmitHandle = (value: string) => {
    setSearchValue(value);
  };

  const Navigate = useNavigate();

  return (
    <LayoutCards title="Lista de los Tipo de Usuario ">
      <InputSearchField
        onSubmitHandle={onSubmitHandle}
        filterText="Filtrar Tipo de Usuario"
      />

      <div
        className="max-w-full mx-auto rounded-lg shadow-md overflow-auto "
        style={{ maxHeight: "450px" }}>
        <table className="w-full table-fixed rounded-lg">
          <thead className="overflow-y-auto border border-black text-center">
            <tr className="bg-white">
              <th className="w-1/3 py-2 px-4 border border-black">Codigo del Tipo de Usuario</th>
              <th className="w-1/3 py-2 px-4 border border-black">Tipo de Usuario</th>
              <th className="w-1/3 py-2 px-4 border border-black">Opcion</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto border border-black text-center">
            {data
              ?.filter((value: ITipoUsuario) =>
                value.descripcion_Tipo_Usuario.includes(searchValue)
              )
              .map((item: ITipoUsuario) => (
                <tr
                  className={`${
                    item.id_Tipo_Usuario && item.id_Tipo_Usuario % 2 === 0
                      ? "bg-white" ///
                      : "bg-white"
                  }`}
                  key={item.id_Tipo_Usuario}>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Tipo_Usuario}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.descripcion_Tipo_Usuario}</td>
                  <td className="w-1/3 py-2 px-4 space-x-7 border border-black">
                    <button
                      type="button" className="bg-color-fondo text-white font-bold px-4 py-2 rounded border border-color-fondo"
                      onClick={() => {
                        Navigate(`/editar-tipo_usuario/${item.id_Tipo_Usuario}`); //navegacion frontend
                      }}>
                      Editar
                    </button>
                    <button
                      type="button" className="bg-color-rojo text-white font-bold px-2 py-2 rounded border border-color-rojo"
                      onClick={() => {
                        Navigate(`/eliminar-tipo_usuario/${item.id_Tipo_Usuario}`);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <BackButton path="/tipo_usuario" />
    </LayoutCards>
  );
}

export default TableList;
