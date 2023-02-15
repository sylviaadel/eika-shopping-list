import Checkbox from "./Checkbox";

export default function TodoItem(props) {
  return (
    <article className="todo-item">
      <Checkbox />
      <span className="item-name">{props.item.name}</span>
      <span className="spacer"></span>
      <span className="item-price">{props.item.price}:-</span>
    </article>
  );
}
