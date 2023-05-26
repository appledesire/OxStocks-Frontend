import api from '../utils/api';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_AUTH_FLAG,
  SENDEMAIL_VERIFYCODE,
  SET_VERIFYEMAIL
} from './types';

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

// Load User
export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = formData => async dispatch => {
  try {
    const res = await api.post('/users', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => 
        toast.error(error.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })  
      );
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const body = { email, password };
  


  try {
    const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        toast.error(error.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};



export const sendEmailVerifyCode = (data) => async dispatch => {
// const navigate = useNavigate();



  try {
    const res = await api.post('/auth/sendEmailVerifyCode', data);

    dispatch({
      type: SET_VERIFYEMAIL,
      payload: data.email
    })

    dispatch({
      type: SENDEMAIL_VERIFYCODE,
      payload: res.data
    })
    

    Swal.fire({
      title: 'Check your email',
      text: 'We have sent you an OTP code to your registered email.',
      // icon: 'success',
      // html: "<p></p><a href='/OTP'><button class='btn btn-warning'>OTP verify</button></a>",
      imageUrl: '../../../assets/img/forgetpass/msg.png',
      imageWidth: 200,
      imageHeight: 150,
    }).then((result) => {  
      /* Read more about isConfirmed, isDenied below */  
        if (result.isConfirmed) {    
          // navigate('/OTP')
         
        } else if (result.isDenied) {    
          Swal.fire('Changes are not saved', '', 'info')  
       }})
  } catch(err) {
    
    Swal.fire({
      title: 'Server Error',  
      text: err,
      icon: 'error',
    })
  }
}

export const confirmEmailVerifyCode = (data) => async dispatch => {
  try {
    await api.post('/auth/confirmEmailVerifyCode', data);
    Swal.fire({  
      title: 'Sucess!',  
      icon: 'success'
    }); 
  } catch(err) {
    Swal.fire({  
      title: 'Verfiy code is not coreect',  
      icon: 'error'
    }); 
  }
}

export const resetPassword = (data) => async dispatch => {
  try {
    await api.post('/auth/resetPassword', data);
    Swal.fire({  
      title: 'Sucess!',  
      icon: 'success'
    });
    window.location.href = '/login';
  } catch (err) {
      Swal.fire({  
        title: 'Server Error',  
        icon: 'error'
      })
  }
}

// Logout
export const logout = () => ({ type: LOGOUT });

export const setAuthFlag = () => ({ type: SET_AUTH_FLAG });

// export const login_alert = () => ({ type: LOGIN_ALERT });
// export const register_alert = () => ({ type: REGISTER_ALERT });
