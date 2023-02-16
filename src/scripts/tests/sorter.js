export function sortByName(itemList) {
  itemList.sort((a, b) => (a.name > b.name ? 1 : -1));
  return itemList;
}
export function sortByPrice(itemList) {
  itemList.sort(({ price: a }, { price: b }) => a - b);
  return itemList;
}
