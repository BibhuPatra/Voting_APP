import {REG_USER,REG_PASSWORD,REG_USEREMAIL,REG_DOB, REG_MOBILE} from "../Actions/registrationAction";

const initialState = {
    regUserName: null,
    regPassword: null,
    regUserEmail: null,
    regUserDOB: null,
    regUserMobile:null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REG_USER:
            return (state = {
                ...state,
                regUserName: action.payload,
            });
        case REG_PASSWORD:
            return (state = {
                ...state,
                regPassword: action.payload,
            });
        case REG_USEREMAIL:
            return (state = {
                ...state,
                regUserEmail: action.payload,
            });
        case REG_DOB:
            return (state = {
                ...state,
                regUserDOB: action.payload,
            });
        case REG_MOBILE:
            return (state = {
                ...state,
                regUserMobile: action.payload,
            });
        default:
            return state;
    }
}