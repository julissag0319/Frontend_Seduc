import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MainUsuario() {
  return (
    <LayoutContent
      title="Bienvemido (a) Estas estas en la pantalla: Usuario/Listar"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Usuarios de Acceso"
          titleAdd="Agregar Usuario de Acceso"
          titleList="Listar Usuarios de Acceso"
          navigateAddTo="/nuevo-usuario"
          navigateListTo="/listar-usuario"
        />
      </div>
    </LayoutContent>
  );
}

export default MainUsuario;