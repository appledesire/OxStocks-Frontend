import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  SET_AUTH_FLAG,
  SENDEMAIL_VERIFYCODE,
  SET_VERIFYEMAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: {
    _id: '',
    email: '',
    address: '',
    address_data: '',
    city: '',
    country: '',
    state: '',
    zipcode: '',
    firstname: '',
    middlename: '',
    lastname: '',
    referralcode: '',
    wallet: '',
    coin_balance: '',
    email_verified: '',
    date_form: '',
  },
  verify_email: '',
  sendmail_verifycode: '',
  authFlag: false
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        authFlag: true,
      };
    case ACCOUNT_DELETED:
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: {},
      };
    case SET_AUTH_FLAG:
      return {
        ...state,
        authFlag: false
      }
    case SET_VERIFYEMAIL:
      return {
        ...state,
        verify_email: payload
      }
    case SENDEMAIL_VERIFYCODE:
      return {
        ...state,
        sendmail_verifycode: payload
      }
    default:
      return state;
  }
}

export default authReducer;
