import { validItemName, validItemPrice } from "./addItem";

test("Verify that name and price are correct", () => {
  //Arrange
  const name = "Chair";
  const price = 300;

  //Action
  const addedItemName = validItemName(name);
  const addedItemPrice = validItemPrice(price);

  //Assert
  expect(addedItemName).toEqual(true);
  expect(addedItemPrice).toEqual(true);
});

test("Verify that name is not empty", () => {
  //Arrange
  const name = "";

  //Action
  const addedItemName = validItemName(name);

  //Assert
  expect(addedItemName).toEqual(false);
});

test("Verify that name is not only spaces", () => {
  //Arrange
  const name = "    ";

  //Action
  const addedItemName = validItemName(name);

  //Assert
  expect(addedItemName).toEqual(false);
});

test("Verify that price is not empty", () => {
  //Arrange
  const price = null;

  //Action
  const addedItemPrice = validItemPrice(price);

  //Assert
  expect(addedItemPrice).toEqual(false);
});

test("Verify that price is not less than 1", () => {
  //Arrange
  const price = -1;

  //Action
  const addedItemPrice = validItemPrice(price);

  //Assert
  expect(addedItemPrice).toEqual(false);
});
