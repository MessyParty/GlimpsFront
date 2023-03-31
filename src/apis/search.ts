import axios from "axios";
import type { Search } from "./Interface/search.interface";

export const getSearch = async (
  brandname: string,
  perfumename: string,
  notes: string,
): Promise<Search[]> => {
  const { data } = await axios.get<Search[]>(`/search`, {
    params: {
      brandname,
      perfumename,
      notes,
    },
  });
  return data;
};
