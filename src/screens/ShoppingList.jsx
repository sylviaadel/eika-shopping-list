import { useState } from "react";
import Sorter from "../components/shoppingList/Sorter";
import TodoList from "../components/shoppingList/TodoList";
import AddItemForm from "../components/modal/AddItemForm";
import { useItems } from "../state/ItemsContext";

export default function ShoppingListing({ setModal }) {
  const { items, setItems } = useItems();
  const [showCompleted, setShowCompleted] = useState(false);
  const completedItems = items?.filter((item) => item.isCompleted === true);
  const pendingItems = items?.filter((item) => item.isCompleted === false);

  function onCheck(id) {
    const clonedItems = [...items];
    const editedItem = clonedItems.find((item) => item.id === id);

    editedItem.isCompleted = !editedItem.isCompleted;
    setItems(clonedItems);
  }
  return (
    <div id="shopping-list">
      <h1>Shopping List</h1>
      <Sorter itemList={pendingItems} />
      <TodoList items={pendingItems} onCheck={onCheck} />
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
      {showCompleted && (
        <TodoList
          data-testid="todoList"
          items={completedItems}
          onCheck={onCheck}
        />
      )}
    </div>
  );
}
