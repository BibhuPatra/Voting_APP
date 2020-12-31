export const REG_USER = "REG_USER";
export const REG_PASSWORD = "REG_PASSWORD";
export const REG_USEREMAIL = "REG_USEREMAIL";
export const REG_DOB ="REG_DOB";
export const REG_MOBILE ="REG_MOBILE";


export const regUserName = (regUserName) => {
    return {
        type: REG_USER,
        payload: regUserName,
    };
};
export const regPassword = (regPassword) => {
    return {
        type: REG_PASSWORD,
        payload: regPassword,
    };
};
export const regUserEmail = (regUserEmail) => {
    return {
        type: REG_USEREMAIL,
        payload: regUserEmail,
    }
}
export const regUserDOB = (regUserDOB) => {
    return {
        type: REG_DOB,
        payload: regUserDOB,
    }
}
export const regUserMobile = (regUserMobile) => {
    return {
        type: REG_MOBILE,
        payload: regUserMobile,
    }
}