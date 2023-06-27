import LayoutContent from "@/components/layout";
import BasicLayout from "@/components/layout/BasicLayout";

function MenuPersona   () {
  return (
    <LayoutContent
      title="Bienvenido(a) Estas en la Pantalla Menu Persona"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <BasicLayout
          title="Menu Persona"
          titleAdd="Agregar Una Persona"
          titleList="Lista de Persona"
          navigateAddTo="/nuevo-persona"
          navigateListTo="/listar-persona"
        />
      </div>
    </LayoutContent>
  );
}

export default MenuPersona;