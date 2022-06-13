import * as Action from "../actions/menu.action";

const INITIAL_VALUE = {
  isMenuHide: false,
};

function menuReducer(state = INITIAL_VALUE, action) {
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
