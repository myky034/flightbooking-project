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

const NewAirLine = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
      tenhangbay: "",
      logohang: "",
      mota: "",
    };

    const [airline, setAirLine] = useState(initialValues);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setAirLine({ ...airline, [name]: value });
    };

    const saveAirLine = async () => {
      let data = {
        tensanbay: airline.tensanbay,
        maICAO_IATA: airline.maICAO_IATA,
        tinh: airline.tinh
      };

      await axios
        .post("http://localhost:8080/api/ms-sanbay/them-sanbay", data)
        .then(function (res) {
          setAirLine({
            tensanbay: res.data.tensanbay,
            maICAO_IATA: res.data.maICAO_IATA,
            tinh: res.data.tinh,
          });
          setSubmitted(true);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const newAirport = () => {
      setAirLine(initialValues);
      setSubmitted(false);
    };
  return (
    <div>
      
    </div>
  )
}

export default NewAirLine
