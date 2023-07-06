import { apiClient } from "@/utilitarios/axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import vertigo from "../../img/LOGO_USAD (1).png"
import backgroundImage from "../../assets/undraw_teacher_re_sico.svg"


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

  <img src={backgroundImage} alt="right" />
  return (//fondo
  
 
  
    <div className="grid place-items-letf w-full h-screen bg-white"> 
    
    
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

          <div className=" flex gap-1 p-2 text-black self-center">
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
      <img src={vertigo} alt="Vertigo " />
      

      <div className="flex items-center flex-col gap-8 w-left max-w-[500px]">
        <h1 className="font-sans-center text-4xl font-bold text-bg-black">
          Bienvenido(a)
          
        </h1>
        <h2 className="font-sans-center text-1x2 font-bold text-bg-black">
        <p>Al Control de Redes de Centros Educativos</p>
        </h2>
        <div className="bg-gray-200  rounded-sm my-5 px-2">
      
          <input
            placeholder="Nombre de Usuario"
            onChange={({ target }) => setNombre_Usuario(target.value)}
            className="outline-none bg-transparent p-1"
          />
        </div>
        <div className="bg-gray-200 rounded-sm my-5 flex flex-row px-1">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Contraseña"
            onChange={({ target }) => setContrasena(target.value)}
            className="outline-none bg-transparent p-1"
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
          className="p-2 rounded-md bg-color-fondo text-white w-center mt-5">
          Iniciar Sesion
        </button>
        
        
      </div>
      
      
    </div>
    

  );
};
