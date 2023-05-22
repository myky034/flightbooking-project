import React, { useEffect, useState } from "react";
import "./NewTicketClass.scss";
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

const NewTicketClass = () => {
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
    tenhangve: "",
    giavecoban: "",
    loaive: "",
  };

  const [ticketclass, setTicketClass] = useState(initialValues);

  useEffect(() => {
    loadTicketClass();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTicketClass({ ...ticketclass, [name]: value });
  };

  const saveTicketClass = () => {
    let data = {
      tenhangve: ticketclass.tenhangve,
      loaive: ticketclass.loaive,
      giavecoban: ticketclass.giavecoban,
    };

    axios
      .post("http://localhost:8080/api/ms-hangve/them-hangve", data)
      .then(function (res) {
        setTicketClass({
          tenhangve: res.data.tenhangve,
          loaive: res.data.loaive,
          giavecoban: res.data.giavecoban,
        });
        setSubmitted(true);
        console.log(res.data);
        navigate("/ticketclass");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTicketClass = () => {
    setTicketClass(initialValues);
    setSubmitted(false);
  };

  const loadTicketClass = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/ms-hangve/danhsach-hangve?id=ALL"
    );
    setTicketClass(result.data);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Thêm Hạng Vé</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        style={{ backgroundColor: "unset" }}
        className="backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <DialogHeader>Thêm hạng vé</DialogHeader>
          <XMarkIcon
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
            style={{ cursor: "pointer" }}
          />
        </div>
        <DialogBody divider>
          <div className="grid gap-3">
            <Input
              label="Tên hạng vé"
              name="tenhangve"
              value={ticketclass.tenhangve}
              onChange={handleInputChange}
              // {...register("tenhangve", { required: true })}
            />
            {/* {errors.tenhangve && errors.tenhangve.type === "required" && (
              <p className="errorMsg" style={{ marginBottom: "0" }}>
                This is required.
              </p>
            )} */}
            <Input
              label="Loại vé"
              name="loaive"
              value={ticketclass.loaive}
              onChange={handleInputChange}
              // {...register("loaive", { required: true })}
            />
            {/* {errors.loaive && errors.loaive.type === "required" && (
              <p className="errorMsg" style={{ marginBottom: "0" }}>
                This is required.
              </p>
            )} */}
            <Input
              label="Giá vé"
              name="giavecoban"
              value={ticketclass.giavecoban}
              onChange={handleInputChange}
              type="number"
              step={0.1}
              // {...register("giavecoban", { required: true })}
            />
            {/* {errors.giavecoban && errors.giavecoban.type === "required" && (
              <p className="errorMsg" style={{ marginBottom: "0" }}>
                This is required.
              </p>
            )} */}
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
            onClick={saveTicketClass}
          >
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
};

export default NewTicketClass;
