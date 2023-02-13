export default function Form() {
  return (
    <form>
      <label>Product name</label>
      <input type="text" />
      <label>Price</label>
      <input type="number" />
      <button className="primary-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
