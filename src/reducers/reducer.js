import {IS_LOGEDIN, IS_LOGEDOUT,USER_NAME,PASSWORD} from '../Actions/actions';

const initialState = {
  userName: null,
  password:null,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOGEDIN:
      return state = { ...state, isAuthenticated: action.payload };
    case IS_LOGEDOUT:
      return state = { ...state, isAuthenticated: action.payload };  
    case USER_NAME:
      return state = { ...state, userName: action.payload }
    case PASSWORD:
      return state = { ...state, password: action.payload }
    default:
      return state
  }
}