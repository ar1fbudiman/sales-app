import * as Action from "../actions/menu.action";
import { getLocalStore } from "next-persist";

const INITIAL_VALUE = {
  isMenuHide: false,
};

const persistedState = getLocalStore("menu", INITIAL_VALUE);
function menuReducer(state = persistedState, action) {
  switch (action.type) {
    case Action.MENU_HIDE:
      return {
        isMenuHide: action.payload,
      };
    default:
      return state;
  }
}

export default menuReducer;
