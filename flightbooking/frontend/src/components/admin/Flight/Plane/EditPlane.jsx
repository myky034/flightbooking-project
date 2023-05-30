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

const EditPlane = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialValues = {
    id: "",
    tenmaybay: "",
    mamaybay: "",
    nhasanxuat: "",
    vantoc: "",
    tongsoghe: "",
    tongchieudai: "",
    saicanh: "",
    chieucao: "",
  };

  const [plane, setPlane] = useState(initialValues);

  useEffect(() => {
    editPlane();
  }, []);

  //get method
  const editPlane = async () => {
    axios
      .get("http://localhost:8080/api/ms-maybay/danhsach-maybay?id=" + id)
      .then(function (res) {
        setPlane(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlane({ ...plane, [name]: value });
  };

  const handleClose = () => {
    setPlane(initialValues);
    navigate("/plane");
  };
  
  const updatePlane = () => {
    let data = {
      id: plane.id,
      mamaybay: plane.mamaybay,
      tenmaybay: plane.tenmaybay,
      nhasanxuat: plane.nhasanxuat,
      vantoc: plane.vantoc,
      tongsoghe: plane.tongsoghe,
      tongchieudai: plane.tongchieudai,
      saicanh: plane.saicanh,
      chieucao: plane.chieucao,
    };

    //put method
    axios
      .put("http://localhost:8080/api/ms-maybay/chinhsua-maybay", data)
      .then(function (res) {
        setPlane(res.data.data);
        console.log(res.data);
        navigate("/plane");
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
                Chỉnh Sửa Máy Bay
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
                    label="Mã máy bay"
                    name="mamaybay"
                    value={plane.mamaybay}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Tên máy bay"
                    name="tenmaybay"
                    value={plane.tenmaybay}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Nhà sản xuất"
                    name="nhasanxuat"
                    value={plane.nhasanxuat}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Vận tốc"
                    name="vantoc"
                    value={plane.vantoc}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="mb-4 flex flex-col gap-6"
                  style={{ width: "100%" }}
                >
                  <Input
                    type="number"
                    size="lg"
                    label="Tổng số ghế"
                    name="tongsoghe"
                    value={plane.tongsoghe}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Tổng chiều dài"
                    name="tongchieudai"
                    value={plane.tongchieudai}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Sải cánh"
                    name="saicanh"
                    value={plane.saicanh}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Chiều cao"
                    name="chieucao"
                    value={plane.chieucao}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4" style={{ justifyContent: "flex-end" }}>
                <Button className="mt-6" onClick={updatePlane}>
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

export default EditPlane
