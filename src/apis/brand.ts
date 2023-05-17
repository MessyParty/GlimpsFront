import api from ".";
import type { Brand } from "./Interface/brand.interface";

export const getBrand = async (): Promise<Brand[]> => {
  const { data } = await api.get<Brand[]>("/brands", {});
  return data;
};
