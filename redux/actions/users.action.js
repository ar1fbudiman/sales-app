import { api } from "../../utils/api";

export const actionUsers = async () => {
  const response = await api.get(`/users`);
  if (response.status != 200) {
    throw new Error("Error Fetching");
  }

  return response.data.data;
};
