import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPlane = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlane({ ...plane, [name]: value });
  };

  useEffect(() => {
    loadPlane();
  }, []);

  const savePlane = async () => {
    let data = {
      tenmaybay: plane.tenmaybay,
      mamaybay: plane.mamaybay,
      nhasanxuat: plane.nhasanxuat,
      vantoc: plane.vantoc,
      tongsoghe: plane.tongsoghe,
      tongchieudai: plane.tongchieudai,
      saicanh: plane.saicanh,
      chieucao: plane.chieucao,
    };

    await axios
      .post("http://localhost:8080/api/ms-maybay/them-maybay", data)
      .then(function (res) {
        setPlane({
          tenmaybay: res.data.tenmaybay,
          mamaybay: res.data.mamaybay,
          nhasanxuat: res.data.nhasanxuat,
          vantoc: res.data.vantoc,
          tongsoghe: res.data.tongsoghe,
          tongchieudai: res.data.tongchieudai,
          saicanh: res.data.saicanh,
          chieucao: res.data.chieucao,
        });
        setSubmitted(true);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newPlane = () => {
    setPlane(initialValues);
    setSubmitted(false);
  };

  const loadPlane = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/ms-maybay/danhsach-maybay?id=ALL"
    );
    setPlane(result);
  };
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Thêm Máy Bay</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        style={{ backgroundColor: "unset" }}
        className="backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <DialogHeader>Thêm máy bay</DialogHeader>
          <XMarkIcon
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
            style={{ cursor: "pointer" }}
          />
        </div>
        <DialogBody divider>
          <div className="grid gap-3">
            <Input
              label="Mã máy bay"
              name="mamaybay"
              value={plane.mamaybay}
              onChange={handleInputChange}
            />
            <Input
              label="Tên máy bay"
              name="tenmaybay"
              value={plane.tenmaybay}
              onChange={handleInputChange}
            />
            <Input
              label="Nhà Sản Xuất"
              name="nhasanxuat"
              value={plane.nhasanxuat}
              onChange={handleInputChange}
            />
            <Input
              label="Vận tốc"
              name="vantoc"
              value={plane.vantoc}
              onChange={handleInputChange}
              type="number"
            />
            <Input
              label="Tổng số ghê"
              name="tongsoghe"
              value={plane.tongsoghe}
              type="number"
              onChange={handleInputChange}
            />
            <Input
              label="Tổng chiều dài"
              name="tongchieudai"
              value={plane.tongchieudai}
              type="number"
              onChange={handleInputChange}
            />
            <Input
              label="Sải cánh"
              name="saicanh"
              value={plane.saicanh}
              onChange={handleInputChange}
              type="number"
            />
            <Input
              label="Chiều cao"
              name="chieucao"
              value={plane.chieucao}
              type="number"
              onChange={handleInputChange}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" onClick={newPlane && handleOpen}>
            close
          </Button>
          <Button
            variant="primary"
            color="blue"
            type="submit"
            onClick={savePlane}
          >
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}

export default NewPlane
