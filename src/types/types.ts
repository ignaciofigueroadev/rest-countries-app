export interface Country {
  flags: {
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string;
}

export interface CountryInfo {
  flags: {
    svg: string;
  };
  name: {
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  currencies: {
    XPF: {
      name: string;
    };
  };
  languages: string;
}
