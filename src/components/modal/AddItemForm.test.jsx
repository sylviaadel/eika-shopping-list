import { render, screen, fireEvent, getByText } from "@testing-library/react";
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

test("Verify that error appears if name is incorrect", () => {
  //Arrange
  render(<AddItemForm />);
  const input = screen.getByTestId("name-textbox");
  const addButton = screen.getByTestId("submit-btn");

  //Action
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(addButton);
  const nameError = screen.getByText("Please enter a valid name.");

  //Assert
  expect(nameError).toBeInTheDocument();
});

test("Verify that error appears if price is incorrect", () => {
  //Arrange
  render(<AddItemForm />);
  const input = screen.getByTestId("price-textbox");
  const addButton = screen.getByTestId("submit-btn");

  //Action
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(addButton);
  const priceError = screen.getByText("Please enter a valid price.");

  //Assert
  expect(priceError).toBeInTheDocument();
});
