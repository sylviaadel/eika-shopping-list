import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { TestPendingItemProvider } from "./state/ItemsContext";

test("Verify that the user is redirected to the shopping list screen if he has tasks", () => {
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
