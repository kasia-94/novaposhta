import { nanoid } from '@reduxjs/toolkit';

export default function HistoryBox({ historyList, fetchInfo, clearList }) {
  return (
    <>
      <>Історія</>
      <ul>
        {historyList.map(item => {
          const id = nanoid();
          return (
            <li key={id}>
              <button onClick={() => fetchInfo(item)}>{item}</button>
            </li>
          );
        })}
        <button onClick={clearList}>Очистити</button>
      </ul>
    </>
  );
}
