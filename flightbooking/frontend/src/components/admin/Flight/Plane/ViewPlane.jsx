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
import { useParams, useNavigate, Link } from "react-router-dom";

const ViewPlane = () => {
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
  },[]);

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

  const handleClose = () => {
    setPlane(initialValues);
    navigate("/plane");
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
                Chi Tiết Máy Bay
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
                    disabled
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Tên máy bay"
                    name="tenmaybay"
                    value={plane.tenmaybay}
                    disabled
                  />
                  <Input
                    type="text"
                    size="lg"
                    label="Nhà sản xuất"
                    name="nhasanxuat"
                    value={plane.nhasanxuat}
                    disabled
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Vận tốc"
                    name="vantoc"
                    value={plane.vantoc}
                    disabled
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
                    disabled
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Tổng chiều dài"
                    name="tongchieudai"
                    value={plane.tongchieudai}
                    disabled
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Sải cánh"
                    name="saicanh"
                    value={plane.saicanh}
                    disabled
                  />
                  <Input
                    type="number"
                    size="lg"
                    label="Chiều cao"
                    name="chieucao"
                    value={plane.chieucao}
                    disabled
                  />
                </div>
              </div>
              <div className="mb-4" style={{ justifyContent: "flex-end" }}>
                <Link
                  to={`/editplane/${plane.id}`}
                  type="button"
                  style={{ marginRight: "10px", position: "relative", overflow: "hidden", marginTop: "1.5rem" }}
                  className="mt-6 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                >Update</Link>
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

export default ViewPlane
