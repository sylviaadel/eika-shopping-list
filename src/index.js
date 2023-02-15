import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { loadData, saveData } from "./scripts/storeData";
import { ItemsContext } from "./state/ItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ItemsContext.Provider value={loadData("ShoppingCartItems")}>
      <App />
    </ItemsContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
