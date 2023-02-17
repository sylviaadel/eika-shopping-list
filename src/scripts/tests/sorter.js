export function sortByName(itemList) {
  return itemList.sort((a, b) => (a.name > b.name ? 1 : -1));
}
export function sortByPrice(itemList) {
  return itemList.sort(({ price: a }, { price: b }) => a - b);
}
