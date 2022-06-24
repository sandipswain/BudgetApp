import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "./../context/AppContext";

function ExpenseList() {
  // const expenses = [
  //   { id: 123355, name: "Shopping", cost: 50 },
  //   { id: 123356, name: "Holiday", cost: 150 },
  //   { id: 123357, name: "Transportation", cost: 250 },
  //   { id: 123358, name: "Fuel", cost: 350 },
  //   { id: 123359, name: "Child Care", cost: 450 },
  // ];
  const { expenses } = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
