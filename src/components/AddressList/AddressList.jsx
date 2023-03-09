import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from 'redux/address/operations';
import { selectAllAddress } from 'redux/address/selectors';

export default function AddressList() {
  const dispatch = useDispatch();

  const [address, setAddress] = useState([]);
  const result = useSelector(selectAllAddress);

  useEffect(() => {
    dispatch(fetchAddress());
    setAddress(result);
  }, [dispatch, result]);

  return (
    <>
      <>Список відділень</>
      <ul>
        {address.map(item => {
          return <li key={item.SiteKey}>{item.Description}</li>;
        })}
      </ul>
    </>
  );
}
