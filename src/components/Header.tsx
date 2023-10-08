// Hook imports
import { useEffect, useState } from "react";

// Link (React router) import
import { Link } from "react-router-dom";

// Icon imports
import DarkThemeMoon from "/public/icons/moon-dark.svg";
import LightThemeMoon from "/public/icons/moon-light.svg";

const Header = () => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className="w-screen px-12 py-5 bg-element text-color flex justify-between items-center font-nunito lg:px-12 lg:py-8">
      <h1 className="font-bold lg:text-3xl">
        <Link to={"/"}>Where in the world?</Link>
      </h1>

      <button onClick={toggleTheme}>
        <img
          src={`${theme === "light" ? DarkThemeMoon : LightThemeMoon}`}
          alt="Theme"
          className="w-10"
        />
      </button>
    </header>
  );
};

export default Header;
