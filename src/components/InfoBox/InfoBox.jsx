export default function InfoBox({ status }) {
  return (
    <>
      {status.Status ? (
        <p>Статус доставки: {status.Status}</p>
      ) : (
        <p>Статус доставки: Інформація відсутня</p>
      )}
      {status.WarehouseSender ? (
        <p>
          Відправлено: <>{status.WarehouseSender}</>
        </p>
      ) : (
        <p>Відправлено: Інформація відсутня</p>
      )}
      {status.DateCreated ? (
        <p>
          Дата відправки:<>{status.DateCreated}</>
        </p>
      ) : (
        <p>Дата відправки: Інформація відсутня</p>
      )}
      {status.WarehouseRecipient ? (
        <p>
          Отримано: <>{status.WarehouseRecipient}</>
        </p>
      ) : (
        <p>Отримано: Інформація відсутня</p>
      )}
      {status.RecipientDateTime ? (
        <p>
          Дата отримання:<>{status.RecipientDateTime}</>
        </p>
      ) : (
        <p>Дата отримання: Інформація відсутня</p>
      )}
    </>
  );
}
