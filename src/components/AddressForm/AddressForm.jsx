import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { ButtonSubmit, Container } from './AddressForm.styled';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

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
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          color="error"
          name="string"
          value={city}
          onChange={handleChange}
          label="Введіть назву населеного пункту"
        />
        <ButtonSubmit variant="contained" type="submit" color="error">
          {<SearchTwoToneIcon />}
        </ButtonSubmit>
      </form>
    </Container>
  );
}
