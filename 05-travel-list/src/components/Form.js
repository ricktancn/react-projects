import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    //console.log("Form submitted");
    //console.log(e);
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    // notes: Array.from({ length: 5 }, (_, index) => index + 1)
    // Creates an array of numbers: [1, 2, 3, 4, 5]
    // Array.from(arrayLike, mapFn) if mapFn is is not provided result will be [undefined, undefined, undefined, undefined, undefined]
    // mapfn is a callback function to initialize each element
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 🤔😍</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
