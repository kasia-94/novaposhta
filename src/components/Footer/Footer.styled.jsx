import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Toolbar from '@mui/material/Toolbar';

export const LinkBox = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const LinkItem = styled(Link)`
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Image = styled.img`
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
`;
