import React, { useEffect, useState } from "react";
import "./HomeUser.css";
import background from "../../../assets/background.jpg";
import axios from "axios";
import { Select, Option } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";

const BookingUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  //get san bay o viet nam
  const getCountries = async () => {
    await axios
      .get("http://localhost:8080/api/ms-sanbay/danhsach-sanbay?id=ALL")
      .then(function (res) {
        setCountries(res.data.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      id="booking"
      class="section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="section-center">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-2">
              <div className="booking-cta">
                <h1>Book your flight today</h1>
              </div>
            </div> */}
            <div className="col-md-12 col-md-offset-1">
              <div className="booking-form">
                <form>
                  <div className="form-group">
                    <div className="form-checkbox">
                      <label for="roundtrip">
                        <input type="radio" id="roundtrip" name="flight-type" />
                        <span></span>One way
                      </label>
                      <label for="one-way">
                        <input type="radio" id="one-way" name="flight-type" />
                        <span></span>Roundtrip
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <Select
                          label="Flying from"
                          onChange={(e) => console.log(e)}
                        >
                          {countries &&
                            countries.map((country, index) => (
                              <Option
                                key={index}
                                value={country}
                                style={{ textAlign: "left" }}
                              >
                                {"(" + country.maICAO_IATA + ")" + " "}
                                {country.tensanbay + " , "} {country.tinh}
                              </Option>
                            ))}
                        </Select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <Select label="Flying to">
                          {countries &&
                            countries.map((country, index) => (
                              <Option
                                key={index}
                                value={country}
                                style={{ textAlign: "left" }}
                              >
                                {"(" + country.maICAO_IATA + ")" + " "}
                                {country.tensanbay + " , "} {country.tinh}
                              </Option>
                            ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Departing</span>
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Returning</span>
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <Select
                          label="Adults (18+)"
                          onChange={(e) => console.log(e)}
                        >
                          <Option style={{ textAlign: "left" }}>1</Option>
                          <Option style={{ textAlign: "left" }}>2</Option>
                          <Option style={{ textAlign: "left" }}>3</Option>
                        </Select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <Select label="Children (0-17)">
                          <Option style={{ textAlign: "left" }} value="0">
                            0
                          </Option>
                          <Option style={{ textAlign: "left" }}>1</Option>
                          <Option style={{ textAlign: "left" }}>2</Option>
                        </Select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <Select
                          label="Travel class"
                          style={{ minWidth: "0px" }}
                        >
                          <Option style={{ textAlign: "left" }}>
                            Economy class
                          </Option>
                          <Option style={{ textAlign: "left" }}>
                            Business class
                          </Option>
                          <Option style={{ textAlign: "left" }}>
                            First class
                          </Option>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn">
                    <button className="submit-btn" type="submit">
                      Show flights
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingUser;
