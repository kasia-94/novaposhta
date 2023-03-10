import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { ButtonSubmit, Container, Input } from './DeliveryForm.styled';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

export default function DeliveryForm({ onSubmit, valueHistoryList }) {
  const [inputNumber, setInputNumber] = useState('');

  useEffect(() => {
    setInputNumber(valueHistoryList);
  }, [valueHistoryList]);

  const handleChange = e => {
    setInputNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputNumber.trim() === '') {
      return Notiflix.Notify.info('Введіть номер ТТН');
    }

    if (inputNumber.length < 14 || inputNumber.length > 14) {
      return Notiflix.Notify.info('Невірний ТТН. Має бути 14 символів');
    }
    onSubmit(inputNumber);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          variant="outlined"
          color="error"
          type="text"
          name="inputNumber"
          value={inputNumber}
          onChange={handleChange}
          label="Введіть 14-значний номер ТТН"
          pattern="[0-9]{14}"
          focused
        />
        <ButtonSubmit variant="contained" type="submit" color="error">
          {<SearchTwoToneIcon />}
        </ButtonSubmit>
      </form>
    </Container>
  );
}
