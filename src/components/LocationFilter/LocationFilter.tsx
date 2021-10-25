import React, { useEffect } from 'react';
//styles
import { Input } from 'components/Input';
import { Form, Title } from './LocationFilter.styles';
//icons
import { BiWorld } from 'react-icons/bi';
import { useState } from 'react';

interface Props {
  location: string;
  dispatchLocation: (v: string) => void;
}

const LocationFilter = ({ location, dispatchLocation }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [activeCities, setActiveCities] = useState([
    { name: 'London', value: 'london', isChecked: true },
    { name: 'Amsterdam', value: 'amsterdam', isChecked: false },
    { name: 'New York', value: 'newYork', isChecked: false },
    { name: 'Berlin', value: 'berlin', isChecked: false },
  ]);
  const handleChange = (value: string, isChecked: boolean) => {
    const newCities = activeCities.map((city) => {
      if (city.value === value) {
        return { ...city, isChecked };
      }
      return city;
    });
    setActiveCities(newCities);
  };

  useEffect(() => {
    dispatchLocation(inputValue);
  }, [inputValue, dispatchLocation]);

  return (
    <>
      <Title>Location</Title>
      <Form>
        <div>
          <BiWorld className="icon" />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        {activeCities.map((city) => (
          <span key={city.value}>
            <input
              type="radio"
              name="city"
              id={city.value}
              checked={city.isChecked}
              onChange={() => handleChange(city.value, !city.isChecked)}
            />
            <label htmlFor={city.value}>{city.name}</label>
          </span>
        ))}
      </Form>
    </>
  );
};

export { LocationFilter };
