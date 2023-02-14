import TodoItem from "./TodoItem";

export default function TodoList({ items }) {
  return (
    <section>
      <TodoItem />
      {items < 1 && <p>No items in this list</p>}
    </section>
  );
}
