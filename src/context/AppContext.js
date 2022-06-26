import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        // Takes a copy of the current state and adds the new expense to it. This is the same as: state.expenses.concat(action.payload)
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.id),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "SET_EXPENSES":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.name === action.payload
        ),
      };
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
