import * as actionTypes from "./user.actionTypes"

export const loginAction = (token) => ({
    type: actionTypes.LOGIN_USER,
    data: {
        token
    }
})

export const logoutActoin = () => ({
    type: actionTypes.LOGOUT_USER
})