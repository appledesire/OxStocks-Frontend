import React, { Fragment, useEffect } from 'react';
import '../../assets/css/home/Crypto.scss';
import Nav from '../include/Nav';

import { Fade }  from "react-reveal";

import { Link } from 'react-router-dom';

import Resbtn from '../include/Resbtn';

const Crypto = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

        return (
            <Fragment>
                <div className="crypto_section_1">
                    <div className="container">
                        <div id="nav_box1" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "20%", left: "0" }} /></Link>
                            <Nav />
                        </div>
                        <div id="nav_box2" style={{display: "none", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "40%", left: "0" }} /></Link>
                            {/* <Link to="" className="nav-link navbar_rightbox" href="#" >
                            &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Iconawesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                                
                            </Link> */}
                            <Resbtn />
                        </div>
                    <div className="row crypto_link_tab">
                        <p className="crypto_link_title">Crypto</p>
                        <p className="crypto_link_info1">Home &gt; <span className="crypto_link_info2">ERC20Crypto</span></p>
                    </div>
                    </div>
                </div>

                <div className="crypto_section2">
                    <div className="container">
                        <div className="row crypto_panel_body">
                            <Fade right>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/index/btc.png" width="40" height="40" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Bitcoin</label>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/index/eth.png" width="40" height="40"  alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Ethereum</label>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/crypto/ada.png" width="40" height="40"  alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Cardano</label>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/crypto/Canvas.png" width="40" height="40"  alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">XRP</label>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/crypto/doge.png" width="40" height="40"  alt="" />
                                <div className="crypto_img_right_item1">
                                    <label className="crypto_img_right_item1_text1">Dogecoin</label>
                                </div>
                            </div>
                        </Fade>
                        </div>

                        <p style={{ color: 'white', fontSize: '2rem', padding: '5% 0 20%' }}>CA: 0xa4df54f346230b1ad6d12c9633868c9841bf20f7</p>
                            
                    </div>
                </div>
            </Fragment>
        )
}

export default Crypto;