import { API_FETCHING, API_FETCH_SUCCESS, API_FETCH_ERROR } from "./actionType";
import axios from "axios";



export const apiFetching = () => {

    return {
        type: API_FETCHING
    }
}

export const apiFetchSuccess = (data) => {
    return {
        type: API_FETCH_SUCCESS,
        payload: data
    }
}

export const apiFetchError = (error) => {

    return {
        type: API_FETCH_ERROR,
        payload: error
    }
}


export const fetchPosts = () => {
    return (dispatch) => {
      dispatch(apiFetching());
      axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          const posts = response.data;
          // console.log(posts)
          dispatch(apiFetchSuccess(posts));
        })
        .catch((error) => {
          dispatch(apiFetchError(error.message));
        });
    };
  }