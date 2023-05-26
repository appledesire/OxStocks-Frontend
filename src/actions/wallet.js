import api from '../utils/api';

import { GET_TRANSACTION, EMAIL_VERIFY_ID } from './types';
import { toast } from 'react-toastify';

import Swal from 'sweetalert2'

//sendToken
export const sendToken = (data) => async dispatch => {

    try {
        // toast.warning('Transaction is Pending', {
        //     position: "top-right",
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // })  
        document.getElementsByClassName('spinnerDisplay')[0].style.display = 'block';
        const res = await api.post('/users/sendToken', data);
        toast.clearWaitingQueue();

        Swal.fire({  
            title: 'Transaction Success',  
            text: `Transaction fee is ${(res.data.gasUsed / 10 ** 18).toFixed(3)} OX`,
            icon: 'success'
          }); 
        document.getElementsByClassName('spinnerDisplay')[0].style.display = 'none';
        document.getElementsByClassName('input_address')[0].value = '';
        document.getElementsByClassName('input_address')[1].value = '';
        document.getElementsByClassName('input_address')[2].value = '';
        const res_tran = await api.get(`/users/getPastLogs/${data.fromAddress}`);
        
        dispatch({
            type: GET_TRANSACTION,
            payload: res_tran.data
        });
    } catch (err) {
        
        //err msg
        document.getElementsByClassName('input_address')[0].value = '';
        document.getElementsByClassName('input_address')[1].value = '';
        document.getElementsByClassName('input_address')[2].value = '';
        document.getElementsByClassName('spinnerDisplay')[0].style.display = 'none';

        Swal.fire({  
            title: 'Transaction  Error',  
            icon: 'error'
        }); 
    }
}

export const getTransaction = (data) => async dispatch => {
    try {
        const res_tran = await api.get(`/users/getPastLogs/${data}`);
        dispatch({
            type: GET_TRANSACTION,
            payload: res_tran.data
        });
    } catch (err) {
        //err msg
        Swal.fire({  
            title: 'Transaction  Error',  
            icon: 'error'
        }); 
    }
}

export const emailVerify = () => async dispatch => {
    try {
        const res = await api.get('/users/emailVerify');
        dispatch({
            type: EMAIL_VERIFY_ID,
            payload: res.data
        })
    } catch (err) {
        // toast.error('Error', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     }) 
    }
}