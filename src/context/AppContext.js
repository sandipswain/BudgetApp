import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 1000,
  expenses: [
    { id: 123355, name: "Shopping", cost: 50 },
    { id: 123356, name: "Holiday", cost: 150 },
    { id: 123357, name: "Transportation", cost: 250 },
    { id: 123358, name: "Fuel", cost: 350 },
    // { id: 123359, name: "Child Care", cost: 450 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
