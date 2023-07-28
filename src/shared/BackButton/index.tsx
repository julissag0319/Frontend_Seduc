import { useNavigate } from "react-router-dom";

type Props = {
  path: string;
};

function BackButton({ path }: Props) {

  const Navigate = useNavigate();

  



  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={() => Navigate(-1)}
        className="bg-color-fondo text-black font-bold py-1 px-5 rounded border border-color-fondo">
        Volver
      </button>
    </div>
  );
}

export default BackButton;
