import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import List from '@mui/material/List';

export const Box = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 270px;
  padding: 10px;
  background-color: #ff020221;
`;

export const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
`;

export const ListBox = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;
