import axios from "axios";
import api from ".";
import type { Perfume } from "./Interface/perfume.interface";

export const getPerfume = async (rid: string): Promise<Perfume> => {
  const { data } = await axios.get<Perfume>(`/perfumes/${rid}`);
  return data;
};

export const getBestPerfume = async (num: number): Promise<Perfume[]> => {
  const { data } = await axios.get<Perfume[]>("/perfumes/best", {
    params: {
      amount: num,
    },
  });
  return data;
};

export const searchPerfumes = async (
  brand: string,
  pageParam?: number
): Promise<Perfume[]> => {
  const { data } = await axios.get<Perfume[]>("/perfumes", {
    params: {
      brand: brand,
    },
  });
  return data;
};
