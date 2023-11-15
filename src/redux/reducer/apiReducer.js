import { API_FETCHING, API_FETCH_SUCCESS, API_FETCH_ERROR } from "../actions/actionType";

let initialState = {
    loading: false,
    data: [],
    error: null
}

const apiReducer = (state = initialState, action) => {
    switch(action.type){
        case API_FETCHING:
            return {...state, loading: true}

        case API_FETCH_SUCCESS:
            return ({...state, loading: false, data: action.payload, error: null})

        case API_FETCH_ERROR:
            return ({...state, loading: false, data: [], error: action.payload})

        default:
            return state
    }
}

export default apiReducer;