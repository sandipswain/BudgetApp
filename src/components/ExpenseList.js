import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "./../context/AppContext";

function ExpenseList() {
  const { expenses } = useContext(AppContext);
  const [filteredExpense, setFilteredExpense] = React.useState(expenses || []);

  React.useEffect(() => {
    setFilteredExpense(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    console.log("Check");
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilteredExpense(searchResults);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type to search..."
        className="my-lg-2 form-control"
        id="search"
        autoComplete="off"
        onChange={handleChange}
      />
      <ul className="list-group">
        {filteredExpense.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            key={expense.id}
          />
        ))}
      </ul>
    </>
  );
}

export default ExpenseList;
