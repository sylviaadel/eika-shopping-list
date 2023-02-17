import { useState } from "react";
import { useItems } from "../../state/ItemsContext";
import { nameErrorText, priceErrorText } from "../../scripts/addItemHelpers";

export default function Form({ setModal }) {
  const { items, setItems } = useItems();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const nameErrorSpan = name.length < 1 || name.trim() < 1 ? nameErrorText : "";
  const priceErrorSpan = price < 1 ? priceErrorText : "";

  function onSubmit(e, name, price) {
    const addedItem = {
      id: items.length,
      name: name,
      price: price,
      isCompleted: false,
    };
    e.preventDefault();
    if (nameErrorSpan != "" || priceErrorSpan != "") {
      e.preventDefault();
    } else {
      setItems([...items, addedItem]);
      setModal(null);
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e, name, price)}>
      <label>Product name</label>
      <input
        data-testid="name-textbox"
        autoFocus
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameErrorSpan}
      <label>Price</label>
      <input
        data-testid="price-textbox"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {priceErrorSpan}
      <button data-testid="submit-btn" className="primary-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
