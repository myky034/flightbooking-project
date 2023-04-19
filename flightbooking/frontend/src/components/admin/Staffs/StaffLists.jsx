import React from 'react';
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import { BiEdit } from 'react-icons/bi';

const StaffLists = () => {
  return (
    <div>
      <table className="table shadow-lg p-5 mt-4">
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
          <tr>
            <td>
              <MdOutlineRemoveRedEye className="icon" />
            </td>
            <td>NV001</td>
            <td>myykyy</td>
            <td>Vũ Mỹ Kỳ</td>
            <td>vumyky.034@gmail.com</td>
            <td>0909684610</td>
            <td>Nữ</td>
            <td>Nhân Viên</td>
            <td>Staff</td>
            <td>
              <BiEdit className="icon" />
              <MdDeleteOutline className="icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StaffLists
