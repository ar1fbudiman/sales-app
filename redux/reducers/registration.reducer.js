import * as Action from "../actions/registration.action";

const INITIAL_VALUE = {
  registrationSuccess: false,
  registrationFailed: false,
  registrationLoading: false,
};

const registrationReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case Action.REGISTRATION_SUCCESS:
      return {
        ...state,
        registrationSuccess: action.payload,
        registrationLoading: false,
      };
    case Action.REGISTRATION_FAILED:
      return {
        ...state,
        registrationFailed: action.payload,
        registrationLoading: false,
      };
    case Action.REGISTRATION_LOADING:
      return {
        ...state,
        registrationLoading: action.payload,
        registrationSuccess: false,
        registrationFailed: false,
      };
    case Action.REGISTRATION_RESET_STATE:
      return {
        ...INITIAL_VALUE,
      };
    default:
      return { state };
  }
};

export default registrationReducer;
