import { useState } from "react";
import Sorter from "../components/shoppingList/Sorter";
import TodoList from "../components/shoppingList/TodoList";
import AddItemForm from "../components/modal/AddItemForm";

export default function ShoppingListing({ setModal }) {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div id="shopping-list">
      <h1>Shopping List</h1>
      <Sorter />
      <TodoList />
      <button
        className="primary-btn"
        onClick={() => setModal(<AddItemForm setModal={setModal} />)}
      >
        Add item
      </button>
      <button
        className={`view-hidden-items ${showCompleted ? "opened" : ""}`}
        onClick={() => setShowCompleted(!showCompleted)}
      >
        View Completed items
      </button>
      {showCompleted && <TodoList />}
    </div>
  );
}
