import axios from 'axios';
import { FETCH_USER } from './types';

//export const fetchUser = () => {
//  return function(dispatch){
//    axios
//      .get('/api/current_user')
//      .then(res => dispatch({ type: FETCH_USER, payload: res }));
//  };
//};
//The below function is a refactor of the above one - they both work.

export const fetchUser = () => async dispatch => {
  const res = await axios.get('./api/current_user');
  //we don't care about all the res response, only the data from the res
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
