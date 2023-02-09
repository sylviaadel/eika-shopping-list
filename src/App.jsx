import Welcome from "./screens/Welcome";
import Logo from "./assets/images/logo.svg";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt="The word EIKA con a background" />
      <Welcome />
    </div>
  );
}
