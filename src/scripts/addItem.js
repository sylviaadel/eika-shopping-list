export default function addItem(item) {
  if (
    item.name === undefined ||
    item.name === null ||
    item.name.trim() === ""
  ) {
    return null;
  }
  if (item.price === null || item.price < 1) {
    return null;
  }
  return item;
}
