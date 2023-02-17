import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Welcome from "./Welcome";
import AddItemForm from "../components/modal/AddItemForm";

it("Verify that the rendered image on welcome screen is the correct one", () => {
  //Arrange
  render(<Welcome />);

  //Act
  const image = screen.getByAltText(
    "A woman getting out of a store with some shopping bags"
  );

  //Assert
  expect(image.src).toContain("welcome-screen-img.png");
});

it("Verify the on click on Add item button, modal opens", () => {
  //Arrange
  render(<Welcome />);
  const button = screen.getByText("Add item");
  //const modal = screen.getByText("Cancel");
  console.log(button);

  //Act
  fireEvent.click(button);

  //Assert
  //expect(modal).toBeCalled();
  expect(screen.getByTestId("modal-test-id")).toBeInTheDocument();
});
