import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import * as zod from 'zod'
//import BackButton from "@/shared/BackButton";
import BackButton from "@/shared/BackButton";

import { Eye, EyeSlash } from '@phosphor-icons/react'
import vertigo from './assets/LOGO_USAD (1).png'

type PasswordType = 'password' | 'text'

const loginFormValidationSchema = zod.object({
  email: zod.string().email('Digite un Correo válido'),
  password: zod.string().nonempty('Digite su Correo')
})

type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>

export function App() {
  const [
    inputPasswordType, 
    setInputPasswordType
  ] = useState<PasswordType>('password')

  const handleTogglePasswordType = ( type:PasswordType ) => {
    switch ( type ) {
      case 'password':
        setInputPasswordType('text')
        return
      case 'text':
      default:
        setInputPasswordType('password')
        return
    }
  }

  const loginForm = useForm<NewLoginFormData>({
    resolver: zodResolver(loginFormValidationSchema)
  })

  const { register, handleSubmit, formState, reset } = loginForm

  const { errors } = formState

  const handleLoginSubmit = (data: NewLoginFormData) => {
    console.log(data)
    reset()
  }

  return (
    <div className="grid grid-cols-2 h-screen bg-color-fondo">
      <div>
        <div className="py-18 px-28 items-center">
          <img src={vertigo} alt="Vertigo " />
          <main className="flex flex-col mt-18 gap-10 w-full max-w-[500px]">
            <header className="flex items-center flex-col gap-2 w-full max-w-[450px]">
              <h1 className="font-sans-center text-4xl font-bold text-bg-black">
                Inicio Sesion 
              </h1>
              <p className="font-sans font-normal  text-base text-bg-color">
                inicie Sesion con su Correo Institucional
              </p>
            </header>
            <form 
              className="flex flex-col gap-4 "
              onSubmit={handleSubmit(handleLoginSubmit)}
            >
              <div className="flex flex-col gap-2">
                <label 
                  className="font-sans font-semibold text-sm text-black"
                  htmlFor="email"
                >
                  Correo Electronico:
                </label>
                <input
                  className={clsx('px-4 py-3 bg-white text-sm text-color-fondo leading-5 border border-color-fondo rounded placeholder:text-gray-200 outline-none focus:border-color-fondo ', {
                    'border-red': errors.email,
                    'focus:border-red' : errors.email,
                  })} 
                  type="email" 
                  id="email"
                  placeholder="Digite su Correo"
                  {...register('email')}
                />
                { errors.email  && (
                  <span className="text-red text-sm"> {errors.email?.message} </span>)
                }
              </div>

              <div className="flex flex-col gap-2 relative">
                <label
                  className="flex justify-between font-sans font-semibold text-sm text-gray-800" 
                  htmlFor="password"
                >
                  Contraseña:
                  <a 
                    className="text-purple-500 hover:text-purple-400 hover:underline"
                    href="#"
                  >
                    Olvido la Contraseña?
                  </a>
                </label>
                <input
                  className={clsx('px-4 py-3 bg-white text-sm text-bg-black leading-5 border border-bg-color-fondo rounded placeholder:text-gray-200 outline-none focus:border-purple-500', {
                     'border-red': errors.password,
                    'focus:border-red' : errors.password,
                  })}  
                  id="Contrasena"
                  type={inputPasswordType}
                  placeholder="Dijite su Contraseña"
                  {...register('password')}
                />
                <button
                  className="absolute right-4 top-11 text-bg-white"
                  type='button'
                  onClick={() => handleTogglePasswordType(inputPasswordType)}
                >
                  { inputPasswordType === 'password' ? <EyeSlash /> : <Eye /> }
                </button>
                { errors.password  && (
                  <span className="text-red text-sm"> {errors.password?.message} </span>)
                }
              </div>

              <footer className="flex flex-col gap-8">
                <button
                  className="bg-purple-500 text-white font-bold py-4 rounded outline-none hover:bg-purple-400 hover:ring-1 hover:ring-purple-500 focus:ring-2 focus:ring-purple-400"
                >
                  Entrar
                </button>
              </footer>
            </form>
          </main>
        </div>
      </div>
      <div className="bg-img-purple bg-cover bg-no-repeat" />
      <BackButton path="/login" />
    </div>
  )
}