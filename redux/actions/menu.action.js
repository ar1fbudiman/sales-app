export const MENU_HIDE = "MENU_HIDE";

export const toggleMenu = (val) => {
  return async (dispatch, getState) => {
    await dispatch({ type: MENU_HIDE, payload: val });
  };
};
