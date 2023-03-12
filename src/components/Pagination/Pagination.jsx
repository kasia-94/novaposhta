import { Pagination } from '@mui/material';

export const PaginationComponent = ({ address, itemsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(address / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      count={pageNumbers.length}
      color="error"
      onChange={paginate}
      siblingCount={0}
      boundaryCount={1}
      shape="rounded"
    />
  );
};
