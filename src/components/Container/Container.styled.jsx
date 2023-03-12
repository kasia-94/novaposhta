import styled from '@emotion/styled';

export const ContainerBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 290px;
  min-height: 550px;

  @media screen and (min-width: 768px) {
    width: 738px;
    min-height: 625px;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
`;
