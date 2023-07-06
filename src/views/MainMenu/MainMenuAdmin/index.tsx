import LayoutContent from "@/components/layout";
import MainLayout from "@/components/layout/MainLayout";

function Menu() {
  return (
    <LayoutContent
      title=" Bienvenido Estas en la Pantalla Principal"
      icon="Icono"
      iconRight="Otro icono">
      <div className="h-auto">
        <MainLayout
            title="Menu Principal"
            title1="Módulo Departamento"
            title2="Módulo Tipo Cargo"
            title3="Módulo Tipo Usuario"
            title4="Módulo Municipio"
            title5="Módulo Red"
            title6="Módulo Usuario"
            title7="Módulo Persona"
            title8="Módulo Escuela"
            title9="Estadistica"

            navigate1="/departamento"
            navigate2="/tipo_cargo"
            navigate3="/tipo_usuario"
            navigate4="/municipio"
            navigate5="/red"
            navigate6="/usuario"
            navigate7="/persona"  
            navigate8="/escuela"
            navigate9="/estadistica"
        />
      </div>
    </LayoutContent>
  );
}

export default Menu;