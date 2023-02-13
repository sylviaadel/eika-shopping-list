import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <form>
      <label>Product name</label>
      <input
        autoFocus
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Price</label>
      <input
        type="number"
        required
        value={price}
        min={1}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="primary-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
