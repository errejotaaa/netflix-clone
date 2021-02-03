import React, { createContext, useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "./axios";

const initialState = {};
const AppContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
}

export const useAppValue = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
