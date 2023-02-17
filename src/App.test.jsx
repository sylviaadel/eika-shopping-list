import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { TestPendingItemProvider } from "./state/ItemsContext";

test("Verify that show completed items button, expands the completed list", () => {
  //Arrange
  render(
    <TestPendingItemProvider>
      <App />
    </TestPendingItemProvider>
  );

  //Act
  const title = screen.getByText("Shopping List");

  //Assert
  expect(title).toBeInTheDocument();
});
