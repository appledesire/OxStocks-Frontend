import React, { Fragment, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../include/Nav';
import Resbtn from '../../include/Resbtn';
import Download from '../../include/Download';
import '../../../assets/css/home/forgetpassword/ForgetPassword.scss';
import Swal from 'sweetalert2';
import { sendEmailVerifyCode } from '../../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ForgetPassword = ({ sendEmailVerifyCode }) => {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

      const navigate = useNavigate();

    const onSubmit = () => {
        if (document.getElementById('forget_password').value){
            const data = {
                email: document.getElementById('forget_password').value
            }
            sendEmailVerifyCode(data);
            navigate('/OTP')
            document.getElementById('forget_password').value = '';
        } else {
            Swal.fire({
                title: 'Input your email',  
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
            <div className='forget_section_2'>
                <div className='container'>
                    <div className='row panel'>
                        <div className='col-md-6'>
                            <div className='box'>
                                <p className='title1'>Reset Your Password</p>
                                <p className='title2'>Enter your email to reset the password</p>

                                <input type="text" className="form-control" placeholder='Email' id="forget_password" />
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px'}}>
                                    <button type='button' onClick={() => onSubmit()} className='btn btn-warning margin-top-30'>Send Password Reset Link</button>
                                    {/* <button type='button' className='btn btn-warning margin-top-30'><Link to="/OTP">OTP verify</Link></button> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img className='img-fluid' src='assets/img/forgetpass/forget.png' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='forget_section_3'>
                <div className='container'>
                    <Download />
                </div>
            </div>
        </Fragment>
    )
}


ForgetPassword.propTypes = {
    sendEmailVerifyCode: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
});
  
export default connect(mapStateToProps, { sendEmailVerifyCode })(ForgetPassword);