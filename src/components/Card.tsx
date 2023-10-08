type Props = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

const Card = ({ flag, name, population, region, capital }: Props) => {
  return (
    <div className="bg-element text-color w-80 h-[30rem] rounded-lg hover:-translate-y-3 duration-100">
      <img
        src={flag}
        alt={name}
        className="rounded-t-lg w-full h-1/2 object-cover"
      />
      <div className="flex flex-col gap-5 px-12 py-10">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p>
          Population:{" "}
          <span className="opacity-75">{population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span className="opacity-75">{region}</span>
        </p>
        <p>
          Capital: <span className="opacity-75">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
