import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { LinkItem, LinkBox, Text } from './Menu.styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error">
        <LinkBox>
          <LinkItem to="/">
            {<PendingActionsIcon />}
            <Text>Перевірити ТТН</Text>
          </LinkItem>
          <LinkItem to="/address">
            {<LocationOnIcon />}
            <Text>Список відділень</Text>
          </LinkItem>
        </LinkBox>
      </AppBar>
    </Box>
  );
}
