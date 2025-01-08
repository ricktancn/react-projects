import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  //add state variables
  //deconstructuring it, step is the state variable, setStep is the function
  //useState is a hook, all hooks start with use
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //callback functions
  function handlePrevious() {
    //always use callback function to update state based on current state. here s is step
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "purple", color: "white" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "purple", color: "white" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
