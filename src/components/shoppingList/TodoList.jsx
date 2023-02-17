import TodoItem from "./TodoItem";

export default function TodoList({ items, onCheck }) {
  const TodoItems = items.map((item) => (
    <TodoItem key={item.id} item={item} onCheck={onCheck} />
  ));
  const noItems = <p>No items in this list</p>;
  return items.length < 1 ? noItems : TodoItems;
}
