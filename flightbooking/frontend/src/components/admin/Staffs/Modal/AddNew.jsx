import React, { useState } from "react";
import "./AddNew.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
                onClick={() => closeModal(false)}
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
                        <Field
                          type="text"
                          name="idNhanVien"
                          placeholder="Enter your id"
                          values={props.values.idNhanVien}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="idNhanVien"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Họ Tên</label>
                        <Field
                          type="text"
                          name="fullname"
                          placeholder="Enter your fullname"
                          values={props.values.fullname}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="fullname"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Ngày Sinh</label>
                        <Field
                          type="text"
                          name="birthday"
                          placeholder="Enter your day of birth"
                          values={props.values.birthday}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="birthday"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Số Điện Thoại</label>
                        <Field
                          type="text"
                          name="phoneNumber"
                          placeholder="Enter your phone number"
                          values={props.values.phoneNumber}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="phoneNumber"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          values={props.values.email}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="email"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Địa Chỉ</label>
                        <Field
                          as="textarea"
                          name="address"
                          placeholder="Enter your address"
                          values={props.values.address}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="address"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Giới Tính</label>
                        <Field component="div" name="myRadioGroup">
                          <input
                            type="radio"
                            id="inlineCheckbox1"
                            name="gender"
                            value="male"
                            defaultChecked={props.values.gender === "Nam"}
                          />
                          &nbsp;&nbsp;
                          <label htmlFor="radioOne">Nam</label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            id="inlineCheckbox2"
                            name="gender"
                            value="female"
                            defaultChecked={props.values.gender === "Nữ"}
                          />
                          &nbsp;&nbsp;
                          <label htmlFor="radioTwo">Nữ</label>
                        </Field>

                        <ErrorMessage
                          className="form-label text-danger"
                          name="gender"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>CCCD</label>
                        <Field
                          type="text"
                          name="cccd"
                          placeholder="Enter your citizen ID"
                          values={props.values.cccd}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="cccd"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Username</label>
                        <Field
                          type="text"
                          name="username"
                          placeholder="Enter your username"
                          values={props.values.username}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="username"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Password</label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          values={props.values.password}
                        />
                        <ErrorMessage
                          className="form-label text-danger"
                          name="password"
                          component="div"
                        />
                      </div>

                      <div className="col-md-12 form-input">
                        <label>Chức Vụ</label>
                        <Field
                          as="select"
                          name="position"
                          className="form-control"
                          values={props.values.position}
                        >
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
                        <Field
                          as="select"
                          name="role"
                          className="form-control"
                          values={props.values.role}
                        >
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

                      <button type="submit" className="btn btn-primary">
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
