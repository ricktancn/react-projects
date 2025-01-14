import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState("10");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleCurrencyFromChange(event) {
    setCurrencyFrom(event.target.value);
  }

  function handleCurrencyToChange(event) {
    setCurrencyTo(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function convert() {
        setIsLoading(true);
        //fetch data
        try {
          if (!amount || !currencyFrom || !currencyTo || amount < 0) return;

          if (currencyFrom === currencyTo) {
            setResult(amount);

            return;
          }

          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyFrom}&to=${currencyTo}`,
            { signal: controller.signal }
          );

          if (!response.ok) {
            throw new Error("Something went wrong during conversion");
          }

          const data = await response.json();
          setResult(data.rates[currencyTo]);
          console.log(data);
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      convert();
      //run the cleanup function after calling the async function
      return function () {
        controller.abort();
      };
    },
    [amount, currencyFrom, currencyTo]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={handleAmountChange}
        disabled={isLoading}
      />
      <CurrencySelector
        currency={currencyFrom}
        onChange={handleCurrencyFromChange}
        disabled={isLoading}
      />
      <CurrencySelector
        currency={currencyTo}
        onChange={handleCurrencyToChange}
        disabled={isLoading}
      />
      <p>
        Converted value: {result} {currencyTo}
      </p>
    </div>
  );
}

function CurrencySelector({ currency, onChange, disabled }) {
  return (
    <select value={currency} onChange={onChange} disabled={disabled}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
      <option value="SGD">SGD</option>
      <option value="MYR">MYR</option>
    </select>
  );
}
