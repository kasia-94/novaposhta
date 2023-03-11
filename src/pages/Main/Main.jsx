import HistoryBox from 'components/HistoryBox/HistoryBox';
import InfoBox from 'components/InfoBox/InfoBox';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatus } from 'redux/delivery/operations';
import {
  selectError,
  selectIsLoading,
  selectStatus,
} from 'redux/delivery/selectors';
import DeliveryForm from 'components/DeliveryForm/DeliveryForm';

export default function Main() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState({});
  const [value, setValue] = useState('');

  const result = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const controller = new AbortController();
    setStatus(result);
    return () => controller.abort();
  }, [result]);

  const handleSubmit = value => {
    dispatch(fetchStatus(value));
    setStatus(result);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && Notiflix.Notify.failure(`${error.message}`)}
      <DeliveryForm onSubmit={handleSubmit} value={value} />
      {status && <InfoBox status={status} />}
      <HistoryBox />
    </>
  );
}
