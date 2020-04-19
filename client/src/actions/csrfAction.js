import * as types from "../constants/csrfContants";
import {CSRF_URL} from "../constants/API";
import axios from "axios";

const csrfRequest = () => {
    return {
        type: types.FETCH_CSRF_REQUEST
    }
}

const csrfLoaded = (csrf) => {
    return {
        type: types.FETCH_CSRF_SUCCESS,
        payload: csrf
    }
}

const csrfFailure = (error) => {
    return {
        type: types.FETCH_CSRF_FAILURE,
        payload: error
    }
}

export const fetchCSRF = (dispatch) => () => {
    dispatch(csrfRequest())
    axios.get(CSRF_URL)
        .then((data) => dispatch(csrfLoaded(data.data)))
        .catch((error) => {
            console.error(error)
            dispatch(csrfFailure(error))
        })
}
