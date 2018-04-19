import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
    console.log('yes', action.token)
      return {
        auth: action.token
      };
    case FACEBOOK_LOGIN_FAIL:
      return {
        auth: null
      };
    default:
      return state;
  }
}
