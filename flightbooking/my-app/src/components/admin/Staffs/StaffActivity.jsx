import React, { useState } from "react";
import AddNew from "./Modal/AddNew";

const StaffActivity = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          setShow(true);
        }}
      >
        Add New Staff
      </button>

      {show && <AddNew closeModal={setShow} />}
    </div>
  );
};

export default StaffActivity;
