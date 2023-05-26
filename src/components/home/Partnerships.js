import React, { Fragment, useState } from "react";
import "../../../src/assets/css/home/Partnerships.scss";
import { Link } from "react-router-dom";
import Nav from "../include/Nav";
import Resbtn from "../include/Resbtn";
import Download from "../include/Download";

import axios from "axios";
import Swal from "sweetalert2";

const Partnerships = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    abn: "",
    website: "",
    mobilenumber: "",
    email: "",
    partnership: "",
  });

  const { fullname, abn, website, mobilenumber, email, partnership } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullname: fullname,
      abn: abn,
      website: website,
      mobilenumber: mobilenumber,
      email: email,
      partnership: partnership,
    };

    axios.post("/api/partnership", data).then((res) => 
    {
      console.log(res.data.msg)
      if(res.data.msg === "Success"){
        Swal.fire({
            title: "Successfully sent!",
            icon: "success",
          });
      }
    }
    );
  };
  return (
    <Fragment>
      <div className="aboutus_section_1">
        <div className="container">
          <div
            id="nav_box1"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Link to="/">
              <img
                className="img-fluid"
                src="assets/img/index/logo.png"
                width="200"
                height="30"
                alt=""
                style={{ position: "absolute", top: "20%", left: "0" }}
              />
            </Link>
            <Nav />
          </div>
          <div
            id="nav_box2"
            style={{
              display: "none",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Link to="/">
              <img
                className="img-fluid"
                src="assets/img/index/logo.png"
                width="200"
                height="30"
                alt=""
                style={{ position: "absolute", top: "40%", left: "0" }}
              />
            </Link>
            {/* <Link to="" className="nav-link navbar_rightbox" href="#" >
                        &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Iconawesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                            
                        </Link> */}
            <Resbtn />
          </div>
          <div className="row aboutus_link_tab">
            <p className="aboutus_link_title">Partnerships</p>
            <p className="aboutus_link_info1">
              Home &gt; <span className="aboutus_link_info2">Partnerships</span>
            </p>
          </div>
        </div>
      </div>

      <div className="partnership_section_2">
        <div className="container">
          <div className="row section2_box">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="box_left">
                <p className="title1">Corporate Partner</p>
                <form id="partnership_form">
                  <div className="panel1">
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      onChange={onChange}
                      placeholder="Full Business Name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      name="abn"
                      onChange={onChange}
                      placeholder="ABN"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control margin-top-20"
                    name="website"
                    onChange={onChange}
                    placeholder="Website"
                  />
                  <input
                    type="text"
                    className="form-control margin-top-20"
                    name="mobilenumber"
                    onChange={onChange}
                    placeholder="Mobile Number"
                  />
                  <input
                    type="email"
                    className="form-control margin-top-20"
                    name="email"
                    onChange={onChange}
                    placeholder="Your Email"
                  />

                  <textarea
                    className="form-control margin-top-30"
                    name="partnership"
                    onChange={onChange}
                    placeholder="Suggested Corporate Partnership"
                  />
                </form>

                <button
                  type="submit"
                  className="btn btn-warning margin-top-20"
                  onClick={(e) => onSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <img
                className="img-fluid"
                src="assets/img/partnerships/partnerships.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="partnership_section_3">
        <div className="container">
          <Download />
        </div>
      </div>
    </Fragment>
  );
};

export default Partnerships;
