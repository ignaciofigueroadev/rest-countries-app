import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ENDPOINT_GET } from "../api/rest-countries";

// Types import
import { CountryInfo } from "../types/types";

// Component imports
import GoBack from "../components/GoBack";
import Spinner from "../components/Spinner";

const SpecificCountry = () => {
  const [country, setCountry] = useState<CountryInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${ENDPOINT_GET}/name/${countryName}`);

        if (!res.ok) throw new Error("Country not found!");

        const data = await res.json();

        setCountry(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getCountryByName();
  }, [countryName]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="p-5">
        <GoBack />
      </div>
      <div className="bg-bkg p-5 flex flex-col gap-5 lg:flex-row lg:justify-center">
        {country?.map((country, index) => (
          <div
            className="text-color flex flex-col gap-5 lg:flex-row lg:gap-16"
            key={index}
          >
            <img
              src={country.flags.svg}
              alt={country.name.official}
              title={country.name.official}
              className="w-[40rem]"
            />

            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-3xl py-5">
                {country.name.official}
              </h3>
              <h3>
                Population: <span>{country.population.toLocaleString()}</span>
              </h3>
              <h3>
                Region: <span>{country.region}</span>
              </h3>
              <h3>
                Sub Region: <span>{country.subregion}</span>
              </h3>
              <h3>
                Capital: <span>{country.capital}</span>
              </h3>
              <div className="flex flex-col gap-5 mt-6">
                <h3>
                  Top level domain: <span>{country.tld}</span>{" "}
                </h3>
                <h3>
                  Currencies:{" "}
                  <span>{country.currencies.XPF?.name || "Not available"}</span>{" "}
                </h3>
                <h3>
                  Languages:{" "}
                  <span>{Object.values(country.languages).join(", ")}</span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SpecificCountry;
