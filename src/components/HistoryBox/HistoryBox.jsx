import { nanoid } from '@reduxjs/toolkit';
import { Button } from '@mui/material';
import { Box, ListBox, Title } from './HistoryBox.styled';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function HistoryBox({ historyList, fetchInfo, clearList }) {
  return (
    <Box>
      <Title>Історія пошуку</Title>
      <ListBox>
        {historyList.map(item => {
          const id = nanoid();
          return (
            <ListItem key={id} sx={{ padding: 0 }}>
              <ListItemButton onClick={() => fetchInfo(item)}>
                {item}
              </ListItemButton>
            </ListItem>
          );
        })}
        <Button
          variant="contained"
          color="error"
          onClick={clearList}
          sx={{ marginTop: '20px', marginBottom: '10px' }}
        >
          Очистити
        </Button>
      </ListBox>
    </Box>
  );
}
