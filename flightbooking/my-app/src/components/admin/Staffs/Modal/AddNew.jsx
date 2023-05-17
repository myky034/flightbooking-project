import React, { useState } from "react";
import "./AddNew.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddNew({ closeModal }) {

  const initialValues = {

    idNhanVien: "",
    fullname: "",
    birthday: "",
    phoneNumber: "",
    address: "",
    email: "",
    gender: "",
    cccd: "",
    username: "",
    password: "",
    position: "",
    role: "",
  };

  const [newuser, setNewUser] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {

    const { name, value } = event.target;
    console.log(value)
    setNewUser({ ...newuser, [name]: value });
  };

  const saveNewUser = () => {
    console.log('check new user: ', newUsers)
    const isValid = checkValidateInput();
    if (isValid === true) {

      let data = {
        idNhanVien: newuser.idNhanVien,
        fullname: newuser.fullname,
        birthday: newuser.birthday,
        phoneNumber: newuser.phoneNumber,
        address: newuser.address,
        email: newuser.email,
        gender: newuser.gender,
        cccd: newuser.cccd,
        username: newuser.username,
        password: newuser.password,
        position: newuser.position,
        role: newuser.role,
      };

      //Post user
      axios.post("https://6448ce78e7eb3378ca364b22.mockapi.io/api/Users", data)
        .then((response) => {
          setNewUser({
            idNhanVien: response.data.idNhanVien,
            fullname: response.data.fullname,
            birthday: response.data.birthday,
            phoneNumber: response.data.phoneNumber,
            address: response.data.address,
            email: response.data.email,
            gender: response.data.gender,
            cccd: response.data.cccd,
            username: response.data.username,
            password: response.data.password,
            position: response.data.position,
            role: response.data.role,
          });
          setSubmitted(true);
          console.log(response.data);
        }
        )
        .catch(e => {
          console.log(e);
        });
    }
  };

  const checkValidateInput = () => {
    let isValid = true;
    let arrInput = ['idNhanVien', 'fullname', 'birthday', 'phoneNumber', 'address', 'email', 'gender', 'cccd', 'username', 'password', 'position', 'role'];
    for (let i = 0; i < arrInput.length; i++) {
      if (!initialValues.fullname) {
        console.log('check input fullname: ', initialValues.fullname);
        isValid = false;
        alert('Missing params: ' + initialValues.fullname);
        break;
      }
    }
    return isValid;
  }

  const newUsers = () => {
    setNewUser(initialValues);
    setSubmitted(false);
  };

  const onSubmit = (values, props) => {
    console.log(values);
  };

  const validationStaffSchema = Yup.object().shape({
    idNhanVien: Yup.string().required("Please enter your ID !"),
    fullname: Yup.string().required("Please enter your fullname !"),
    birthday: Yup.string().required("Please enter your birthday !"),
    phoneNumber: Yup.string().required("Please enter your phone number !"),
    address: Yup.string().required("Please enteryour address !"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email !"),
    gender: Yup.string().required("Please choose your gender !"),
    cccd: Yup.string().required("Please enter your citizen ID !"),
    username: Yup.string().required("Please enter your username !"),
    password: Yup.string().required("Please enter your password !"),
    position: Yup.string()
      .oneOf(["staff", "staff", "staff"], "Invalid position")
      .required("Please choose your position !"),
    role: Yup.string()
      .oneOf(["Admin", "User"], "Invalid role")
      .required("Please choose your role !"),
  });

  return (
    <div className="modal-popup">
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modalpopup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Staff
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => newUsers && closeModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationStaffSchema}
              >
                {(props) => (
                  <Form>
                    <div className="row">
                      <div className="col-md-12 form-input">
                        <label>Mã Nhân Viên</label>
                        <input
                          type="text"
                          name="idNhanVien"
                          placeholder="Enter your id"
                          values={props.values.idNhanVien}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="idNhanVien"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Họ Tên</label>
                        <input
                          type="text"
                          name="fullname"
                          placeholder="Enter your fullname"
                          values={props.values.fullname}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="fullname"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Ngày Sinh</label>
                        <input
                          type="text"
                          name="birthday"
                          placeholder="Enter your day of birth"
                          values={props.values.birthday}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="birthday"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Số Điện Thoại</label>
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="Enter your phone number"
                          values={props.values.phoneNumber}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="phoneNumber"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          values={props.values.email}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="email"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Địa Chỉ</label>
                        <input
                          as="textarea"
                          name="address"
                          placeholder="Enter your address"
                          values={props.values.address}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="address"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Giới Tính</label>
                        <label>
                          <Field type="radio" name="gender" value="male" defaultChecked={props.values.gender === "Nam"} onChange={handleInputChange} />
                          Nam
                        </label>
                        <label>
                          <Field type="radio" name="gender" value="male" defaultChecked={props.values.gender === "Nữ"} onChange={handleInputChange} />
                          Nữ
                        </label>

                        <ErrorMessage
                          className="form-label text-danger"
                          name="gender"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>CCCD</label>
                        <input
                          type="text"
                          name="cccd"
                          placeholder="Enter your citizen ID"
                          values={props.values.cccd}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="cccd"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Username</label>
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter your username"
                          values={props.values.username}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="username"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          values={props.values.password}
                          onChange={handleInputChange}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="password"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Chức Vụ</label>
                        <Field as="select" name="position" className="form-control" values={props.values.position} onChange={handleInputChange}>
                          <option value="">Select Position</option>
                          <option value="staff">Staff</option>
                          <option value="staff">Staff</option>
                          <option value="staff">Staff</option>
                        </Field>

                        <ErrorMessage
                          className="form-label text-danger"
                          name="position"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Phân Quyền</label>
                        <Field as="select" name="position" className="form-control" values={props.values.role} onChange={handleInputChange}>
                          <option value="">Select Role</option>
                          <option value="Admin">Admin</option>
                          <option value="User">User</option>
                        </Field>

                        <ErrorMessage
                          className="form-label text-danger"
                          name="role"
                          component="div"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary" onClick={saveNewUser}>
                        Save changes
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeModal(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNew;
