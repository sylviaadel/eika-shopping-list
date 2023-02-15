// Project files
import { createContext, useContext, useEffect, useState } from "react";
import { loadData, saveData } from "../scripts/storeData";

// Initializer
export const ItemsContext = createContext(loadData("ShoppingCartItems"));
