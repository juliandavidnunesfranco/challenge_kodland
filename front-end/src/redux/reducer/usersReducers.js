import { CREATE_USER, UPDATE_USER, LOGIN_USER, LOGOUT_USER } from "../actions";

const initialState = {
    user: {},
};

export default function createUsers(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: {},
            };

        default:
            return state;
    }
}
