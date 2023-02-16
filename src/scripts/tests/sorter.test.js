import { sortByName, sortByPrice } from "./sorter";

test("Verify that onclick on sort by name button, the items list is sorted by name", () => {
  //Arrange
  const items = [
    {
      name: "Chair",
      price: 300,
    },
    {
      name: "Bed",
      price: 300,
    },
  ];
  const sortedItems = [
    {
      name: "Bed",
      price: 300,
    },
    {
      name: "Chair",
      price: 300,
    },
  ];

  //Action
  const result = sortByName(items);

  //Assert
  expect(result).toEqual(sortedItems);
});

test("Verify that onclick on sort by price button, the items list is sorted by price", () => {
  //Arrange
  const items = [
    {
      name: "Bed",
      price: 3000,
    },
    {
      name: "Chair",
      price: 200,
    },
  ];
  const sortedItems = [
    {
      name: "Chair",
      price: 200,
    },
    {
      name: "Bed",
      price: 3000,
    },
  ];

  //Action
  const result = sortByPrice(items);

  //Assert
  expect(result).toEqual(sortedItems);
});
