import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllCountries } from '../components/AllCountries';
import { CountryDetails } from '../components/CountryDetails';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
