import { useState } from "react";
import { IUsuario } from "@/shared/UsuarioBB";
import { useNavigate } from "react-router-dom";
import InputSearchField from "../inputSearchField";
import LayoutCards from "../layout/LayoutCards";
import BackButton from "@/shared/BackButton";

type Props = {
  data: IUsuario[];
};

function TableList({ data }: Props) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmitHandle = (value: string) => {
    setSearchValue(value);
  };

  const Navigate = useNavigate();

  return (
    <LayoutCards title="Lista de los Usuarios">
      <InputSearchField
        onSubmitHandle={onSubmitHandle}
        filterText="Buscar Nombre del Usuario"
      />

      <div
        className="max-w-full mx-auto rounded-lg shadow-md overflow-auto"
        style={{ maxHeight: "350px" }}>
        <table className="w-full table-fixed rounded-lg">
          <thead className="overflow-y-auto border border-black text-center">
            <tr className="bg-white">
              <th className="w-1/3 py-2 px-4 border border-black">Codigo del Usuario</th>
              <th className="w-1/3 py-2 px-4 border border-black">Nombre de Usuario</th>
              <th className="w-1/3 py-2 px-4 border border-black">Opcion</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto border border-black text-center">
            {data
              ?.filter((value: IUsuario) =>
                value.nombre_Usuario.includes(searchValue)
              )
              .map((item: IUsuario) => (
                <tr
                  className={`${
                    item.id_Usuario && item.id_Usuario % 2 === 0
                      ? "bg-white"
                      : "bg-white"
                  }`}
                  key={item.id_Usuario}>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.id_Usuario}</td>
                  <td className="w-1/3 py-2 px-4 border border-black">{item.nombre_Usuario}</td>
                  <td className="w-1/3 py-2 px-4 space-x-7 border border-black">
                    <button
                      type="button" className="bg-color-fondo text-white px-4 py-2 rounded border border-color-fondo font-bold"
                      onClick={() => {
                        Navigate(`/editar-usuario/${item.id_Usuario}`);
                      }}>
                      Editar
                    </button>
                    <button
                      type="button" className="bg-color-rojo text-white px-4 py-2 rounded border border-color-fondo font-bold"
                      onClick={() => {
                        Navigate(`/eliminar-usuario/${item.id_Usuario}`);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <BackButton path="/usuario" />
    </LayoutCards>
  );
}

export default TableList;