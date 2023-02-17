import { useState } from "react";
import { useItems } from "./state/ItemsContext";
import Welcome from "./screens/Welcome";
import ShoppingListing from "./screens/ShoppingList";
import Header from "./components/shared/Header";
import Modal from "./components/shared/Modal";
import "./styles/style.scss";

export default function App() {
  const [modal, setModal] = useState(null);
  const { items } = useItems();

  return (
    <div className="App">
      <Header />
      {items.length === 0 && <Welcome setModal={setModal} />}
      {items.length > 0 && <ShoppingListing setModal={setModal} />}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
