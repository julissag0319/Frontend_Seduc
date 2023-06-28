import { apiClient } from "@/utilitarios/axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [nombre_Usuario, setNombre_Usuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = () => {
    console.log({ nombre_Usuario, contrasena });
    apiClient
      .post("auth/login", { nombre_Usuario, contrasena })
      .then(({ data }) => {
        if (data.error || !data.token) {
          throw new Error(
            data.error || "Ups ocurrio un error vuelve a intentar mas tarde"
          );
        }
        sessionStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };
  return (
    <div className="grid place-items-center w-full h-screen bg-blue-300">
      {error && (
        <div className="flex w-1/4 shadow-lg py-2  rounded-md bg-white flex-col ">
          <button
            className="cursor-pointer self-end"
            onClick={() => setError("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className=" flex gap-1 p-2 text-red-600 self-center">
            <p>{error}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>
      )}

      <div className="w-min shadow-lg p-10 rounded-md bg-white ">
        <h1 className="text-2xl text-center text-blue-500 ">
          Inicio de Sesion USAD
        </h1>
        <div className="bg-gray-200  rounded-sm my-5 px-1">
          <input
            placeholder="Nombre de Usuario"
            onChange={({ target }) => setNombre_Usuario(target.value)}
            className="outline-none bg-transparent p-2"
          />
        </div>
        <div className="bg-gray-200 rounded-sm my-5 flex flex-row px-1">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Contraseña"
            onChange={({ target }) => setContrasena(target.value)}
            className="outline-none bg-transparent p-2"
          />
          <button
            className="text-gray-500"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {!passwordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </button>
        </div>
        <button
          onClick={login}
          className="p-2 rounded-md bg-blue-600 text-white w-full mt-5"
        >
          Iniciar Sesion
        </button>
      </div>
    </div>
  );
};
