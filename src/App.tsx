import { Routes, Route } from "react-router-dom";

{/**Importar todas las vistas de los cruds. */}
{/**Imports Vistas de Menus Principales*/}
import MainMenu from "./views/MainMenu/MainMenu";
import MainMenuAdmin from "./views/MainMenu/MainMenuAdmin";

{/**Imports 1 Menu Principal y CRUD de Departamentos*/}
import MainDepartamento from "./views/Departamento/MenuDepartamento";
import NuevoDepartamento from "./views/Departamento/NuevoDepartamento";
import ListarDepartamento from "./views/Departamento/ListarDepartamento";
import EditarDepartamento from "./views/Departamento/EditarDepartamento";
import EliminarDepartamento from "./views/Departamento/EliminarDepartamento";

{/**Imports 2 Menu Principal y CRUD de TipoCargo*/}
import MainTipoCargo from "./views/TipoCargo/MenuTipoCargo";
import NuevoTipoCargo from "./views/TipoCargo/NuevoTipoCargo";
import ListarTipoCargo from "./views/TipoCargo/ListarTipoCargo";
import EditarTipoCargo from "./views/TipoCargo/EditarTipoCargo";
import EliminarTipoCargo from "./views/TipoCargo/EliminarTipoCargo";

{/**Imports 3 Vistas de Menu Principal y CRUD de TipoUsuario*/}
import MainTipoUsuario from "./views/TipoUsuario/MenuTipoUsuario";
import NuevoTipoUsuario from "./views/TipoUsuario/NuevoTipoUsuario";
import ListarTipoUsuario from "./views/TipoUsuario/ListarTipoUsuario";
import EditarTipoUsuario from "./views/TipoUsuario/EditarTipoUsuario";
import EliminarTipoUsuario from "./views/TipoUsuario/EliminarTipoUsuario";

{/**Imports 4 Vistas de Menu Principal y CRUD de Municipio*/}
import MainMunicipio from "./views/Municipio/MenuMunicipio";
import NuevoMunicipio from "./views/Municipio/NuevoMunicipio";
import ListarMunicipio from "./views/Municipio/ListarMunicipio";
import EditarMunicipio from "./views/Municipio/EditarMunicipio";
import EliminarMunicipio from "./views/Municipio/EliminarMunicipio";

{/**Imports 5 Vistas de Menu Principal y CRUD de Municipio*/}
import MainPersona from "./views/Persona/MenuPersona";
import NuevoPersona from "./views/Persona/NuevaPersona";
import ListarPersona from "./views/Persona/ListarPersona";
import EditarPersona from "./views/Persona/EditarPersona";
import EliminarPersona from "./views/Persona/EliminarPersona";

{/**Imports 6 Vistas de Menu Principal y CRUD de Municipio*/}
import EliminarRed from "./views/Red/EliminarRed";
import EditarRed from "./views/Red/EditarRed";
import ListarRed from "./views/Red/ListarRed";
import NuevaRed from "./views/Red/NuevoRed";
import MenuRed from "./views/Red/MenuRed";

{/**Imports 7 Vistas de Menu Principal y CRUD de Municipio*/}
import MainUsuario from "./views/Usuario/MenuUsuario";
import NuevoUsuario from "./views/Usuario/NuevoUsuario";
import ListarUsuario from "./views/Usuario/ListarUsuario";
import EditarUsuario from "./views/Usuario/EditarUsuario";
import EliminarUsuario from "./views/Usuario/EliminarUsuario";


{/**login*/}




function App() {
  return (
    <Routes> 
      {/**Menus Administrativos */}
      <Route index={true} path="/main-menu" element={<MainMenu/>} />
      <Route path="/main-menu-admin" element={<MainMenuAdmin/>} />


      {/**#1 Departamentos */}
      <Route path="/departamento" element={<MainDepartamento />}/>
      <Route path="/nuevo-departamento" element={<NuevoDepartamento />} />
      <Route path="/listar-departamento" element={<ListarDepartamento />} />
      <Route path="/editar-departamento/:id" element={<EditarDepartamento />} />
      <Route path="/eliminar-departamento/:id" element={<EliminarDepartamento />}/>

       {/**#2 TipoCargo */}
       <Route path="/tipo_cargo" element={<MainTipoCargo />}/>
      <Route path="/nuevo-tipo_cargo" element={<NuevoTipoCargo />} />
      <Route path="/listar-tipo_cargo" element={<ListarTipoCargo />} />
      <Route path="/editar-tipo_cargo/:id" element={<EditarTipoCargo />} />
      <Route path="/eliminar-tipo_cargo/:id" element={<EliminarTipoCargo />}/>

       {/**#3 TipoUsuario */}
       <Route path="/tipo_usuario" element={<MainTipoUsuario />}/>
      <Route path="/nuevo-tipo_usuario" element={<NuevoTipoUsuario />} />
      <Route path="/listar-tipo_usuario" element={<ListarTipoUsuario />} />
      <Route path="/editar-tipo_usuario/:id" element={<EditarTipoUsuario />} />
      <Route path="/eliminar-tipo_usuario/:id" element={<EliminarTipoUsuario />}/>

      {/**#4 municipio */}
      <Route path="/municipio" element={<MainMunicipio />}/>
      <Route path="/nuevo-municipio" element={<NuevoMunicipio />} />
      <Route path="/listar-municipio" element={<ListarMunicipio />} />
      <Route path="/editar-municipio/:id" element={<EditarMunicipio/>} />
      <Route path="/eliminar-municipio/:id" element={<EliminarMunicipio />}/>

      {/**#5 red */}
      <Route path="/red" element={<MenuRed />}/>
      <Route path="/nuevo-red" element={<NuevaRed />} />
      <Route path="/listar-red" element={<ListarRed />} />
      <Route path="/editar-red/:id" element={<EditarRed/>} />
      <Route path="/eliminar-red/:id" element={<EliminarRed />}/>

      {/**#6 usuario */}
      <Route path="/usuario" element={<MainUsuario />}/>
      <Route path="/nuevo-usuario" element={<NuevoUsuario />} />
      <Route path="/listar-usuario" element={<ListarUsuario/>} />
      <Route path="/editar-usuario/:id" element={<EditarUsuario/>} />
      <Route path="/eliminar-usuario/:id" element={<EliminarUsuario />}/>


      {/**#7 persona */}
      <Route path="/persona" element={<MainPersona />}/>
      <Route path="/nuevo-persona" element={<NuevoPersona />} />
      <Route path="/listar-persona" element={<ListarPersona />} />
      <Route path="/editar-persona/:id" element={<EditarPersona/>} />
      <Route path="/eliminar-persona/:id" element={<EliminarPersona />}/>
      
      {/**#Login */}






    </Routes>
  );
}

export default App;