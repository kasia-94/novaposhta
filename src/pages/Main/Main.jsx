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
  const [historyList, setHistoryList] = useState(() => {
    return JSON.parse(window.localStorage.getItem('history')) ?? [];
  });
  const [valueHistoryList, setValueHistoryList] = useState('');

  const result = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (historyList) {
      localStorage.setItem('history', JSON.stringify(historyList));
    }
    setStatus(result);
  }, [historyList, result]);

  const handleSubmit = value => {
    const repeatedNumber = historyList.some(
      number => number.trim() === value.trim()
    );
    if (repeatedNumber) {
      return Notiflix.Notify.info('Такий номер вже шукали!');
    }
    dispatch(fetchStatus(value));
    setStatus(result);
    setHistoryList([...historyList, value]);
  };

  const clearList = () => {
    setHistoryList([]);
    localStorage.setItem('history', JSON.stringify([]));
  };

  const fetchInfo = value => {
    setStatus('');
    dispatch(fetchStatus(value));
    setValueHistoryList(value);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && Notiflix.Notify.failure(`${error.message}`)}
      <DeliveryForm
        onSubmit={handleSubmit}
        addNumber={handleSubmit}
        valueHistoryList={valueHistoryList}
      />
      {status && <InfoBox status={status} />}
      {historyList && (
        <HistoryBox
          historyList={historyList}
          clearList={clearList}
          fetchInfo={fetchInfo}
        />
      )}
    </>
  );
}
