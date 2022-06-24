import React from "react";

function AddExpenseForm() {
  return (
    <form action="">
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input type="text" required className="form-control" id="name" />
        </div>

        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input type="text" required className="form-control" id="cost" />
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
