interface Props {
    message: string;
  }
  
  function ErrorMessage({ message }: Props) {
    return (
      <div className="w-full">
        <p className="py-6 -mt-7 text-center text-base text-color-fondo font">
          {message}
        </p>
      </div>
    );
  }
  
  export default ErrorMessage;
  