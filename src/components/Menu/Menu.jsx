import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { LinkItem, LinkBox, Text, Image } from './Menu.styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import logo from '../../images/98904a4b933ef83d47069817326c5a1c.png';

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error">
        <LinkBox>
          <LinkItem to="/">
            {<PendingActionsIcon />}
            <Text>Перевірити ТТН</Text>
          </LinkItem>
          <Image src={logo} alt="logo" />
          <LinkItem to="/address">
            {<LocationOnIcon />}
            <Text>Список відділень</Text>
          </LinkItem>
        </LinkBox>
      </AppBar>
    </Box>
  );
}
