import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Resbtn from '../../include/Resbtn';
import Nav from '../../include/Nav';
import Download from '../../include/Download';
import '../../../assets/css/home/forgetpassword/OTP.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmEmailVerifyCode } from '../../../actions/auth';
// import Swal from 'sweetalert2';

const OTP = ({ confirmEmailVerifyCode, sendmail_verifycode }) => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

    // const confirmVerify = () => {
    //     const verifyCode1 = document.getElementById('verifyCode1').value;
    //     const verifyCode2 = document.getElementById('verifyCode2').value;
    //     const verifyCode3 = document.getElementById('verifyCode3').value;
    //     const verifyCode4 = document.getElementById('verifyCode4').value;
    //     const verifyCode5 = document.getElementById('verifyCode5').value;
    //     if(verifyCode1 && verifyCode2 && verifyCode3 && verifyCode4 && verifyCode5) {
    //         const data = {
    //             id: sendmail_verifycode,
    //             code: verifyCode1+verifyCode2+verifyCode3+verifyCode4+verifyCode5
    //         }
    //         confirmEmailVerifyCode(data);
    //     } else{
    //         Swal.fire({
    //             title: 'Input your verify code',  
    //             text: '',
    //             icon: 'error',
    //         })
    //     }
    // }

    return (
        <Fragment>
            <div className="aboutus_section_1">
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
                    <div className="row aboutus_link_tab">
                        <p className="aboutus_link_title">OTP Verification</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">OTP Verification</span></p>
                    </div>
                </div>
            </div>
            <div className='OTP_section_2'>
                <div className='container'>
                    <div className='row panel'>
                        <div className='col-md-5'>
                            <div className='box'>
                                <p className='title1'>OTP Verification</p>
                                <p className='title2'>An OTP has been sent in your registerd email id example****@gmail.com</p>
                                <div className='OTP_num'>
                                    <input type="text" id="verifyCode1" class="form-control-round" maxLength={1} />
                                    <input type="text" id="verifyCode2" class="form-control-round" maxLength={1} />
                                    <input type="text" id="verifyCode3" class="form-control-round" maxLength={1} />
                                    <input type="text" id="verifyCode4" class="form-control-round" maxLength={1} />
                                    <input type="text" id="verifyCode5" class="form-control-round" maxLength={1} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '20px' }}>
                                    {/* <button type='button' className='btn btn-warning margin-top-30' onClick={() => confirmVerify()}>Verify</button> */}
                                    <button type='button' className='btn btn-warning margin-top-30'><Link to='/resetpassword'>Reset Password</Link></button>
                                </div>
                                <p className='title3 margin-top-30'>If you didn't receive a code? <Link to="/forgetpassword"><span>Resend again.</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='OTP_section_3'>
                <div className='container'>
                    <Download />
                </div>
            </div>
        </Fragment>
    )
}

OTP.propTypes = {
    confirmEmailVerifyCode: PropTypes.func.isRequired,
    sendmail_verifycode: PropTypes.string
}

const mapStateToProps = state => ({
    sendmail_verifycode: state.auth.sendmail_verifycode
});
  
export default connect(mapStateToProps, { confirmEmailVerifyCode })(OTP);