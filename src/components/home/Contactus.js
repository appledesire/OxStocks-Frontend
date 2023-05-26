import React, { Fragment, useEffect, useState } from "react";
import "../../assets/css/home/Contactus.scss";
import Download from "../include/Download";
import Nav from "../include/Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { Fade } from "react-reveal";
import Resbtn from "../include/Resbtn";


const Contactus = () => {
  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);

  const [formData, setFormData] = useState({
    fullname: "",
    contactnumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const { fullname, contactnumber, email, subject, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullname: fullname,
      contactnumber: contactnumber,
      email: email,
      subject: subject,
      message: message,
    };

    axios.post("/api/contacts", data).then((res) => 
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
      <div className="contact_section_1">
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
          <div className="row contact_link_tab">
            <p className="contact_link_title">Contact Us</p>
            <p className="contact_link_info1">
              Home &gt; <span className="contact_link_info2">Contact Us</span>
            </p>
          </div>
        </div>
      </div>

      <div className="contact_section2">
        <div className="container">
          <div className="row contact_msg_box">
            <Fade top>
              <div className="col-xl-6 col-md-12">
                <p className="contact_msg_box_left_text1">
                  Get in Touch with OX STOCKS
                </p>
                <p className="contact_msg_box_left_text2">
                  If permitted, please contact your local officer directly
                  otherwise fill in the contact us form to get in touch{" "}
                </p>
                <form id="contact_form">
                  <div className="row contact_msg_input_box">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="fullname"
                        onChange={onChange}
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        id="lastname"
                        name="contactnumber"
                        onChange={onChange}
                        placeholder="Contact Number"
                      />
                    </div>
                  </div>
                  <div className="row contact_msg_input_box">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={onChange}
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        onChange={onChange}
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="row contact_msg_input_box">
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        id="message"
                        name="message"
                        onChange={onChange}
                        style={{ height: "200px" }}
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </Fade>
            <Fade right>
              <div className="offset-xl-1 col-xl-5 col-md-12 contact_msg_box_right">
                <div className="contact_icon_panel">
                  <img
                    className="img-fluid"
                    src="assets/img/contactus/home_icon.png"
                    width="70"
                    height="70"
                    alt=""
                    style={{ marginRight: "40px" }}
                  />
                  <div className="contact_msg_box_right_text">
                    <Link to="/location">
                      <p className="contact_msg_box_right_text1">
                        Office Locations
                      </p>
                    </Link>
                    <p className="contact_msg_box_right_text2">
                      {" "}
                      Check out our global offices to get in touch with your
                      local officer{" "}
                    </p>
                  </div>
                </div>
                <div className="contact_icon_panel">
                  <img
                    className="img-fluid"
                    src="assets/img/contactus/livechat.png"
                    width="70"
                    height="70"
                    alt=""
                    style={{ marginRight: "20px" }}
                  />
                  <div className="contact_msg_box_right_text">
                    <p className="contact_msg_box_right_text1">Live Chat</p>
                    <p className="contact_msg_box_right_text2">
                      Get in touch with someone via live chat{" "}
                    </p>
                  </div>
                </div>
                {/* <div className="contact_icon_panel">
                                    <img className="img-fluid" src="assets/img/contactus/phone_icon.png" alt="" width="80px" />
                                    <div className="contact_msg_box_right_text">
                                        <p className="contact_msg_box_right_text1">Live Chat</p>
                                        <p className="contact_msg_box_right_text2">Get in touch with someone via live chat</p>
                                    </div>
                                </div> */}
                <hr style={{ backgroundColor: "#ffffffb4" }} />
                <div className="contact_icon_panel">
                  {/* <div className="contact_msg_box_right_img"><img className="img-fluid" src="assets/img/contactus/msg_icon.png" alt="" /></div> */}
                  <div className="contact_msg_box_right_text">
                    <p className="contact_msg_box_right_text1">
                      Ask the Community
                    </p>
                    <p className="contact_msg_box_right_text2">
                      Join our OX Discord and connect with OX users from around
                      the world
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="row">
              <div className="contact_sendMessage_form">
                <button
                  type="submit"
                  onClick={(e) => onSubmit(e)}
                  className="contact_sendMessage_btn"
                >
                  Send Message
                </button>
              </div>
            </div>
          </Fade>
          <Fade left>
            <Download />
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default Contactus;
