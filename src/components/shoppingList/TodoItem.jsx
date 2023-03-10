export default function TodoItem({ item, onCheck }) {
  const { id, name, price, isCompleted } = item;
  return (
    <article
      className={`todo-item ${isCompleted ? "completed" : ""}`}
      data-testid={`${isCompleted ? "completed" : "pending"}`}
    >
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onCheck(id)}
        />
        <span
          className={`checkbox ${isCompleted ? "checkbox--active" : ""}`}
          aria-hidden="true"
        />
      </label>
      <span className="item-name">{name}</span>
      <span className="spacer"></span>
      <span className="item-price">{price}:-</span>
    </article>
  );
}
