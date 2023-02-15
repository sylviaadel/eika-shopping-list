import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddItemForm from "./AddItemForm";

test("Verify that the value of name textbox is changed with the entered ", () => {
  //Arrange
  render(<AddItemForm />);
  const input = screen.getByTestId("name-textbox");
  const addButton = screen.getByTestId("submit-btn");

  //Act
  fireEvent.change(input, { target: { value: "Chair" } });
  fireEvent.click(addButton);

  //Assert
  expect(input.value).toBe("Chair");
});

test("Verify that the value of price textbox is changed with the entered ", () => {
  //Arrange
  render(<AddItemForm />);
  const input = screen.getByTestId("price-textbox");
  const addButton = screen.getByTestId("submit-btn");

  //Act
  fireEvent.change(input, { target: { value: "300" } });
  fireEvent.click(addButton);

  //Assert
  expect(input.value).toBe("300");
});
