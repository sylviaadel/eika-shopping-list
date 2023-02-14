export default function Sorter(itemList) {
  function sortByName() {
    itemList.sort((a, b) => (a.name > b.name ? 1 : -1));
    return itemList;
  }
  function sortByPrice() {
    itemList.sort(({ price: a }, { price: b }) => a - b);
    return itemList;
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
