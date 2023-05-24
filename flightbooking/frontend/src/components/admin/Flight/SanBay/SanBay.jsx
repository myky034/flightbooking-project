import React from 'react';
import SideBar from "../../SideBar/SideBar";
import NewAirport from './NewAirport/NewAirport';
import ListAirport from './ListAirport/ListAirport';

const SanBay = () => {
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
                Sân Bay
              </h4>
              <NewAirport/>
            </div>
            <ListAirport/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SanBay
