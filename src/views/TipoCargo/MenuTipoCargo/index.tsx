import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MainTipoCargo() {
  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Menu Tipo Cargo/Menu"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Tipo Cargo"
          titleAdd="Nuevo Tipo Cargo"
          titleList="Listar Tipo Cargo"
          navigateAddTo="/nuevo-Tipo_Cargo"
          navigateListTo="/listar-Tipo_Cargo"
        />
      </div>
    </LayoutContent>
  );
}

export default MainTipoCargo;