import { useState } from "react";
import Sorter from "../components/shoppingList/Sorter";
import eyeOpenIcon from "../assets/images/icon-eye-open.svg";
import TodoList from "../components/shoppingList/TodoList";
import Modal from "../components/shared/Modal";

export default function ShoppingListing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="shopping-list">
      <h1>Shopping List</h1>
      <Sorter />
      <TodoList />
      <button className="primary-btn">Add item</button>
      <button className="link-btn" onClick={() => setIsOpen(true)}>
        <img src={eyeOpenIcon} alt="Eye Open Icon" />
        View hidden items
      </button>
      <Modal open={isOpen} />
    </div>
  );
}
