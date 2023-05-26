import React, { Fragment } from "react";
import "../../assets/css/home/Connect.scss";
import { Link } from "react-router-dom";
import Nav from "../include/Nav";
import Resbtn from "../include/Resbtn";
import { Fade } from "react-reveal";
import Download from "../include/Download";

const Connect = () => {
  return (
    <Fragment>
      <div className="connect_section_1">
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
        </div>
      </div>
      <div className="connect_section_2">
        <div className="container">
          <div className="row panel">
            <div className="col-md-6">
              <Fade left>
                <p className="title1">
                  The Complete Business Solutions Gateway
                </p>
                <p className="title2">
                Transact with OX Coin to Engage business professionals from around the world to help satisfy whats required
                </p>
              </Fade>
            </div>
            <div className="col-md-6">
              <Fade top>
                <img
                  className="img-fluid"
                  src="assets/img/connect/building.svg"
                  alt=""
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="connect_section_3">
        <div className="connect-accounting">
          <div className="row connect_connect_tab">
            <div className="col-md-8">
              <Fade left>
                <img
                  className="img-fluid"
                  src="assets/img/connect/accounting.svg"
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-md-4 connect_connect_panel">
              <Fade right>
                <div className="connect_connect_panel1">
                  <p className="connect_connect_panel1_text1">Accounting</p>
                  <p className="connect_connect_text2">
                  Your personal tax return completed online within a few hours. <br />Currently this is available for Australian residents only.
                  </p>
                </div>
                <div>
                <Link to="/contactus">
                    <button className="btn btn-warning">Contact Us</button>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="connect_section_4">
        <div className="container">
          <div className="row panel connect-service">
            <div className="col-md-4">
              <Fade right>
                <div className="connect_connect_panel1">
                  <p className="connect_connect_panel1_text1">Legal Services</p>
                  <p className="connect_connect_text2">
                  From personal to business professional legal representation. <br />Engage on our our trusted lawyers.
                  </p>
                </div>
                <div>
                <Link to="/contactus">
                    <button className="btn btn-warning">Contact Us</button>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="connect_section_5">
        <div className="container">
          <div className="row connect_connect_tab">
            <div className="col-md-7">
              <Fade left>
                <img
                  className="img-fluid"
                  src="assets/img/connect/company.png"
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-md-5 connect_connect_panel">
              <Fade right>
                <div className="connect_connect_panel1">
                  <p className="connect_connect_panel1_text1">Company Setups</p>
                  <p className="connect_connect_text2">
                  Looking for property from all parts of the world? <br />Explore options with our property experts.
                  </p>
                </div>
                <div>
                <Link to="/contactus">
                    <button className="btn btn-warning">Contact Us</button>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="connect_section_6">
        <div className="container">
          <div className="row panel finance-background">
            <div className="col-md-5">
              <Fade right>
                <div className="connect_connect_panel1">
                  <p className="connect_connect_panel1_text1">Finance</p>
                  <p className="connect_connect_text2">
                  Engage our finance professionals for all types of funding requirements, medium small or large.
                  </p>
                </div>
                <div>
                <Link to="/contactus">
                    <button className="btn btn-warning">Contact Us</button>
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="col-md-7">
              <Fade left>
                <img
                  className="img-fluid"
                  src="assets/img/connect/finance.png"
                  alt=""
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="connect_section_7">
        <div className="community-header">
          <p className="connect_connect_panel1_text1">
            The OX community works with talent from around the world,
            <br />
            providing you the best solutions to strive in your <br />
            targeted field
          </p>
          <Fade bottom>
            <img
              className="img-fluid"
              src="assets/img/connect/community.png"
              alt=""
            />
          </Fade>
        </div>
      </div>
      <div className="connect_download">
        <div className="container">
          <Fade bottom>
            <Download />
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default Connect;
