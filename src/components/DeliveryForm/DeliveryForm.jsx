import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

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
