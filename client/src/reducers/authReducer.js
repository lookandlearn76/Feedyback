import { FETCH_USER } from '../actions/types';
//we return null as the default for not knowing whether the user is logged in or not.
//It's not false for not logged in, and not true for logged in. It's null for the in-between state.
export default function(state = null, action) {
  switch(action.type){
    case FETCH_USER:
      return action.payload || false;
      //if no payload, it will return an empty string which is falsy value. So in this case using || will return false.
      //action.payload is the user model
    default:
      return state;
  }
}
