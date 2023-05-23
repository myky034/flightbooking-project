import React, { useEffect, useState } from 'react';
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

const NewFlight = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
    });

    const initialValues = {
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
      loadTicketClass();
    }, []);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewFlight({ ...newflight, [name]: value });
    };

    const saveNewFlight = () => {
      let data = {
        machuyenbay: newflight.machuyenbay,
        tgkhoihanh: newflight.tgkhoihanh,
        tgden: newflight.tgden,
        tgbaydukien: newflight.tgbaydukien,
        xuatphat: newflight.xuatphat,
        dichden: newflight.dichden,
        soghetrong: newflight.soghetrong,
        tinhtrang: newflight.tinhtrang,
      };

      axios
        .post("http://localhost:8080/api/ms-chuyenbay/them-chuyenbay", data)
        .then(function (res) {
          setNewFlight({
            machuyenbay: res.data.machuyenbay,
            tgkhoihanh: res.data.tgkhoihanh,
            tgden: res.data.tgden,
            tgbaydukien: res.data.tgbaydukien,
            xuatphat: res.data.xuatphat,
            dichden: res.data.dichden,
            soghetrong: res.data.soghetrong,
            tinhtrang: res.data.tinhtrang,
          });
          setSubmitted(true);
          console.log(res.data);
          navigate("/flight");
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const newTicketClass = () => {
      setNewFlight(initialValues);
      setSubmitted(false);
    };

    const loadTicketClass = async () => {
      const result = await axios.get(
        "http://localhost:8080/api/ms-chuyenbay/danhsach-chuyenbay?id=ALL"
      );
      setNewFlight(result.data);
    };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Thêm Chuyến Bay</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        style={{ backgroundColor: "unset" }}
        className="backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <DialogHeader>Thêm chuyến bay</DialogHeader>
          <XMarkIcon
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
            style={{ cursor: "pointer" }}
          />
        </div>
        <DialogBody divider>
          <div className="grid gap-3">
            <Input
              label="Mã chuyến bay"
              name="machuyenbay"
              value={newflight.machuyenbay}
              onChange={handleInputChange}
              // {...register("tenhangve", { required: true })}
            />
            <Input
              label="Xuất phát"
              name="xuatphat"
              value={newflight.xuatphat}
              onChange={handleInputChange}
              // {...register("tenhangve", { required: true })}
            />
            {/* {errors.tenhangve && errors.tenhangve.type === "required" && (
              <p className="errorMsg" style={{ marginBottom: "0" }}>
                This is required.
              </p>
            )} */}
            <Input
              label="Đích đến"
              name="dichden"
              value={newflight.dichden}
              onChange={handleInputChange}
              // {...register("loaive", { required: true })}
            />
            {/* {errors.loaive && errors.loaive.type === "required" && (
              <p className="errorMsg" style={{ marginBottom: "0" }}>
                This is required.
              </p>
            )} */}
            <Input
              label="Thời gian khởi hành"
              name="tgkhoihanh"
              value={newflight.tgkhoihanh}
              onChange={handleInputChange}
              type="text"
              // {...register("giavecoban", { required: true })}
            />
            {/* {errors.giavecoban && errors.giavecoban.type === "required" && (
              <p className="errorMsg" style={{ marginBottom: "0" }}>
                This is required.
              </p>
            )} */}
            <Input
              label="Thời gian đến"
              name="tgden"
              value={newflight.tgden}
              onChange={handleInputChange}
              type="text"
              // {...register("giavecoban", { required: true })}
            />
            <Input
              label="Thời gian bay dự kiến"
              name="tgbaydukien"
              value={newflight.tgbaydukien}
              onChange={handleInputChange}
              type="number"
              // {...register("giavecoban", { required: true })}
            />
            <Input
              label="Số ghế trống"
              name="soghetrong"
              value={newflight.soghetrong}
              onChange={handleInputChange}
              type="number"
              // {...register("giavecoban", { required: true })}
            />
            <Input
              label="Tình trạng"
              name="tinhtrang"
              value={newflight.tinhtrang}
              onChange={handleInputChange}
              type="number"
              // {...register("giavecoban", { required: true })}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" onClick={newTicketClass && handleOpen}>
            close
          </Button>
          <Button
            variant="primary"
            color="blue"
            type="submit"
            onClick={saveNewFlight}
          >
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}

export default NewFlight
