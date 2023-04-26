import axios from "axios";
import StaffService from "./staffservice";

const NHANVIEN_API_BASE_URL = "http://localhost:8080/api/ms-user";

//Get method
const getAllStaff = () => {
  return NHANVIEN_API_BASE_URL.get("/all-users?id_1");
};

const getByID = () => {
  return NHANVIEN_API_BASE_URL.get("/all-users/${id}");
};

StaffService = {
  getAllStaff,
  getByID,
};

export default StaffService;
