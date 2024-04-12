import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    const obtnerDatos = async () => {
      try {
        const respuesta = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        setCountry(respuesta.data[0]);
        console.log(respuesta.data[0].name.common);
      } catch (error) {
        console.log('ERROR AL TRAER DATOS');
      }
    };
    obtnerDatos();
  }, []);

  return (
    <>
      <h1>Pais {country.name.common}</h1>
    </>
  );
};
