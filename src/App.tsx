// Component imports
import Header from "./components/Header";

// React router dom imports
import { Route, Routes } from "react-router";

// Pages
import Countries from "./pages/Countries";
import SpecificCountry from "./pages/SpecificCountry";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country" element={<SpecificCountry />} />
        <Route path="/country/:countryName" element={<SpecificCountry />} />
      </Routes>
    </>
  );
}

export default App;
