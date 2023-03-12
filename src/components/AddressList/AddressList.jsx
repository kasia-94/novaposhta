export default function AddressList({ address, cityInput }) {
  return (
    <>
      <>Відділення у: {cityInput.toUpperCase()}</>
      <ul>
        {address.map(item => {
          return <li key={item.SiteKey}>{item.Description}</li>;
        })}
      </ul>
    </>
  );
}
