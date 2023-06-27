import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MenuEscuela   () {
  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla Menu Escuela"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Escuela"
          titleAdd="Agregar Una Escuela"
          titleList="Lista de Escuela"
          navigateAddTo="/nuevo-escuela"
          navigateListTo="/listar-escuela"
        />
      </div>
    </LayoutContent>
  );
}

export default MenuEscuela;