import { useState } from 'react';

export default function AddressForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleChange = e => {
    setCity(e.target.value);
  };

  const reset = () => {
    setCity('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(city);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="string"
          value={city}
          onChange={handleChange}
          label="Введіть назву населеного пункту"
        />
        <button type="submit">Шукати</button>
      </form>
    </>
  );
}
