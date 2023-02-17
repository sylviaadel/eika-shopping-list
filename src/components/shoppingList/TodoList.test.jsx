import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";
import { pendingItems } from "../../scripts/pendingData";

test("Verify that on adding item in modal, it is added in the pending list", () => {
  //Arrange
  render(<TodoList items={pendingItems} />);

  //Act
  const pending = screen.getAllByTestId("pending")[0];

  //Assert
  expect(pending).toBeInTheDocument();
});
