import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { LinkBox, Text, Image, Title } from './Footer.styled';
import logo from '../../images/98904a4b933ef83d47069817326c5a1c.png';

export default function Footer() {
  return (
    <Box sx={{ flex: 1, justifyContent: 'flex-end' }}>
      <AppBar position="static" color="error">
        <LinkBox>
          <Text>
            <Title>2006–2023</Title> <Title>ТзОВ «Нова Пошта»</Title>
          </Text>

          <Image src={logo} alt="logo" />

          <Text>
            <Title>Центр підтримки клієнтів</Title>{' '}
            <Title>+38 098 4 500 609</Title>
          </Text>
        </LinkBox>
      </AppBar>
    </Box>
  );
}
