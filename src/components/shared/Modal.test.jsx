import { render, screen, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

it("Verify that on click on cancel or overlay the modal closes", () => {
  //Arrange
  render(<Modal />);
  const closeModalButton = screen.getByTestId("close-modal");

  //Act
  fireEvent.click(closeModalButton);

  //Assert
  expect(closeModalButton).not.toBeInTheDocument();
});
