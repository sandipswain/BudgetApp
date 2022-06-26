import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "./../context/AppContext";
function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({ type: "DELETE_EXPENSE", id: props.id });
  };
  return (
    <li className="list-group-item d-flex justify-content-between  align-items-center">
      {props.name}
      <div className="badge bg-primary rounded-pill me-3 ms-auto">
        {props.cost}
      </div>
      <TiDelete size="1.5rem" onClick={handleDelete} />
    </li>
  );
}

export default ExpenseItem;
