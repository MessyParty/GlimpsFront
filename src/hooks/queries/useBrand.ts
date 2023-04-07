import { useQuery } from "@tanstack/react-query";

import { getBrand } from "@/apis/brand";

const useBrand = () => {
  return useQuery(["brand", "all"], () => getBrand());
};

export default useBrand;
