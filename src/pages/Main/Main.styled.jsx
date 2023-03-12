import styled from '@emotion/styled';

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
`;
