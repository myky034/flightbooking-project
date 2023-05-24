import React, { useEffect, useState } from "react";
import SideBar from "../../../SideBar/SideBar";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditAirport = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialValues = {
    id: "",
    tensanbay: "",
    maICAO_IATA: "",
    tinh: "",
    soduongbang: "",
    loaiduongbang: "",
    chieudaidb: "",
    baydem: "",
    bayquocte: "",
  };

  const [airport, setAirport] = useState(initialValues);

  //get method
  const editAirport = async () => {
    axios
      .get("http://localhost:8080/api/ms-sanbay/danhsach-sanbay?id=" + id)
      .then(function (res) {
        setAirport(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAirport({ ...airport, [name]: value });
  };

  const handleClose = () => {
    setAirport(initialValues);
    navigate("/airport");
  };

  const updateAirport = async () => {
    let data = {
      id: airport.id,
      tensanbay: airport.tensanbay,
      maICAO_IATA: airport.maICAO_IATA,
      tinh: airport.tinh,
      soduongbang: airport.soduongbang,
      loaiduongbang: airport.loaiduongbang,
      chieudaidb: airport.chieudaidb,
      baydem: airport.baydem,
      bayquocte: airport.bayquocte,
    };

    //put method
    await axios
      .put("http://localhost:8080/api/ms-sanbay/chinhsua-sanbay", data)
      .then(function (res) {
        setAirport(res.data.data);
        console.log(res.data);
        navigate("/airport");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
                Chỉnh Sửa Sân Bay
              </h4>
            </div>
            <form className="mt-8 mb-2">
              <div className="mb-4 flex gap-6" style={{ width: "100%" }}>
                <div
                  className="mb-4 flex flex-col gap-6"
                  style={{ width: "100%" }}
                >
                  <Input
                    type="text"
                    size="lg"
                    label="Mã sân bay"
                    name="maICAO_IATA"
                    value={airport.maICAO_IATA}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Tên sân bay"
                    name="tensanbay"
                    value={airport.tensanbay}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Tỉnh"
                    name="tinh"
                    value={airport.tinh}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Số đường băng"
                    name="soduongbang"
                    value={airport.soduongbang}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="mb-4 flex flex-col gap-6"
                  style={{ width: "100%" }}
                >
                  <Input
                    size="lg"
                    name="loaiduongbang"
                    label="Loại đường băng"
                    value={airport.loaiduongbang}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Chiều dài đường băng"
                    name="chieudaidb"
                    value={airport.chieudaidb}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Bay đêm"
                    name="baydem"
                    value={airport.baydem}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Bay quốc tế"
                    name="bayquocte"
                    value={airport.bayquocte}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4" style={{ justifyContent: "flex-end" }}>
                <Button className="mt-6" onClick={updateAirport}>
                  Update
                </Button>
                <Button className="mt-6" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAirport
