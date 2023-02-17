export function addItemName(name) {
  if (name === undefined || name === null || name.trim() === "") {
    return false;
  }
  return true;
}
export function addItemPrice(price) {
  if (price === null || price < 1) {
    return false;
  }
  return true;
}
