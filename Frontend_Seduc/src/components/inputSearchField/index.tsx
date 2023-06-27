import { useRef } from "react";

type FormProps = {
  onSubmitHandle: (value: string) => void;
  filterText: string;
};

function InputSearchField({ onSubmitHandle, filterText }: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandle(inputRef?.current?.value!);
  };

  return (
    <div className="my-5">
      <form
        onSubmit={handleSubmit}
        className="flex items-center shadow-md p-3 space-x-5 border border-color-fondo rounded-l1g">
        <label className="block mb-2 font-bold text-black">
          {filterText}
        </label>
        <input className="input-styles" ref={inputRef} type="text bg-white" />
      </form>
    </div>
  );
}

export default InputSearchField;
