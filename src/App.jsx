import Container from 'components/Container/Container';
import Menu from 'components/Menu/Menu';
import Address from 'pages/Address/Address';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';

export const App = () => {
  return (
    <>
      <Suspense>
        <Container>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/address" element={<Address />} />
          </Routes>
        </Container>
      </Suspense>
    </>
  );
};
