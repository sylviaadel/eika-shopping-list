import { useState } from "react";
import Sorter from "../components/shoppingList/Sorter";
import eyeOpenIcon from "../assets/images/icon-eye-open.svg";
import TodoList from "../components/shoppingList/TodoList";
import Modal from "../components/shared/Modal";

export default function ShoppingListing() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div id="shopping-list">
      <h1>Shopping List</h1>
      <Sorter />
      <TodoList />
      <button className="primary-btn" onClick={() => setIsOpen(true)}>
        Add item
      </button>
      <button
        className="link-btn"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        <img src={eyeOpenIcon} alt="Eye Open Icon" />
        View hidden items
      </button>
      {showCompleted && <TodoList />}
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
