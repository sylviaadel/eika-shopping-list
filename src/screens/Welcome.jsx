import { useState } from "react";
import WelcomeImage from "../assets/images/welcome-screen-img.png";
import Modal from "../components/shared/Modal";

export default function Welcome() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="welcome-screen">
      <img
        src={WelcomeImage}
        alt="A woman getting out of a store with some shopping bags"
      />
      <h1>EIKA's shopping list</h1>
      <p>
        Welcome to EIKA's shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. You can also and an
        image after the item is added by touching the camera icon.
      </p>
      <button className="primary-btn" onClick={() => setIsOpen(true)}>
        Add item
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
