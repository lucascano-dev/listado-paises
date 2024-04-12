import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const obtnerDatos = async () => {
      try {
        const respuesta = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(respuesta.data);
        console.log(countries);
      } catch (error) {
        console.log('ERROR AL TRAER DATOS');
      }
    };
    obtnerDatos();
  }, []);

  return (
    <div>
      <h1>ALL COUNTRIES</h1>;
      <Row xs={1} lg={3} className="m-3">
        {countries.map((country) => {
          return (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={country.flags.png} />
                <Card.Body>
                  <Card.Title>{country.name.common}</Card.Title>

                  <Button variant="info">
                    <Link to={`/country/${country.name.common}`} className="text-decoration-none text-black">
                      Ver más
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
