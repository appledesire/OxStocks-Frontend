import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  let assets_const = "assets";
  if (window.location.pathname.split("/").length === 3) {
    assets_const = "../assets";
  }
  return (
    <Fragment>
      {/* <Fade top> */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-12 footer1_tab">
              <img
                className="img-fluid"
                src={`${assets_const}/img/index/logo.png`}
                width="200"
                height="30"
                alt=""
              />
              <p className="footer1_text">
                OX STOCKS is owned and operated by Australian Company OX STOCKS
                PTY LTD (ABN : 61 654 485 300) before using our service please
                review our Terms and Conditions. OX STOCKS is a platform, we are
                not brokers, financial institutions or creditors. We do not
                provide financial advice - as such as do not hold an Australian
                Financial Services License. For more information please email us
                at info@oxstocks.com
              </p>
            </div>
            <div className="col-xl-2 col-md-4 footer2_tab">
              <p className="footer2_text1">Company</p>
              <Link to="/">
                <p className="footer2_text2">&gt; Home</p>
              </Link>
              <Link to="/ERC20Crypto">
                <p className="footer2_text2">&gt; Crypto</p>
              </Link>
              <Link to="/marketplace">
                <p className="footer2_text2">&gt; Marketplace</p>
              </Link>
              <Link to="/oxmining">
                <p className="footer2_text2">&gt; Mining</p>
              </Link>
              <Link to="/oxcoin">
                <p className="footer2_text2">&gt; Ox coin</p>
              </Link>
            </div>
            <div className="col-xl-2 col-md-4 footer3_tab">
              <p className="footer2_text1">Information</p>
              <Link to="/terms">
                <p className="footer2_text2">&gt; Terms & Conditions </p>
              </Link>
              <Link to="/privacy">
                <p className="footer2_text2">&gt; Privacy Policy </p>
              </Link>
              <Link to="/referral">
                <p className="footer2_text2">&gt; Referral Program</p>
              </Link>
              <Link to="/contactus">
                <p className="footer2_text2">&gt; Contact us</p>
              </Link>
            </div>
          </div>
          <div className="row social_link">
            <div className="col-xl-12 col-md-12">
              <ul className="footer1_ul">
              <li>
                  <a href="https://twitter.com/OX_Stocks">
                    <img
                      className="img-fluid"
                      src={`${assets_const}/img/index/twitter.png`}
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      className="img-fluid"
                      src={`${assets_const}/img/index/facebook.png`}
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@ox_stocks">
                    <img
                      className="img-fluid"
                      src={`${assets_const}/img/index/Medium.png`}
                      alt=""
                      width="48"
                      height="48"
                    />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <hr className="footer_hr" />
          <p className="footer_text">
            OX STOCKS
          </p>
        </div>
      </div>
      {/* </Fade> */}
    </Fragment>
  );
};

export default Footer;
