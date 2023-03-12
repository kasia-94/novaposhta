import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import Menu from 'components/Menu/Menu';
import Address from 'pages/Address/Address';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/address" element={<Address />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
        <Footer />
      </Suspense>
    </>
  );
};
