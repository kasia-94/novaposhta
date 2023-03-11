import HistoryBox from 'components/HistoryBox/HistoryBox';
import InfoBox from 'components/InfoBox/InfoBox';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatus } from 'redux/delivery/operations';
import {
  selectError,
  selectHistoryList,
  selectIsLoading,
  selectStatus,
} from 'redux/delivery/selectors';
import DeliveryForm from 'components/DeliveryForm/DeliveryForm';

export default function Main() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState({});
  const [value, setValue] = useState('');
  const [historyList, setHistoryList] = useState([]);

  const result = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  // const historyList = useSelector(selectHistoryList);

  useEffect(() => {
    const controller = new AbortController();
    setStatus(result);
    return () => controller.abort();
  }, [result]);

  const handleSubmit = value => {
    dispatch(fetchStatus(value));
    setStatus(result);
  };

  const addNumber = item => {
    setHistoryList([...historyList, item]);
  };

  const clearList = () => {
    setHistoryList([]);
    localStorage.setItem('history', JSON.stringify([]));
  };

  const fetchInfo = value => {
    setStatus('');
    dispatch(fetchStatus(value));
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && Notiflix.Notify.failure(`${error.message}`)}
      <DeliveryForm
        onSubmit={handleSubmit}
        addNumber={addNumber}
        value={value}
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
