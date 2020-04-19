import * as types from "../constants/csrfContants";

const initialState = {
    csrf: '',
    error: null,
    loading: true
}

const csrf = (state = initialState, action) => {
    switch (action.type) {

        case types.FETCH_CSRF_REQUEST:
            return {
                csrf: '',
                loading: true,
                error: null
            }

        case types.FETCH_CSRF_SUCCESS:
            return {
                ...state,
                csrf: action.payload,
                loading: false,
                error: null
            }

        case types.FETCH_CSRF_FAILURE:
            return {
                csrf: '',
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default csrf;
