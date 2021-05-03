import React from 'react';
//styles
import { Input } from 'components/Input';
import { Form, Title } from './LocationFilter.styles';
//icons
import { BiWorld } from 'react-icons/bi';
import { useState } from 'react';

const LocationFilter = () => {
  const [activeCities, setActiveCities] = useState({
    london: false,
    amsterdam: false,
    newYork: false,
    berlin: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setActiveCities({
      ...activeCities,
      [e.currentTarget.id]: e.target.checked,
    });
  };

  return (
    <>
      <Title>Location</Title>
      <Form>
        <div>
          <BiWorld className="icon" />
          <Input />
        </div>
        <span>
          <input
            type="radio"
            name="city"
            id="london"
            checked={activeCities.london}
            onChange={handleChange}
          />
          <label htmlFor="london">London</label>
        </span>
        <span>
          <input
            type="radio"
            name="city"
            id="amsterdam"
            checked={activeCities.amsterdam}
            onChange={handleChange}
          />
          <label htmlFor="amsterdam">Amsterdam</label>
        </span>
        <span>
          <input
            type="radio"
            name="city"
            id="newYork"
            checked={activeCities.newYork}
            onChange={handleChange}
          />
          <label htmlFor="newYork">New York</label>
        </span>
        <span>
          <input
            type="radio"
            name="city"
            id="berlin"
            checked={activeCities.berlin}
            onChange={handleChange}
          />
          <label htmlFor="berlin">Berlin</label>
        </span>
      </Form>
    </>
  );
};

export { LocationFilter };
