import { createContext, useContext, useEffect, useState } from "react";
import { loadData, saveData } from "../scripts/dataManagement";

const ItemsContext = createContext(null);

export function ItemProvider({ children }) {
  const [items, setItems] = useState(loadData("eika-shopping-list"));
  const value = { items, setItems };
  useEffect(() => saveData("eika-shopping-list", items), [items]);

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
