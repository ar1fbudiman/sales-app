import { api } from "../../utils/api";

export const actionSales = async () => {
  const response = await api.get(`/`);
  if (response.status != 200) {
    throw new Error("Fetching sales failed");
  }

  return response.data.data;
};
