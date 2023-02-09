import Checkbox from "./Checkbox";

export default function TodoItem() {
  return (
    <article className="todo-item">
      <Checkbox />
      <span className="item-name">Chair</span>
      <span className="spacer"></span>
      <span className="item-price">300:-</span>
    </article>
  );
}
