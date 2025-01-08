import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  function handleDecreaseCounter() {
    setCounter((c) => c - step);
  }

  function handleIncreaseCounter() {
    setCounter((c) => c + step);
  }

  function handleReset() {
    setStep(0);
    setCounter(0);
  }

  return (
    <>
      <div className="step">
        <input
          type="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="0"
          max="10"
        />
        {step}
      </div>
      <div className="counter">
        <button onClick={handleDecreaseCounter}>-</button>
        <input
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        ></input>
        <button onClick={handleIncreaseCounter}>+</button>
      </div>
      <br />
      <DateCounter dayCount={counter} />
      <br />
      <div className="button-container">
        <button
          onClick={() => handleReset()}
          className={step === 0 || counter === 0 ? "hidden" : "visible"}
        >
          Reset
        </button>
      </div>
    </>
  );
}

function DateCounter({ dayCount }) {
  console.log("dayCount", dayCount);
  //calculate days from today based on dayCount value
  const today = new Date();
  const targetDate = new Date(today.setDate(today.getDate() + dayCount));

  return (
    <div className="date-counter">
      <span>
        {dayCount === 0
          ? "Today is " + targetDate.toLocaleDateString()
          : dayCount > 0
          ? dayCount + " days from today is " + targetDate.toLocaleDateString()
          : Math.abs(dayCount) +
            " days ago from today is " +
            targetDate.toLocaleDateString()}
      </span>
    </div>
  );
}
