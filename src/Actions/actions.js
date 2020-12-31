export const IS_LOGEDIN = 'IS_LOGEDIN';
export const IS_LOGEDOUT = 'IS_LOGEDOUT';
export const USER_NAME = 'USER_NAME';
export const PASSWORD = 'PASSWORD';
export const REG_USER = 'REG_USER';


export const userLogin = () => {
    return {
        type: IS_LOGEDIN,
        payload: true
    };
};
export const userLogout = () => {
    return {
        type: IS_LOGEDOUT,
        payload: false
    };
};

export const userName = (userName) => {
    return {
        type: USER_NAME,
        payload: userName
    };
}
export const password = (password) => {
    return {
        type: PASSWORD,
        payload: password
    }
};
export const regUserName = (regUserName) => {
    return {
        type: REG_USER,
        payload: regUserName
    }
}