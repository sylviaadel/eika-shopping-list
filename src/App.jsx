import Welcome from "./screens/Welcome";
import "./styles/style.scss";
import ShoppingListing from "./screens/ShoppingList";
import Header from "./components/shared/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      {/* <ShoppingListing /> */}
    </div>
  );
}
