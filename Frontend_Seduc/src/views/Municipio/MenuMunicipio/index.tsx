import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MainMunicipio() {
  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Municipio/Menu"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Municipio"
          titleAdd="Nuevo Municipio"
          titleList="Listar Municipio"
          navigateAddTo="/nuevo-Municipio"
          navigateListTo="/listar-Municipio"
        />
      </div>
    </LayoutContent>
  );
}

export default MainMunicipio;