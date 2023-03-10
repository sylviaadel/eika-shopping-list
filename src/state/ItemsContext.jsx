import { createContext, useContext, useEffect, useState } from "react";
import { loadData, saveData } from "../scripts/dataManagement";
import { completedItems } from "../scripts/tests/data/completedData";
import { pendingItems } from "../scripts/tests/data/pendingData";

const storageKey = "todo-list";
const ItemsContext = createContext(loadData(storageKey));

export function ItemProvider({ children }) {
  const [items, setItems] = useState(loadData(storageKey));
  const value = { items, setItems };

  useEffect(() => saveData(storageKey, items), [items]);

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}

export function TestCompletedItemProvider({ children }) {
  const [items, setItems] = useState(completedItems);
  const value = { items, setItems };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}

export function TestPendingItemProvider({ children }) {
  const [items, setItems] = useState(pendingItems);
  const value = { items, setItems };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}
export function useItems() {
  const itemsContext = useContext(ItemsContext);
  const error = "To use The Items Context import it on index.js";
  if (!itemsContext) throw new Error(error);

  return itemsContext;
}
