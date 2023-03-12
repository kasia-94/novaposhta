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
import { PaginationComponent } from 'components/Pagination/Pagination';
import { PagBox } from './Address.styled';

export default function Address() {
  const dispatch = useDispatch();

  const [cityInput, setCityInput] = useState('');
  const [address, setAddress] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const result = useSelector(selectAllAddress);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const controller = new AbortController();
    setAddress(result);
    return () => controller.abort();
  }, [result]);

  useEffect(() => {
    const controller = new AbortController();
    setAddress([]);
    return () => controller.abort();
  }, []);

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
    setCurrentPage(1);
  };

  const lastDepartmentIndex = currentPage * itemsPerPage;
  const firstDepartmentIndex = lastDepartmentIndex - itemsPerPage;
  const currentAddress = address.slice(
    firstDepartmentIndex,
    lastDepartmentIndex
  );

  const paginate = (_, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && Notiflix.Notify.failure(`${error.message}`)}
      {!isLoading && (
        <>
          <AddressForm onSubmit={onSubmit} />
          <AddressList address={currentAddress} cityInput={cityInput} />
          <PagBox>
            <PaginationComponent
              address={address.length}
              itemsPerPage={itemsPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          </PagBox>
        </>
      )}
    </>
  );
}
