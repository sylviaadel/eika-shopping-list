import { useState } from "react";
import { useItems } from "../../state/ItemsContext";
import { nameErrorText, priceErrorText } from "../../scripts/addItemHelpers";
import { validItemName, validItemPrice } from "../../scripts/tests/addItem";

export default function Form({ setModal }) {
  const { items, setItems } = useItems();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function onSubmit(e, name, price) {
    const addedItem = {
      //added this work around because items are undefined on testcases
      id: items == undefined ? 1 : items.length,
      name: name,
      price: price,
      isCompleted: false,
    };
    e.preventDefault();
    if (!validItemName(addedItem.name) || !validItemPrice(addedItem.price)) {
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
      {validItemName(name) ? "" : nameErrorText}
      <label>Price</label>
      <input
        data-testid="price-textbox"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {validItemPrice(price) ? "" : priceErrorText}
      <button data-testid="submit-btn" className="primary-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
