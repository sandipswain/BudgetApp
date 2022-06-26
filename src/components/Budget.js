import React, { useContext, useState } from "react";
import { AppContext } from "./../context/AppContext";

function Budget() {
  const { budget, dispatch } = useContext(AppContext);
  const [editable, setEditable] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);
  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    dispatch({ type: "SET_BUDGET", payload: newBudget });
    setEditable(false);
  };
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      {!editable ? (
        <>
          <span>Budget: ${budget}</span>
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            required
            className="form-control"
            id="budget"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
          />
          <button className="btn btn-primary ms-4" onClick={handleSave}>
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default Budget;
