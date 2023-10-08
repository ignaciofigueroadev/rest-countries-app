// Components import

// Icon import
import SadFace from "../../public/icons/sad.svg";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return (
    <div className="text-color mt-10 p flex flex-col justify-center items-center gap-4">
      <img src={SadFace} alt="Not found" className="w-80" />
      <p className="text-center font-semibold text-4xl">{message}</p>
      <p className="text-center text-1xl">Maybe you've wrote wrong</p>
    </div>
  );
};

export default Error;
