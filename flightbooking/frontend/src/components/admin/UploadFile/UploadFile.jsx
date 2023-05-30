import React, { Fragment, useState } from "react";
import "./uploader.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { read, utils, writeFile } from "xlsx";
import * as XLSX from "xlsx";

const UploadFile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [fileExcel, setFileExcel] = useState(null);
  const [filename, setFileName] = useState();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFileExcel(file.name);

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(jsonData);
  };

  const handleImportFile = (e) => {
    
  };

  return (
    <div>
      <Fragment>
        <Button onClick={handleOpen} variant="gradient">
          Upload Files
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Upload Files</DialogHeader>
          <DialogBody divider>
            <form
              onClick={() => document.querySelector(".input-field").click()}
              className="form-upload"
            >
              <input
                type="file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                className="input-field"
                hidden
                onChange={handleFileChange}
              />

              {fileExcel ? (
                <p>
                  <span>{fileExcel}</span>
                </p>
              ) : (
                <>
                  <MdCloudUpload color="#1475cf" size={60} />
                  <p>Browse Files to upload</p>
                </>
              )}
            </form>

            <section className="uploaded-row">
              <AiFillFileImage color="#1475cf" />
              <span className="upload-content">
                {fileExcel} -
                <MdDelete
                  onClick={() => {
                    setFileName("No selected File");
                    setFileExcel(null);
                  }}
                />
              </span>
            </section>
          </DialogBody>
          <DialogFooter>
            <Button variant="outlined" onClick={handleOpen} className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button variant="primary" color="blue" onClick={handleImportFile}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </div>
  );
};

export default UploadFile;
