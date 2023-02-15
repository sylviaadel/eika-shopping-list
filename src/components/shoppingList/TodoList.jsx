import { useContext, useState } from "react";
import TodoItem from "./TodoItem";

import { ItemsContext } from "../../state/ItemsContext";

export default function TodoList({}) {
  const ShoppingItems = useContext(ItemsContext);
  const [items, setItems] = useState(ShoppingItems);
  const itemList = ShoppingItems.map((item) => <TodoItem item={item} />);
  return ShoppingItems.length > 0 ? itemList : <p>No items in this list</p>;
}
