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
import { useForm } from "react-hook-form";

const NewAirport = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAirport({ ...airport, [name]: value });
  };

  useEffect(() => {
    loadAirport();
  }, []);

  const saveAirport = async () => {
    let data = {
      tensanbay: airport.tensanbay,
      maICAO_IATA: airport.maICAO_IATA,
      tinh: airport.tinh,
      soduongbang: airport.soduongbang,
      loaiduongbang: airport.loaiduongbang,
      chieudaidb: airport.chieudaidb,
      baydem: airport.baydem,
      bayquocte: airport.bayquocte,
    };

    await axios
      .post("http://localhost:8080/api/ms-sanbay/them-sanbay", data)
      .then(function (res) {
        setAirport({
          tensanbay: res.data.tensanbay,
          maICAO_IATA: res.data.maICAO_IATA,
          tinh: res.data.tinh,
          soduongbang: res.data.soduongbang,
          loaiduongbang: res.data.loaiduongbang,
          chieudaidb: res.data.chieudaidb,
          baydem: res.data.baydem,
          bayquocte: res.data.bayquocte,
        });
        setSubmitted(true);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newAirport = () => {
    setAirport(initialValues);
    setSubmitted(false);
  };

  const loadAirport = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/ms-sanbay/danhsach-sanbay?id=ALL"
    );
    setAirport(result);
  };
  
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Thêm Sân Bay</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        style={{ backgroundColor: "unset" }}
        className="backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <DialogHeader>Thêm sân bay</DialogHeader>
          <XMarkIcon
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
            style={{ cursor: "pointer" }}
          />
        </div>
        <DialogBody divider>
          <div className="grid gap-3">
            <Input
              label="Mã sân bay"
              name="maICAO_IATA"
              value={airport.maICAO_IATA}
              onChange={handleInputChange}
            />
            <Input
              label="Tên sân bay"
              name="tensanbay"
              value={airport.tensanbay}
              onChange={handleInputChange}
            />
            <Input
              label="Tỉnh"
              name="tinh"
              value={airport.tinh}
              onChange={handleInputChange}
            />
            <Input
              label="Số đường băng"
              name="soduongbang"
              value={airport.soduongbang}
              onChange={handleInputChange}
              type="number"
            />
            <Input
              label="Loại đường băng"
              name="loaiduongbang"
              value={airport.loaiduongbang}
              onChange={handleInputChange}
            />
            <Input
              label="Chiều dài đường băng"
              name="chieudaidb"
              value={airport.chieudaidb}
              onChange={handleInputChange}
            />
            <Input
              label="Bay đêm"
              name="baydem"
              value={airport.baydem}
              onChange={handleInputChange}
            />
            <Input
              label="Bay quốc tế"
              name="bayquocte"
              value={airport.bayquocte}
              onChange={handleInputChange}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" onClick={newAirport && handleOpen}>
            close
          </Button>
          <Button
            variant="primary"
            color="blue"
            type="submit"
            onClick={saveAirport}
          >
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
};

export default NewAirport;
