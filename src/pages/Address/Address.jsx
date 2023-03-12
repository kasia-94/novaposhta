import AddressForm from 'components/AddressForm/AddressForm';
import AddressList from 'components/AddressList/AddressList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from 'redux/address/operations';
import {
  selectAllAddress,
  selectError,
  selectIsLoading,
} from 'redux/address/selectors';
import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';

export default function Address() {
  const dispatch = useDispatch();

  const [cityInput, setCityInput] = useState('');
  const [address, setAddress] = useState([]);

  const result = useSelector(selectAllAddress);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const controller = new AbortController();
    setAddress(result);
    return () => controller.abort();
  }, [result]);

  const onSubmit = cityInput => {
    setAddress([]);
    const optimizedCity = cityInput.trim().toLowerCase();

    if (cityInput.trim() === '') {
      Notiflix.Notify.failure('Введіть назву населеного пункту');
      setAddress([]);
      return;
    }

    dispatch(fetchAddress(optimizedCity));
    setCityInput(optimizedCity);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && Notiflix.Notify.failure(`${error.message}`)}
      <AddressForm onSubmit={onSubmit} />
      <AddressList address={address} cityInput={cityInput} />
    </>
  );
}
