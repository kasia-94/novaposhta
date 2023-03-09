import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <Link to="/">Перевірити ТТН</Link>
      <Link to="/address">Список відділень</Link>
    </>
  );
}
