import { Box, CardBox, Text, Title } from './InfoBox.styled';

export default function InfoBox({ status }) {
  return (
    <CardBox>
      {status.Number ? (
        <Box>
          <Title>Номер ТТН:</Title>
          <Text>{status.Number}</Text>
        </Box>
      ) : (
        <Box>
          <Title>Номер ТТН:</Title>
          <Text>Інформація відсутня</Text>
        </Box>
      )}
      {status.Status ? (
        <Box>
          <Title>Статус доставки:</Title>
          <Text>{status.Status}</Text>
        </Box>
      ) : (
        <Box>
          <Title>Статус доставки:</Title>
          <Text>Інформація відсутня</Text>
        </Box>
      )}
      {status.WarehouseSender ? (
        <Box>
          <Title>Відправлено:</Title>
          <Text>{status.WarehouseSender}</Text>
        </Box>
      ) : (
        <Box>
          <Title>Відправлено:</Title>
          <Text>Інформація відсутня</Text>
        </Box>
      )}
      {status.DateCreated ? (
        <Box>
          <Title>Дата відправлення:</Title>
          <Text>{status.DateCreated}</Text>
        </Box>
      ) : (
        <Box>
          <Title>Дата відправлення:</Title>
          <Text>Інформація відсутня</Text>
        </Box>
      )}
      {status.ScheduledDeliveryDate ? (
        <Box>
          <Title>Дата доставки:</Title>
          <Text>{status.ScheduledDeliveryDate}</Text>
        </Box>
      ) : (
        <Box>
          <Title>Дата доставки:</Title>
          <Text>Інформація відсутня</Text>
        </Box>
      )}
      {status.WarehouseRecipient ? (
        <Box>
          <Title>Отримано:</Title>
          <Text>{status.WarehouseRecipient}</Text>
        </Box>
      ) : (
        <Box>
          <Title>Отримано:</Title>
          <Text>Інформація відсутня</Text>
        </Box>
      )}
      {status.RecipientDateTime ? (
        <Box>
          <Title>Дата отримання:</Title>
          <Text>{status.RecipientDateTime}</Text>
        </Box>
      ) : (
        <Box>
          <Title>Дата отримання:</Title>
          <Text>Інформація відсутня</Text>
        </Box>
      )}
    </CardBox>
  );
}
