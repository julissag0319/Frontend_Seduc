import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

import {
  useObtenerUnTipoUsuarioQuery
} from "@/store/service/TipoUsuario";




function MainMenu() {
  const user = JSON.parse(sessionStorage.getItem("usuario"));
  const msj = `Bienvenido (a) ${user.nombre_Usuario}, Estas en la pantalla Menu Principal.` 

  const id = sessionStorage.getItem("id_Rol");
  const { data } = (useObtenerUnTipoUsuarioQuery(id as string));
  //const arr = Object.entries(data);
  console.log(data);
  let rol;
  if(data){
    sessionStorage.setItem("Rol",JSON.stringify(data))
    console.log("Tipo User", data);
    
    rol = JSON.parse(sessionStorage.getItem("Rol"));
    sessionStorage.setItem("NOMBRE_ROL",rol.descripcion_Tipo_Usuario);
  
  }
   

  return (
    
    <LayoutContent
      title={msj}
      rol={rol ? rol.descripcion_Tipo_Usuario : "Admin"}
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Principal"
          titleAdd="Reportes Estadistico"
          titleList="Modulo Administrativo"
          navigateAddTo="/main-menu-assigment"
          navigateListTo="/main-menu-admin"
        />
      </div>
    </LayoutContent>
  );
}

export default MainMenu;