// Hook imports
import { useEffect, useState } from "react";

// API
import {
  API_URL_ALL_COUNTRIES,
  API_URL_COUNTRY_NAME,
  ENDPOINT_GET,
} from "../api/rest-countries";

// Component imports
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

// Types
import { Country } from "../types/types";

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await fetch(API_URL_ALL_COUNTRIES);
        const data = await response.json();
        setCountries(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError("Something wrong has happened, try again later");
      }
    };
    getAllCountries();
  }, []);

  const getCountryByName = async (countryName: string) => {
    try {
      if (countryName.trim() === "") {
        const response = await fetch(API_URL_ALL_COUNTRIES);
        const data = await response.json();
        setCountries(data);
        setLoading(false);
        setError(null);
        return;
      }

      const res = await fetch(`${API_URL_COUNTRY_NAME}/${countryName}`);
      if (!res.ok) {
        setError("Country not found");
        return;
      }
      const data = await res.json();
      setCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("Country not found");
    }
  };

  const getCountryByRegion = async (regionName: string) => {
    try {
      const res = await fetch(`${ENDPOINT_GET}/region/${regionName}`);
      if (!res.ok) {
        setError("Region not found");
        return;
      }
      const data = await res.json();
      setCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("Region not found");
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div>
        <div className="bg-bkg flex flex-col gap-3 px-5 lg:flex-row justify-between lg:px-24">
          <Search onSearch={getCountryByName} />
          <Filter onSelect={getCountryByRegion} />
        </div>
        <Error message={error} />
      </div>
    );
  }

  return (
    <div className="bg-bkg">
      <div className="flex flex-col gap-3 px-5 lg:flex-row justify-center">
        <Search onSearch={getCountryByName} />
        <Filter onSelect={getCountryByRegion} />
      </div>
      <div className="bg-bkg grid gap-16 justify-center items-center grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-26">
        {countries.map((country) => (
          <div
            className="flex flex-col justify-evenly items-center"
            key={country.name.official}
          >
            <Link to={`/country/${country.name.official}`}>
              <Card
                flag={country.flags?.svg}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
