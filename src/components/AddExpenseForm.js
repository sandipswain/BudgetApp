import React, { useContext } from "react";
import { AppContext } from "./../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // alert(`${name} - ${cost}`);
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({ type: "ADD_EXPENSE", payload: expense });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            required
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-4">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;
