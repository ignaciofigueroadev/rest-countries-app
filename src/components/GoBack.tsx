// Component imports
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Link
      to={"/"}
      className="flex justify-center items-center p-3 bg-element text-color w-44 shadow-bkg shadow-2xl"
    >
      <p>🢀 Back</p>
    </Link>
  );
};

export default GoBack;
