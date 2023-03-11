export default function HistoryBox({ listDelivery }) {
  return (
    <>
      <>Історія</>
      <ul>
        {listDelivery.map(item => {
          return (
            <li>
              <button></button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
