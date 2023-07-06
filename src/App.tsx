import { Routes, Route } from "react-router-dom";

{
  /**Importar todas las vistas de los cruds. */
}

{
  /**Imports Vistas de Menus Principales*/
}
import MainMenu from "./views/MainMenu/MainMenu";
import MainMenuAdmin from "./views/MainMenu/MainMenuAdmin";

{
  /**Imports 1 Menu Principal y CRUD de Departamentos*/
}
import MainDepartamento from "./views/Departamento/MenuDepartamento";
import NuevoDepartamento from "./views/Departamento/NuevoDepartamento";
import ListarDepartamento from "./views/Departamento/ListarDepartamento";
import EditarDepartamento from "./views/Departamento/EditarDepartamento";
import EliminarDepartamento from "./views/Departamento/EliminarDepartamento";

{
  /**Imports 2 Menu Principal y CRUD de TipoCargo*/
}
import MainTipoCargo from "./views/TipoCargo/MenuTipoCargo";
import NuevoTipoCargo from "./views/TipoCargo/NuevoTipoCargo";
import ListarTipoCargo from "./views/TipoCargo/ListarTipoCargo";
import EditarTipoCargo from "./views/TipoCargo/EditarTipoCargo";
import EliminarTipoCargo from "./views/TipoCargo/EliminarTipoCargo";

{
  /**Imports 3 Vistas de Menu Principal y CRUD de TipoUsuario*/
}
import MainTipoUsuario from "./views/TipoUsuario/MenuTipoUsuario";
import NuevoTipoUsuario from "./views/TipoUsuario/NuevoTipoUsuario";
import ListarTipoUsuario from "./views/TipoUsuario/ListarTipoUsuario";
import EditarTipoUsuario from "./views/TipoUsuario/EditarTipoUsuario";
import EliminarTipoUsuario from "./views/TipoUsuario/EliminarTipoUsuario";

{
  /**Imports 4 Vistas de Menu Principal y CRUD de Municipio*/
}
import MainMunicipio from "./views/Municipio/MenuMunicipio";
import NuevoMunicipio from "./views/Municipio/NuevoMunicipio";
import ListarMunicipio from "./views/Municipio/ListarMunicipio";
import EditarMunicipio from "./views/Municipio/EditarMunicipio";
import EliminarMunicipio from "./views/Municipio/EliminarMunicipio";

{
  /**Imports 5 Vistas de Menu Principal y CRUD de Municipio*/
}
import MainPersona from "./views/Persona/MenuPersona";
import NuevoPersona from "./views/Persona/NuevaPersona";
import ListarPersona from "./views/Persona/ListarPersona";
import EditarPersona from "./views/Persona/EditarPersona";
import EliminarPersona from "./views/Persona/EliminarPersona";

{
  /**Imports 6 Vistas de Menu Principal y CRUD de Municipio*/
}
import EliminarRed from "./views/Red/EliminarRed";
import EditarRed from "./views/Red/EditarRed";
import ListarRed from "./views/Red/ListarRed";
import NuevaRed from "./views/Red/NuevoRed";
import MenuRed from "./views/Red/MenuRed";


{
  /**Imports 7 Vistas de Menu Principal y CRUD de Escuela*/
}
import MainEscuela from "./views/Escuela/MenuEscuela";
import NuevoEscuela from "./views/Escuela/NuevaEscuela";
import ListarEscuela from "./views/Escuela/ListarEscuela";
import EditarEscuela from "./views/Escuela/EditarEscuela";
import EliminarEscuela from "./views/Escuela/EliminarEscuela";




{
  /**Imports 7 Vistas de Menu Principal y CRUD de Municipio*/
}
import MainUsuario from "./views/Usuario/MenuUsuario";
import NuevoUsuario from "./views/Usuario/NuevoUsuario";
import ListarUsuario from "./views/Usuario/ListarUsuario";
import EditarUsuario from "./views/Usuario/EditarUsuario";
import EliminarUsuario from "./views/Usuario/EliminarUsuario";
import { Login } from "./views/Login";

import { PrivateRoute } from "./components/PrivateRoute";



{
  /**login*/
}

function App() {
  return (
    <Routes>
      {/**Menus Administrativos */}
      <Route
        index={true}
        path="/main-menu"
        element={
          <PrivateRoute>
            <MainMenu />
          </PrivateRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainMenu />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route
        path="/main-menu-admin"
        element={
          <PrivateRoute>
            <MainMenuAdmin />
          </PrivateRoute>
        }
      />
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
      {/**#1 Departamentos */}
      <Route
        path="/departamento"
        element={
          <PrivateRoute>
            <MainDepartamento />
          </PrivateRoute>
        }
      />
      <Route
        path="/nuevo-departamento"
        element={
          <PrivateRoute>
            <NuevoDepartamento />
          </PrivateRoute>
        }
      />
      <Route
        path="/listar-departamento"
        element={
          <PrivateRoute>
            <ListarDepartamento />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-departamento/:id"
        element={
          <PrivateRoute>
            <EditarDepartamento />
          </PrivateRoute>
        }
      />
      <Route
        path="/eliminar-departamento/:id"
        element={
          <PrivateRoute>
            <EliminarDepartamento />
          </PrivateRoute>
        }
      />

      {/**#2 TipoCargo */}
      <Route
        path="/tipo_cargo"
        element={
          <PrivateRoute>
            <MainTipoCargo />
          </PrivateRoute>
        }
      />
      <Route
        path="/nuevo-tipo_cargo"
        element={
          <PrivateRoute>
            <NuevoTipoCargo />
          </PrivateRoute>
        }
      />
      <Route
        path="/listar-tipo_cargo"
        element={
          <PrivateRoute>
            <ListarTipoCargo />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-tipo_cargo/:id"
        element={
          <PrivateRoute>
            <EditarTipoCargo />
          </PrivateRoute>
        }
      />
      <Route
        path="/eliminar-tipo_cargo/:id"
        element={
          <PrivateRoute>
            <EliminarTipoCargo />
          </PrivateRoute>
        }
      />

      {/**#3 TipoUsuario */}
      <Route
        path="/tipo_usuario"
        element={
          <PrivateRoute>
            <MainTipoUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/nuevo-tipo_usuario"
        element={
          <PrivateRoute>
            <NuevoTipoUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/listar-tipo_usuario"
        element={
          <PrivateRoute>
            <ListarTipoUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-tipo_usuario/:id"
        element={
          <PrivateRoute>
            <EditarTipoUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/eliminar-tipo_usuario/:id"
        element={
          <PrivateRoute>
            <EliminarTipoUsuario />
          </PrivateRoute>
        }
      />

      {/**#4 municipio */}
      <Route
        path="/municipio"
        element={
          <PrivateRoute>
            <MainMunicipio />
          </PrivateRoute>
        }
      />
      <Route
        path="/nuevo-municipio"
        element={
          <PrivateRoute>
            <NuevoMunicipio />
          </PrivateRoute>
        }
      />
      <Route
        path="/listar-municipio"
        element={
          <PrivateRoute>
            <ListarMunicipio />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-municipio/:id"
        element={
          <PrivateRoute>
            <EditarMunicipio />
          </PrivateRoute>
        }
      />
      <Route
        path="/eliminar-municipio/:id"
        element={
          <PrivateRoute>
            <EliminarMunicipio />
          </PrivateRoute>
        }
      />

      {/**#5 red */}
      <Route
        path="/red"
        element={
          <PrivateRoute>
            <MenuRed />
          </PrivateRoute>
        }
      />
      <Route
        path="/nuevo-red"
        element={
          <PrivateRoute>
            <NuevaRed />
          </PrivateRoute>
        }
      />
      <Route
        path="/listar-red"
        element={
          <PrivateRoute>
            <ListarRed />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-red/:id"
        element={
          <PrivateRoute>
            <EditarRed />
          </PrivateRoute>
        }
      />
      <Route
        path="/eliminar-red/:id"
        element={
          <PrivateRoute>
            <EliminarRed />
          </PrivateRoute>
        }
      />

      {/**#6 usuario */}
      <Route
        path="/usuario"
        element={
          <PrivateRoute>
            <MainUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/nuevo-usuario"
        element={
          <PrivateRoute>
            <NuevoUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/listar-usuario"
        element={
          <PrivateRoute>
            <ListarUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-usuario/:id"
        element={
          <PrivateRoute>
            <EditarUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/eliminar-usuario/:id"
        element={
          <PrivateRoute>
            <EliminarUsuario />
          </PrivateRoute>
        }
      />

      {/**#7 persona */}
      <Route
        path="/persona"
        element={
          <PrivateRoute>
            <MainPersona />
          </PrivateRoute>
        }
      />
      <Route
        path="/nuevo-persona"
        element={
          <PrivateRoute>
            <NuevoPersona />
          </PrivateRoute>
        }
      />
      <Route
        path="/listar-persona"
        element={
          <PrivateRoute>
            <ListarPersona />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-persona/:id"
        element={
          <PrivateRoute>
            <EditarPersona />
          </PrivateRoute>
        }
      />
      <Route
        path="/eliminar-persona/:id"
        element={
          <PrivateRoute>
            <EliminarPersona />
          </PrivateRoute>
        }
      />

{/**#1 Escuela */}
<Route
        path="/escuela"
        element={
          <PrivateRoute>
            <MainEscuela />
          </PrivateRoute>
        }
      />
      <Route
        path="/nuevo-escuela"
        element={
          <PrivateRoute>
            <NuevoEscuela />
          </PrivateRoute>
        }
      />
      <Route
        path="/listar-escuela"
        element={
          <PrivateRoute>
            <ListarEscuela />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar-escuela/:id"
        element={
          <PrivateRoute>
            <EditarEscuela />
          </PrivateRoute>
        }
      />
      <Route
        path="/eliminar-escuela/:id"
        element={
          <PrivateRoute>
            <EliminarEscuela />
          </PrivateRoute>
        }
      />




      {/**#Login */}
    </Routes>
  );
}

export default App;
