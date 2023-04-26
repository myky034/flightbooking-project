import React, { useState, useEffect } from "react";
import "./StaffLists.scss";
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

const StaffLists = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const [userAllData, setAllUsers] = useState([]);

  //Get with axios
  useEffect(() => {
    setisLoading(true);
  // Get axios
    axios.get("https://6448ce78e7eb3378ca364b22.mockapi.io/api/Users")
    // axios
    //   .get("http://localhost:8080/api/ms-user/all-users?id=ALL")
      .then((response) => {
        setAllUsers(response.data);
        setisLoading(false);
        console.log(response.data);
      })
      .catch((e) => {
        setisError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading data</h1>;
  else if (userAllData && !isError)
    return (
      <div>
        <table className="table p-5 mt-4">
          <thead className="thead-dark">
            <tr>
              <th className="text-primar text-center" scope="col"></th>
              <th className="text-primar" scope="col">
                ID
              </th>
              <th className="text-primar" scope="col">
                Username
              </th>
              <th className="text-primar" scope="col">
                Name
              </th>
              <th className="text-primar" scope="col">
                Email
              </th>
              <th className="text-primar" scope="col">
                Phone
              </th>
              <th className="text-primar" scope="col">
                Gender
              </th>
              <th className="text-primar" scope="col">
                Position
              </th>
              <th className="text-primar" scope="col">
                Role
              </th>
              <th className="text-primar" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userAllData && userAllData.map((item) => {
              return (
                <tr>
                  <td>
                    <MdOutlineRemoveRedEye className="icon" />
                  </td>
                  <td>{item.manhanvien}</td>
                  <td>{item.username}</td>
                  <td>{item.tennhanvien}</td>
                  <td>{item.email}</td>
                  <td>{item.sodienthoai}</td>
                  <td>{item.gioitinh}</td>
                  <td>{item.chucvu}</td>
                  <td>{item.phanquyen}</td>
                  <td>
                    <BiEdit className="icon" />
                    <MdDeleteOutline className="icon" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default StaffLists;
