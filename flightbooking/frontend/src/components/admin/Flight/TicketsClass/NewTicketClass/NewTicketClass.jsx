import React, { useEffect, useState } from "react";
import "./NewTicketClass.scss";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const NewTicketClass = () => {
  const initialValues = {
    tenhangve: "",
    giavecoban: "",
    loaive: "",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [ticketclass, setTicketClass] = useState(initialValues);

  useEffect(() => {
    loadTicketClass();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
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
      .then((res) => {
        setTicketClass({
          tenhangve: res.data.tenhangve,
          loaive: res.data.loaive,
          giavecoban: res.data.giavecoban,
        });
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
          <div className="grid gap-6">
            <Input
              label="Tên hạng vé"
              name="tenhangve"
              value={ticketclass.tenhangve}
              onChange={handleInputChange}
            />
            <Input
              label="Loại vé"
              name="loaive"
              value={ticketclass.loaive}
              onChange={handleInputChange}
            />
            <Input
              label="Giá vé"
              name="giavecoban"
              value={ticketclass.giavecoban}
              onChange={handleInputChange}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" onClick={handleOpen}>
            close
          </Button>
          <Button
            variant="primary"
            color="blue"
            onClick={saveTicketClass && handleOpen}
          >
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
};

export default NewTicketClass;
