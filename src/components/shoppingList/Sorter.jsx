import { useItems } from "../../state/ItemsContext";
import { sortByName, sortByPrice } from "../../scripts/tests/sorter";

export default function Sorter() {
  const { items, setItems } = useItems();
  function sortName() {
    const clonedItems = [...items];
    sortByName(clonedItems);
    setItems(clonedItems);
  }
  function sortPrice() {
    const clonedItems = [...items];
    sortByPrice(clonedItems);
    setItems(clonedItems);
  }
  return (
    <section className="sorter">
      Sort by:
      <button className="link-btn" onClick={sortName}>
        Name
      </button>
      <button className="link-btn" onClick={sortPrice}>
        Price
      </button>
    </section>
  );
}
