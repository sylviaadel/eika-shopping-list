import { useState } from "react";

export default function Form({ setModal }) {
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

  function onSubmit(e) {
    if (nameError || priceError) {
      e.preventDefault();
    }
  }

  return (
    <form onSubmit={onSubmit}>
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
