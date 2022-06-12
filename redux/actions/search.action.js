import { api } from "../../utils/api";

export const actionUsers = async () => {
  return await api.get(`/users`);
};

export const actionFindUser = async (id) => {
  return await api.get(`/users/${id}`);
};

export const actionDelete = async (id, name, email) => {
  return await api.delete(`/users/${id}`, {
    params: {
      name: name,
      email: email,
    },
  });
};
