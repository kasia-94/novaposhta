import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { LinkItem, LinkBox, Text, Image } from './Footer.styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import logo from '../../images/98904a4b933ef83d47069817326c5a1c.png';

export default function Footer() {
  return (
    <Box sx={{ flex: 1, justifyContent: 'flex-end' }}>
      <AppBar position="static" color="error">
        <LinkBox>
          <Text>2006–2023 ТОВ «Нова Пошта»</Text>

          <Image src={logo} alt="logo" />

          <Text>ЦЕНТР ПІДТРИМКИ КЛІЄНТІВ +38 098 4 500 609</Text>
        </LinkBox>
      </AppBar>
    </Box>
  );
}
