import React from 'react';
import SideBar from "../SideBar/SideBar";
import NewFlight from './NewFlight/NewFlight';
import ListFlight from './ListFlight/ListFlight';

const Flight = () => {
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
                Chuyến Bay
              </h4>
              <NewFlight />
            </div>
            <ListFlight className="list-ticket" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flight
