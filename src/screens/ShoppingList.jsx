import Sorter from "../components/shoppingList/Sorter";
import eyeOpenIcon from "../assets/images/icon-eye-open.svg";

export default function ShoppingListing() {
  return (
    <div id="shopping-list">
      <h1>Shopping List</h1>
      <Sorter />
      <button className="primary-btn">Add item</button>
      <button className="link-btn">
        <img src={eyeOpenIcon} />
        View hidden items
      </button>
    </div>
  );
}
