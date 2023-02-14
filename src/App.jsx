import { useState } from "react";
import Welcome from "./screens/Welcome";
import "./styles/style.scss";
import ShoppingListing from "./screens/ShoppingList";
import Header from "./components/shared/Header";
import Modal from "./components/shared/Modal";

export default function App() {
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Header />
      {/* <Welcome setModal={setModal} /> */}
      <ShoppingListing setModal={setModal} />
      <Modal state={[modal, setModal]} />
    </div>
  );
}
