import { api } from "../../utils/api";

export const REGISTRATION_LOADING = "REGISTRATION_LOADING";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";
export const REGISTRATION_RESET_STATE = "REGISTRATION_RESET_STATE";

// export function actionCreate(data) {
//   return async (dispatch, getState) => {
//     await dispatch({ type: REGISTRATION_LOADING, payload: true });
//     await api
//       .post("/users", data)
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch({ type: REGISTRATION_SUCCESS, payload: true });
//         } else {
//           dispatch({ type: REGISTRATION_FAILED, payload: true });
//         }
//       })
//       .catch(function (error) {
//         dispatch({ type: REGISTRATION_FAILED, payload: true });
//       });
//   };
// }

export const actionCreate = async (data) => {
  return await api.post(`/users`, data);
};

export function actionReset() {
  return async (dispatch, getState) => {
    await dispatch({ type: REGISTRATION_RESET_STATE });
  };
}
