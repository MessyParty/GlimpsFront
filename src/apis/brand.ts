import axios from "axios";
import type { Brand } from "./Interface/brand.interface";

export const getBrand = async (): Promise<Brand[]> => {
  const { data } = await axios.get<Brand[]>("/brands", {});
  return data;
};
