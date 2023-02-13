import { render, screen, fireEvent } from "@testing-library/dom";
import addItem from "./addItem";

test("Verify that name and price are correct", () => {
  //Arrange
  const item = {
    name: "Chair",
    price: 300,
  };
  const result = item;

  //Action
  const addedItem = addItem(item);

  //Assert
  expect(result).toEqual(addedItem);
});

test("Verify that name is not empty", () => {
  //Arrange
  const item = {
    name: "",
  };
  const result = null;

  //Action
  const addedItem = addItem(item);

  //Assert
  expect(result).toEqual(addedItem);
});

test("Verify that name is not only spaces", () => {
  //Arrange
  const item = {
    name: "    ",
  };
  const result = null;

  //Action
  const addedItem = addItem(item);

  //Assert
  expect(result).toEqual(addedItem);
});

test("Verify that price is not empty", () => {
  //Arrange
  const item = {
    price: null,
  };
  const result = null;

  //Action
  const addedItem = addItem(item);

  //Assert
  expect(result).toEqual(addedItem);
});

test("Verify that price is not less than 1", () => {
  //Arrange
  const item = {
    price: -1,
  };
  const result = null;

  //Action
  const addedItem = addItem(item);

  //Assert
  expect(result).toEqual(addedItem);
});
