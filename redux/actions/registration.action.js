import { api } from "../../utils/api";

export const actionCreate = async (data) => {
  return await api.post(`/users`, data);
};
