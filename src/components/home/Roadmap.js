import React, { Fragment, useEffect } from "react";
import "../../assets/css/home/Roadmap.scss";
import Download from "../include/Download";
import Nav from "../include/Nav";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Resbtn from "../include/Resbtn";

const Roadmap = () => {
  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);
  return (
    <Fragment>
      <div className="roadmap_section1">
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
          <div className="row roadmap_link_tab">
            <p className="roadmap_link_title">Roadmap</p>
            <p className="roadmap_link_info1">
              Home &gt; <span className="roadmap_link_info2">Roadmap</span>
            </p>
          </div>
        </div>
      </div>
      <div className="roadmap_section2">
        <div className="container">
          <div className="row roadmap_roadmap_tab">
            <div className="col-md-6 roadmap_roadmap_panel">
              <Fade top>
                <div className="roadmap_roadmap_panel1">
                  <p className="roadmap_roadmap_panel1_text1">
                    Q1 : Crypto Exchange
                  </p>
                  <p className="roadmap_color_text">
                    Ability for OX users to buy and store crypto in their OX
                    Wallets on our platform
                  </p>
                  <hr />
                  <p className="roadmap_roadmap_panel1_text1">
                    Goals and Tasks:
                  </p>
                  <p className="roadmap_roadmap_panel1_text2">
                  We aim for OX STOCKS to be the largest crypto currency exchange in Australia. Utilising our exchange to provide our users with ultimate security in supporting their crypto holdings.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="roadmap_roadmap_panel2">
                  <div className="roadmap_roadmap_panel2_img">
                    <img
                      className="img-fluid"
                      src="assets/img/roadmap/icon-check.png"
                      alt=""
                    />
                    <p className="roadmap_roadmap_panel2_text1">
                    Crypto Staking
                    </p>
                  </div>
                  <div>
                    <p className="roadmap_roadmap_panel2_text2">
                    We aim to offer our users with a large range of staking options. OX Labs will continue to create new tokens and projects, offering these projects to our members as rewards.
                    </p>
                  </div>
                </div>
                <div className="roadmap_roadmap_panel2">
                  <div className="roadmap_roadmap_panel2_img">
                    <img
                      className="img-fluid"
                      src="assets/img/roadmap/icon-check.png"
                      alt=""
                    />
                    <p className="roadmap_roadmap_panel2_text1">
                    OX Wallet
                    </p>
                  </div>
                  <div>
                    <p className="roadmap_roadmap_panel2_text2">
                    As our exchange continues to grow we will provide the opportunity for our members to hold different types of crypto currencies in their OX Wallet.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-6">
              <Fade left>
                <img
                  className="img-fluid"
                  src="assets/img/roadmap/exchange.png"
                  alt=""
                />
              </Fade>
            </div>
          </div>
          <div className="row roadmap_roadmap_tab">
            <div className="col-md-6">
              <Fade left>
                <img
                  className="img-fluid"
                  src="assets/img/roadmap/marketplace.png"
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-md-6 roadmap_roadmap_panel">
              <Fade top>
                <div className="roadmap_roadmap_panel1">
                  <p className="roadmap_roadmap_panel1_text1">
                    Q2 : Marketplace Expansion
                  </p>
                  <p className="roadmap_color_text">
                    Commercial items available for purchase using crypto
                    currency on our marketplace. As a merchant / business owner,
                    you’ll be able to sell items to our crypto community
                  </p>
                  <hr />
                  <p className="roadmap_roadmap_panel1_text1">
                    Goals and Tasks:
                  </p>
                  <p className="roadmap_roadmap_panel1_text2">
                  Our marketplace currently offers digital assets such as domain names and websites. Our marketplace expansion includes selling physical items such as computer items, cars and clothing.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="roadmap_roadmap_panel2">
                  <div className="roadmap_roadmap_panel2_img">
                    <img
                      className="img-fluid"
                      src="assets/img/roadmap/icon-check.png"
                      alt=""
                    />
                    <p className="roadmap_roadmap_panel2_text1">
                    NFT’s
                    </p>
                  </div>
                  <div>
                    <p className="roadmap_roadmap_panel2_text2">
                    Creating our own NFT’s offering these items to our members with intentions to introduce a complete NFT marketplace for other users to create and sell NFT’s on our platform.
                    </p>
                  </div>
                </div>
                <div className="roadmap_roadmap_panel2">
                  <div className="roadmap_roadmap_panel2_img">
                    <img
                      className="img-fluid"
                      src="assets/img/roadmap/icon-check.png"
                      alt=""
                    />
                    <p className="roadmap_roadmap_panel2_text1">
                    Business & Individuals
                    </p>
                  </div>
                  <div>
                    <p className="roadmap_roadmap_panel2_text2">
                    Like other global marketplaces around the world we aim to have a similar outlook, we endeavor to introduce users and business’ the ability to sell their products on our marketplace. For business looking to accept crypto as a primary or secondary method of payment.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="roadmap_section3">
        <div className="container">
          <div className="row roadmap_roadmap_tab">
            <div className="col-md-6 roadmap_roadmap_panel">
              <Fade top>
                <div className="roadmap_roadmap_panel1">
                  <p className="roadmap_roadmap_panel1_text1">Q3 : OX Pay</p>
                  <p className="roadmap_color_text">
                    Use OX Coin at FIAT based physical business’ such as your
                    local cafe or restaurant. Integration with Apple + Google
                    Pay
                  </p>
                  <hr />
                  <p className="roadmap_roadmap_panel1_text1">
                    Goals and Tasks:
                  </p>
                  <p className="roadmap_roadmap_panel1_text2">
                  Providing the ability for users to use crypto as a method of payment at business’ accepting multiple types of payments.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="roadmap_roadmap_panel2">
                  <div className="roadmap_roadmap_panel2_img">
                    <img
                      className="img-fluid"
                      src="assets/img/roadmap/icon-check.png"
                      alt=""
                    />
                    <p className="roadmap_roadmap_panel2_text1">
                    Apple + Google Wallet
                    </p>
                  </div>
                  <div>
                    <p className="roadmap_roadmap_panel2_text2">
                    Integrating our OX Wallet with Apple & Android smart phone applications including Apple & Google Wallet.
                    </p>
                  </div>
                </div>
                <div className="roadmap_roadmap_panel2">
                  <div className="roadmap_roadmap_panel2_img">
                    <img
                      className="img-fluid"
                      src="assets/img/roadmap/icon-check.png"
                      alt=""
                    />
                    <p className="roadmap_roadmap_panel2_text1">
                    OX Card
                    </p>
                  </div>
                  <div>
                    <p className="roadmap_roadmap_panel2_text2">
                    Deciding the best method to supply our users with a digital or physical card to deliver the appropriate infrastructure.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-6">
              <Fade left>
                <img
                  className="img-fluid"
                  src="assets/img/roadmap/oxpay.png"
                  alt=""
                />
              </Fade>
            </div>
          </div>
          <div className="row roadmap_roadmap_tab">
            <div className="col-md-6">
              <Fade left>
                <img
                  className="img-fluid"
                  src="assets/img/roadmap/oxchain.png"
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-md-6 roadmap_roadmap_panel">
              <Fade top>
                <div className="roadmap_roadmap_panel1">
                  <p className="roadmap_roadmap_panel1_text1">
                    Q4 : OX Chain Upgrade
                  </p>
                  <p className="roadmap_color_text">
                    Targeting developers giving them more freedom to work with
                    our blockchain in a controlled environment
                  </p>
                  <hr />
                  <p className="roadmap_roadmap_panel1_text1">
                    Goals and Tasks:
                  </p>
                  <p className="roadmap_roadmap_panel1_text2">
                  Like all major crypto currency projects, appropriate chain and network upgrades are crucial to sustain traffic, security and growth. Understanding the requirements to sustain network traffic including additional tokens on our blockchain.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="roadmap_roadmap_panel2">
                  <div className="roadmap_roadmap_panel2_img">
                    <img
                      className="img-fluid"
                      src="assets/img/roadmap/icon-check.png"
                      alt=""
                    />
                    <p className="roadmap_roadmap_panel2_text1">
                    New Tokens
                    </p>
                  </div>
                  <div>
                    <p className="roadmap_roadmap_panel2_text2">
                    OX Labs will continue to create new projects and new tokens which would be a fork or expansion of our OX Coin + OX Chain.
                    </p>
                  </div>
                </div>
                <div className="roadmap_roadmap_panel2">
                  <div className="roadmap_roadmap_panel2_img">
                    <img
                      className="img-fluid"
                      src="assets/img/roadmap/icon-check.png"
                      alt=""
                    />
                    <p className="roadmap_roadmap_panel2_text1">
                    Additional Transparency
                    </p>
                  </div>
                  <div>
                    <p className="roadmap_roadmap_panel2_text2">
                    Our vision is to provide developers a space to create and develop projects on our blockchain in a slightly open sourced space.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="rodmap_section5">
        <Fade bottom>
          <img
            className="img-fluid"
            src="assets/img/roadmap/oxworld.png"
            alt=""
          />
        </Fade>
      </div>

      <div className="roadmap_download">
        <div className="container">
          <Fade bottom>
            <Download />
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default Roadmap;
