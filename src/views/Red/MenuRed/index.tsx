import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MenuRed() {
  return (
    <LayoutContent
      title="Bienvenido(a) Estas en el pantalla de: Red/Menu"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Red"
          titleAdd="Agregar un Red"
          titleList="Listar los Red"
          navigateAddTo="/nuevo-red"
          navigateListTo="/listar-red"
        />
      </div>
    </LayoutContent>
  );
}

export default MenuRed;