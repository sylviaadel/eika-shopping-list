import TodoItem from "./TodoItem";

export default function TodoList({ items }) {
  return (
    <section>
      <TodoItem />
      {items.length < 1 && <p>No items in this list</p>}
    </section>
  );
}
