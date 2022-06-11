import registrationReducer from "./reducers/registration.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  registration: registrationReducer,
});

export default rootReducer;
