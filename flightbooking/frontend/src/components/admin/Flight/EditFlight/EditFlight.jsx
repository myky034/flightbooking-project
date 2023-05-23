import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditFlight = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialValues = {
    id: "",
    machuyenbay: "",
    tgkhoihanh: "",
    tgden: "",
    tgbaydukien: "",
    xuatphat: "",
    dichden: "",
    soghetrong: "",
    tinhtrang: "",
  };

  const [newflight, setNewFlight] = useState(initialValues);

  useEffect(() => {
    editFlight();
  }, []);

  //get method
  const editFlight = async () => {
    axios
      .get("http://localhost:8080/api/ms-chuyenbay/danhsach-chuyenbay?id=" + id)
      .then(function (res) {
        setNewFlight(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFlight({ ...newflight, [name]: value });
  };

  const handleClose = () => {
    setNewFlight(initialValues);
    navigate("/flight");
  };

  const updateFlight = () => {
    let data = {
      id: newflight.id,
      machuyenbay: newflight.machuyenbay,
      tgkhoihanh: newflight.tgkhoihanh,
      tgden: newflight.tgden,
      tgbaydukien: newflight.tgbaydukien,
      xuatphat: newflight.xuatphat,
      dichden: newflight.dichden,
      soghetrong: newflight.soghetrong,
      tinhtrang: newflight.tinhtrang,
    };

    //put method
    axios
      .put("http://localhost:8080/api/ms-chuyenbay/chinhsua-chuyenbay", data)
      .then(function (res) {
        setNewFlight(res.data.data);
        console.log(res.data);
        navigate("/flight");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                Chỉnh Sửa Chuyến Bay
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
                    label="Mã chuyến bay"
                    name="machuyenbay"
                    value={newflight.machuyenbay}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Xuất phát"
                    name="xuatphat"
                    value={newflight.xuatphat}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Đích đến"
                    name="dichden"
                    value={newflight.dichden}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Số ghế trống"
                    name="soghetrong"
                    value={newflight.soghetrong}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="mb-4 flex flex-col gap-6"
                  style={{ width: "100%" }}
                >
                  <Input
                    type="text"
                    size="lg"
                    label="Thời gian khởi hành"
                    name="tgkhoihanh"
                    value={newflight.tgkhoihanh}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Thời gian đến"
                    name="tgden"
                    value={newflight.tgden}
                    onChange={handleInputChange}
                  />
                  <Input
                    size="lg"
                    name="tgbaydukien"
                    label="Thời gian bay dự kiến"
                    value={newflight.tgbaydukien}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Tình trạng"
                    name="tinhtrang"
                    value={newflight.tinhtrang}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4" style={{ justifyContent: "flex-end" }}>
                <Button className="mt-6" onClick={updateFlight}>
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
};

export default EditFlight;
