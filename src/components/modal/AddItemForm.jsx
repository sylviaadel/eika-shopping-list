import { useState } from "react";
import { useItems } from "../../state/ItemsContext";

export default function Form({ setModal }) {
  const [items, setItems] = useItems();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const nameError = name.length < 1 && (
    <p className="error-text">Please enter a valid name.</p>
  );
  const priceError = price < 1 && (
    <p className="error-text">Please enter a valid price.</p>
  );

  function validate() {
    setName(name.trim());
  }

  function onSubmit(e, name, price) {
    const addedItem = {
      id: items.length,
      name: name,
      price: price,
      isCompleted: false,
    };
    e.preventDefault();
    setItems([...items, addedItem]);
    if (nameError || priceError) {
      e.preventDefault();
    }
    setModal(null);
  }

  return (
    <form onSubmit={(e) => onSubmit(e, name, price)}>
      <label>Product name</label>
      <input
        autoFocus
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => validate()}
      />
      {nameError}
      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {priceError}
      <button className="primary-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
