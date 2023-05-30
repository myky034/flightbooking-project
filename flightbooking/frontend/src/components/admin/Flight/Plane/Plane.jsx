import React from 'react';
import SideBar from "../../SideBar/SideBar";
import NewPlane from './NewPlane';
import ListPlane from './ListPlane';

const Plane = () => {
  return (
    <div className="all-staffs">
      <SideBar />
      <div
        className="container-staff"
        style={{ margin: "0", width: "100%", padding: "0.5rem" }}
      >
        <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
          <div
            className="patient-container relative h-[calc(100vh-2rem)]"
            style={{ boxShadow: "none" }}
          >
            <div
              className="staff-activity"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h4
                className="brand-color text-start"
                style={{ fontSize: "2rem" }}
              >
                Máy Bay
              </h4>
              <NewPlane />
            </div>
            <ListPlane />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plane
