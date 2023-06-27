import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MainDepartamento() {
  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla: Departamentos/Menu"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Departamento"
          titleAdd="Nuevo Departamento"
          titleList="Listar Departamento"
          navigateAddTo="/nuevo-departamento"
          navigateListTo="/listar-departamento"
        />
      </div>
    </LayoutContent>
  );
}

export default MainDepartamento;