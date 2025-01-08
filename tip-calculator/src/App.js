import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myServiceRate, setMyServiceRate] = useState(0);
  const [friendServiceRate, setFriendServiceRate] = useState(0);

  function handleSetBill(bill) {
    setBill(bill);
  }

  function handleSetMyServiceRate(serviceRate) {
    setMyServiceRate(serviceRate);
  }

  function handleSetFriendServiceRate(serviceRate) {
    setFriendServiceRate(serviceRate);
  }

  function handleReset() {
    setBill(0);
    setMyServiceRate(0);
    setFriendServiceRate(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Tip Calculator</h1>
      </div>
      <section>
        <div>
          <span>How much was the bill?</span>{" "}
          <Bill bill={bill} onSetBill={handleSetBill} />
        </div>
        <div>
          <ServiceRating
            serviceRate={myServiceRate}
            setServiceRate={handleSetMyServiceRate}
          >
            <span>How did you like the service?</span>{" "}
          </ServiceRating>
        </div>
        <div>
          <ServiceRating
            serviceRate={friendServiceRate}
            setServiceRate={handleSetFriendServiceRate}
          >
            <span>How did your friend like the service?</span>{" "}
          </ServiceRating>
        </div>
        <br />
        {bill > 0 && (
          <>
            <BillTotal
              bill={bill}
              myServiceRate={myServiceRate}
              friendServiceRate={friendServiceRate}
            />

            <br />
            <Reset onReset={handleReset} />
          </>
        )}
      </section>
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <input
      type="number"
      value={bill}
      onChange={(e) => onSetBill(Number(e.target.value))}
    />
  );
}

function ServiceRating({ serviceRate, setServiceRate, children }) {
  return (
    <div>
      {children}
      <select
        value={serviceRate}
        onChange={(e) => setServiceRate(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Satisfied (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function BillTotal({ bill, myServiceRate, friendServiceRate }) {
  const averageRate = (myServiceRate + friendServiceRate) / 2;
  const tip = +(bill * (averageRate / 100)).toFixed(2); // Round to 2 decimal places
  const total = +(bill + tip).toFixed(2); // Round to 2 decimal places

  return (
    <div className="total">
      <span>
        You pay ${total} (${bill} + ${tip} tip)
      </span>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
