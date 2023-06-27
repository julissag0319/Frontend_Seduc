import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MainTipoUsuario() {
  return (
    <LayoutContent
      title="Bienvenido Estas en la Pantalla: Menu Tipo Usuario/Menu"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Tipo Usuario"
          titleAdd="Nuevo Tipo Usuario"
          titleList="Listar Tipo Usuario"
          navigateAddTo="/nuevo-tipo_usuario"
          navigateListTo="/listar-tipo_usuario"
        />
      </div>
    </LayoutContent>
  );
}

export default MainTipoUsuario;