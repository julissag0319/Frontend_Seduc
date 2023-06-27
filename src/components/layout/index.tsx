import { ReactNode } from "react";
import { AiOutlineDoubleLeft} from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img from "../../img/LOGO_USAD.jpg";


type LayoutProps = {
  children: ReactNode;
  title: string;
  icon: string;
  iconRight: string;
};

function LayoutContent({ children, title}: LayoutProps) {
  const flexStyle = `flex items-center justify-between w-full`;
  const Navigate = useNavigate();
  return (
    <div className="min-h-screen min-w-full items-center gap-7 ">
    <img src={img} alt=""width="200" height="200" ></img>
    
      {/** header */}
      
      <nav className={`${flexStyle} bg-color-fondo p-1 px-2 min-h-[9vh]`}>
        <div className={`${flexStyle}`}>
         
         
          <div style={{ display:"flex", alignItems:"center", gap:"2px"}}>
            <div className="cards hover:cursor-pointer"
              onClick={() => Navigate("/main-menu")}>
                <AiOutlineDoubleLeft style={{color: 'white' , fontSize : '30px'}}/>  
            </div>
            <p className="font-bold text-white">{title}</p>
          </div>

          <div className="flex items-center gap-7" style={{display:"flex", alignItems:"center", gap:"3px"}}>
              <FaUserCog style={{color: 'white' , fontSize : '30px', margin : 'right'}}/>  
            <h1 className="font-bold text-white" >Administrador</h1>
          </div>
        </div>
      </nav>

      {/** contenido */}
      <main className="flex items-center justify-center min-h-[85vh] bg-white-dku">
        {children}
      </main>

      {/** footer */}
      <footer className="font text-center items-center justify-center p-1 w-full bg-color-fondo">
        <p className="text-white"> &copy; 2023 Copyright  Secretaría de Educación</p>
        <p className="text-white">Unidad de Supervision y Acompañamiento Docente  USAD</p> 
      </footer>
    </div>
  );
}

export default LayoutContent;