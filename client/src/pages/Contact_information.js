import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import csc from 'country-state-city';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BASE_API_URL } from '../utils/constants';
let ID = 0 ; 

const ThirdStep = (props) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      try {
        setIsLoading(true);
        const result = await csc.getAllCountries();
        let allCountries = [];
        allCountries = result?.map(({ isoCode, name }) => ({
          isoCode,
          name
        }));
        const [{ isoCode: firstCountry } = {}] = allCountries;
        setCountries(allCountries);
        setSelectedCountry(firstCountry);
        setIsLoading(false);
      } catch (error) {
        setCountries([]);
        setIsLoading(false);
      }
    };

    getCountries();
  }, []);

  useEffect(() => {
    const getStates = async () => {
      try {
        const result = await csc.getStatesOfCountry(selectedCountry);
        let allStates = [];
        allStates = result?.map(({ isoCode, name }) => ({
          isoCode,
          name
        }));
        const [{ isoCode: firstState = '' } = {}] = allStates;
        setCities([]);
        setSelectedCity('');
        setStates(allStates);
        setSelectedState(firstState);
      } catch (error) {
        setStates([]);
        setCities([]);
        setSelectedCity('');
      }
    };

    getStates();
  }, [selectedCountry]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const result = await csc.getCitiesOfState(
          selectedCountry,
          selectedState
        );
        let allCities = [];
        allCities = result?.map(({ name }) => ({
          name
        }));
        const [{ name: firstCity = '' } = {}] = allCities;
        setCities(allCities);
        setSelectedCity(firstCity);
      } catch (error) {
        setCities([]);
      }
    };

    getCities();
  }, [selectedState]);

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = props;
      const updatedData = {
        country: countries.find(
          (country) => country.isoCode === selectedCountry
        )?.name,
        state:
          states.find((state) => state.isoCode === selectedState)?.name || '', 
        city: selectedCity
      };

      await axios.post('http://localhost:5000/api/applicants/register', {
        ...user,
        ...updatedData,
        ...++ID
      });
      Swal.fire('Registered!', "You're ID Number is (100-"+ ID +")", 'success').then(
        (result) => {
          if (result.isConfirmed || result.isDismissed) {
            props.resetUser();
            props.history.push('/');
          }
        }
      );
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        });
        console.log('error', error.response.data);
      }
    }
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="country">
          {isLoading && (
            <p className="loading">Loading countries. Please wait...</p>
          )}
          <Form.Label>Country</Form.Label>
          <Form.Control
            as="select"
            name="country"
            value={selectedCountry}
            onChange={(event) => setSelectedCountry(event.target.value)}
          >
            {countries.map(({ isoCode, name }) => (
              <option value={isoCode} key={isoCode}>
                {name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            name="state"
            value={selectedState}
            onChange={(event) => setSelectedState(event.target.value)}
          >
            {states.length > 0 ? (
              states.map(({ isoCode, name }) => (
                <option value={isoCode} key={isoCode}>
                  {name}
                </option>
              ))
            ) : (
              <option value="" key="">
                No state found
              </option>
            )}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            as="select"
            name="city"
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
          >
            {cities.length > 0 ? (
              cities.map(({ name }) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))
            ) : (
              <option value="">No cities found</option>
            )}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Done
        </Button>
      </div>
    </Form>
  );
};

export default ThirdStep;
