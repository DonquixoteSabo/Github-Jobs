import React from 'react';
//styles
import { Input } from 'components/Input';
import { Form, Title } from './LocationFilter.styles';
//icons
import { BiWorld } from 'react-icons/bi';

const cities = ['London', 'Amsterdam', 'New York', 'Berlin'];

const LocationFilter = () => {
  return (
    <>
      <Title>Location</Title>
      <Form>
        <div>
          <BiWorld className="icon" />
          <Input />
        </div>
        {cities.map((city) => (
          <span>
            <input type="checkbox" name={city} id={city} />
            <label htmlFor={city}>{city}</label>
          </span>
        ))}
      </Form>
    </>
  );
};

export { LocationFilter };
