import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MainMenu() {
  return (
    <LayoutContent
      title="Bienvenido (a) Estas en la pantalla Menu Principal"
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