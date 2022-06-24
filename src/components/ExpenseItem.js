import React from "react";
import { TiDelete } from "react-icons/ti";
function ExpenseItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between  align-items-center">
      {props.name}
      <div className="badge bg-primary rounded-pill me-3 ms-auto">
        {props.cost}
      </div>
      <TiDelete size="1.5rem" />
    </li>
  );
}

export default ExpenseItem;
