import { api } from "../../utils/api";

export const actionUsers = async () => {
  return await api.get(`/users`);
};
