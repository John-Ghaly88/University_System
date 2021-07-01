import * as userActionTypes from './user.actionTypes'

const INITIAL_STATE = {
    token: "test"
}

export const UserReducer = (state = INITIAL_STATE, action) => {
    console.log("action", action)
    switch (action.type) {
        case userActionTypes.LOGIN_USER:
            return {
                ...state,
                token: action.data.token,
            }
        case userActionTypes.LOGOUT_USER:
            return {
                ...state
            }
        default:
            return state
    }
}