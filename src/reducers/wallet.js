import { GET_TRANSACTION, EMAIL_VERIFY_ID } from "../actions/types";

const initialState = {
    transactions: [],
    emailVerifyID: null,
}

function walletReducer(state=initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_TRANSACTION:
            return {
                ...state,
                transactions: payload
            }
        case EMAIL_VERIFY_ID:
            return {
                ...state,
                emailVerifyID: payload
            }
        default: 
            return state;
    }
}

export default walletReducer;