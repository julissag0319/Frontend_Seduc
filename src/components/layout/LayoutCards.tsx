import { ReactNode } from "react";

type LayoutCardsProps = {
  children: ReactNode;
  title: string;
};

function LayoutCards({ children, title }: LayoutCardsProps) { //cuadro en listar
  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-15xl bg-white-100 rounded-md p-8 border-4 border-color-fondo">
        <h2 className="pb-1 text-center font-bold text-2xl">{title}</h2>

        {children}
      </div>
    </div>
  );
}

export default LayoutCards;
