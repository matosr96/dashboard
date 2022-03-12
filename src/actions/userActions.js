import Axios from "axios"
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";

export const signin = (username, password) => async(dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {username, password}});

    try{
        const {data} = await Axios.post('https://laciabbata-backend.herokuapp.com/api/users/signin', {username, password})
        console.log(data);
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({type: USER_SIGNIN_FAIL, payload: message});
    }
}