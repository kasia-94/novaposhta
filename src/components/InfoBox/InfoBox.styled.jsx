import styled from '@emotion/styled';
import Card from '@mui/material/Card';

export const CardBox = styled(Card)`
  padding: 10px;
  background-color: #80808022;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 5px;
  text-transform: uppercase;
`;
export const Text = styled.p`
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
`;
