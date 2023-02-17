import { useItems } from "../../state/ItemsContext";

export default function Sorter() {
  const { items, setItems } = useItems();
  const clonedItems = [...items];
  function sortByName() {
    const sortedList = clonedItems.sort((a, b) => (a.name > b.name ? 1 : -1));
    setItems(sortedList);
  }
  function sortByPrice() {
    const sortedList = clonedItems.sort(({ price: a }, { price: b }) => a - b);
    setItems(sortedList);
  }
  return (
    <section className="sorter">
      Sort by:
      <button className="link-btn" onClick={sortByName}>
        Name
      </button>
      <button className="link-btn" onClick={sortByPrice}>
        Price
      </button>
    </section>
  );
}
