import { apiClient } from "@/utilitarios/axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import vertigo from "../../img/LOGO_USAD (1).png"
import backgroundImage from "../../assets/undraw_teacher_re_sico.svg"


export const VerificarPin = () => {

  const [pin, setPin] = useState(0);
  
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = () => {
    
    apiClient
      .post("auth/verificar_pin", { pin })
      .then(({ data }) => {
        ///console.log(data);
        if (data?.message == "Pin Incorrecto") {
          throw new Error(
            data.error || "Ups ocurrio un error vuelve a intentar mas tarde"
          );
        }
       //console.log(data)
        //sessionStorage.setItem("TipoUser", TipoUser.descripcion_Tipo_Usuario);
        //  console.log(data.descripcion_Tipo_Usuario);
        const ruta = "/restablecer-password/" + pin;
        navigate(ruta);
      })
      .catch((error) => {
        console.log(error)
        setError("Pin Incorrecto");
      });
  };

 
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


      <div className="min-h-screen bg-accent-content">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-black">Verificación de Pin</h1>
            <p className="py-6 text-black">Revisa tu correo electrónico si se envió tu pin de verificación</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Pin</span>
                </label>
                <input type="text" onChange={({ target }) => setPin(target.value)} placeholder="Pin" className="input input-bordered" />
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-info"  onClick={login}>Verificar Cuenta</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


  );
};
