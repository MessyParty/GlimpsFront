import axios from "axios";
import api from ".";
import type { Perfume } from "./Interface/perfume.interface";

export const getPerfume = async (rid: number): Promise<Perfume[]> => {
  const { data } = await axios.get<Perfume[]>(`/perfumes/${rid}`);
  return data;
};

export const getBestPerfume = async (num: number): Promise<Perfume[]> => {
  const { data } = await axios.get<Perfume[]>("/perfumes/bestPerfumes", {
    params: {
      amountPerfumes: num,
    },
  });
  return data;
};

export const getSortPerfume = async (name: string): Promise<Perfume[]> => {
  const { data } = await axios.get<Perfume[]>("perfumes?brandname", {
    params: {
      name,
    },
  });
  return data;
};
