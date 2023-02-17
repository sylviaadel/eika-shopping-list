import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingListing from "./ShoppingList";
import { TestCompletedItemProvider } from "../state/ItemsContext";

test("Verify that show completed items button, expands the completed list", () => {
  //Arrange
  render(
    <TestCompletedItemProvider>
      <ShoppingListing />
    </TestCompletedItemProvider>
  );
  const button = screen.getByText("View Completed items");

  //Act
  fireEvent.click(button);
  const completed = screen.getAllByTestId("completed")[0];

  //Assert
  expect(completed).toBeInTheDocument();
});

test("Verify the on click on Add item button, modal opens", () => {
  const setModal = jest.fn();

  //Arrange
  render(<ShoppingListing setModal={setModal} />);
  const button = screen.getByText("Add item");

  //Act
  fireEvent.click(button);

  //Assert
  expect(setModal).toHaveBeenCalledTimes(1);
});
