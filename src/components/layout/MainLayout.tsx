import { useNavigate } from "react-router-dom";
import { BiBookReader, BiHomeAlt} from "react-icons/bi";
import { BsFillPinMapFill} from "react-icons/bs";
import {BsFillPersonFill,BsPeopleFill,BsBarChartLineFill} from "react-icons/bs";
import { HiUserCircle} from "react-icons/hi";
import { IoPeopleCircle } from "react-icons/io5";
import { FiMapPin} from "react-icons/fi";
import BackButton from "@/shared/BackButton";
type Props = {
  title: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  title8: string,
  title9: string
  navigate1: string;
  navigate2: string;
  navigate3: string;
  navigate4: string;
  navigate5: string;
  navigate6: string;
  navigate7: string;
  navigate8: string;
  navigate9: string;
};

function MainLayout({
  title, 
  title1,
  title2, 
  title3,
  title4, 
  title5,
  title6,
  title7,
  title8,
  title9,
  navigate1,
  navigate2, 
  navigate3,
  navigate4,
  navigate5,
  navigate6,
  navigate7,
  navigate8, 
  navigate9,

}: Props) {
  const Navigate = useNavigate();

  return (
    <div className="h-3/4 flex justify-center items-center border border-white rounded-lg">
      <div className="h-full max-w-7xl bg-white rounded-md p-8">
        <h2 className="pb-7 text-center font-bold text-2xl">{title}</h2>
        <div className="flex flex-wrap justify-center items-start h-full justify-items-center">

          {/*Boton #1 Menu Principal Departamento*/}
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate1)}>
              <BiBookReader style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title1}</p>
          </div>

          {/*Boton #2 Menu Principal de los tipo-cargo*/}
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate2)}>
              <IoPeopleCircle style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title2}</p>
          </div>
          
          {/*Boton # 3 Menu Principal de los Usuario*/}
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate3)}>
              <HiUserCircle style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title3}</p>
          </div>

          {/*Boton #4 Menu Principal Municipio*/}
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate4)}>
              <FiMapPin style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title4}</p>
          </div>

          {/*Boton #5 Menu Principal Red*/}
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate5)}>
              <BsFillPinMapFill style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title5}</p>
          </div>


        {/*Boton #6 Menu Principal Usuario*/}
        <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate6)}>
              <BsPeopleFill style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title6}</p>
          </div>

          {/*Boton #7 Menu Principal Persona*/}
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate7)}>
              <BsFillPersonFill style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title7}</p>
          </div>

          {/*Boton #8 Menu Principal Escuela*/}
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate8)}>
              <BiHomeAlt style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title8}</p>
          </div>
           
          

            {/*Boton #8 EXCEL*/}
            <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigate9)}>
              <BsBarChartLineFill style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-xl text-white">{title9}</p>
          </div>



        </div>
        <BackButton path="/main-menu-admin" />
      </div>
    </div>
  );
}

export default MainLayout;