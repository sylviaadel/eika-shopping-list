import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Welcome from "./Welcome";

test("Verify that the rendered image on welcome screen is the correct one", () => {
  //Arrange
  render(<Welcome />);

  //Act
  const image = screen.getByAltText(
    "A woman getting out of a store with some shopping bags"
  );

  //Assert
  expect(image.src).toContain("welcome-screen-img.png");
});

test("Verify the on click on Add item button, modal opens", () => {
  const setModal = jest.fn();

  //Arrange
  render(<Welcome setModal={setModal} />);
  const button = screen.getByText("Add item");

  //Act
  fireEvent.click(button);

  //Assert
  expect(setModal).toHaveBeenCalledTimes(1);
});
