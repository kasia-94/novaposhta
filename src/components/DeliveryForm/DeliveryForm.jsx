import { useState } from 'react';
import Notiflix from 'notiflix';

export default function DeliveryForm({ onSubmit }) {
  const [inputNumber, setInputNumber] = useState('');

  const handleChange = e => {
    setInputNumber(e.target.value);
  };

  const reset = () => {
    setInputNumber('');
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
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputNumber"
          value={inputNumber}
          onChange={handleChange}
          label="Введіть 14-значний номер ТТН"
          pattern="[0-9]{14}"
        />
        <button type="submit">Отримати</button>
      </form>
    </>
  );
}
