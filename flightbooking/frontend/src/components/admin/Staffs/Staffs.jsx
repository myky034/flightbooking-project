import React from "react";
import "./Staffs.scss";
import SideBar from "../SideBar/SideBar";
import StaffLists from "./Table/StaffLists";
import StaffActivity from "./StaffActivity";

const Staffs = () => {
  return (
    <div className="all-staffs">
      <SideBar />
      <div className="container">
        <div className="row">
          <div className="pr-4 m-0 patient-container">
            <div className="staff-activity" style={{display: "flex", justifyContent: "space-between"}}>
              <h4 className="brand-color text-start">Staffs</h4>
              <StaffActivity />
            </div>
            <StaffLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffs;
