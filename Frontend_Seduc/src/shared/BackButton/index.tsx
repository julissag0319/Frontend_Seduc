import { useNavigate } from "react-router-dom";

type Props = {
  path: string;
};

function BackButton({ path }: Props) {
  const Navigate = useNavigate();

  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={() => Navigate(`${path}`)}
        className="bg-color-fondo text-white font-bold py-1 px-5 rounded border border-color-fondo">
        Volver
      </button>
    </div>
  );
}

export default BackButton;
