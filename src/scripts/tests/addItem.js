export function validItemName(name) {
  if (name === undefined || name === null || name.trim() === "") {
    return false;
  }
  return true;
}
export function validItemPrice(price) {
  if (price === null || price < 1) {
    return false;
  }
  return true;
}
