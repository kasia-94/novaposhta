import { Title } from './AddressList.styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function AddressList({ address, cityInput }) {
  return (
    <>
      {cityInput ? <Title>{cityInput.toUpperCase()}</Title> : <></>}

      <List>
        {address.map(item => {
          return <ListItem key={item.SiteKey}>{item.Description}</ListItem>;
        })}
      </List>
    </>
  );
}
