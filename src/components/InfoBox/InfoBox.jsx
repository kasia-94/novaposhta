export default function InfoBox({ status }) {
  return (
    <>
      {status.Status ? (
        <p>Статус доставки: {status.Status}</p>
      ) : (
        <>Інформація відсутня</>
      )}
      {status.WarehouseSender ? (
        <p>
          Відправлено:<>{status.WarehouseSender}</>
        </p>
      ) : (
        <>Інформація відсутня</>
      )}
      {status.DateCreated ? (
        <p>
          Дата відправки:<>{status.DateCreated}</>
        </p>
      ) : (
        <>Інформація відсутня</>
      )}
      {status.WarehouseRecipient ? (
        <p>
          Отримано: <>{status.WarehouseRecipient}</>
        </p>
      ) : (
        <>Інформація відсутня</>
      )}
      {status.RecipientDateTime ? (
        <p>
          Дата отримання:<>{status.RecipientDateTime}</>
        </p>
      ) : (
        <>Інформація відсутня</>
      )}
    </>
  );
}
