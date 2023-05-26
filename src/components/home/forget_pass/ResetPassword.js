import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Resbtn from '../../include/Resbtn';
import Nav from '../../include/Nav';
import '../../../assets/css/home/forgetpassword/ResetPassword.scss';
import Download from '../../include/Download';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetPassword } from '../../../actions/auth';
import Swal from 'sweetalert2';

const ResetPassword = ({ resetPassword, sendmail_verifycode, email }) => {

    const onReset = () => {
        const new_pass = document.getElementById('new_pass').value;
        const re_new_pass = document.getElementById('re_new_pass').value;
        if(new_pass && re_new_pass) {
            const data = {
                verifyID: sendmail_verifycode,
                email: email,
                password: new_pass,
                passwordConfirm: re_new_pass
            }
            resetPassword(data);
        } else {
            Swal.fire({
                title: 'Input all field',
                text: '',
                icon: 'error',
            })
        }
    }

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
                        <p className="aboutus_link_title">Reset Your Password</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Reset Your Password</span></p>
                    </div>
                </div>
            </div>
            <div className='reset_section_2'>
                <div className='container'>
                    <div className='row panel'>
                        <div className='col-xl-6 col-md-6 col-sm-12'>
                            <div className='box'>
                                <p className='title1'>Create New Password</p>
                                <p className='title2'>For the safety of your account please use strong password.</p>
                                <input type="text" className='form-control round-50 margin-top-20' placeholder='New Password' id="new_pass" />
                                <input type="text" className='form-control round-50 margin-top-30' placeholder='Re Type New Password' id="re_new_pass" />
                                <button type='button' className='btn btn-warning margin-top-30' onClick={() => onReset()}>Reset Password</button>
                            </div>
                        </div>
                        <div className='col-xl-6 col-md-6 col-sm-12'>
                            <img className='img-fluid' src='assets/img/forgetpass/reset.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='reset_section_3'>
                <div className='container'>
                    <Download />
                </div>
            </div>
        </Fragment>
    )
}


ResetPassword.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    sendmail_verifycode: PropTypes.string,
    email: PropTypes.string
}

const mapStateToProps = state => ({
    sendmail_verifycode: state.auth.sendmail_verifycode,
    email: state.auth.verify_email
});
  
export default connect(mapStateToProps, { resetPassword })(ResetPassword);