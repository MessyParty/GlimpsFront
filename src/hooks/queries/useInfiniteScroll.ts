import { useInfiniteQuery } from "@tanstack/react-query";

import { getPerfume } from "@/apis/perfume";

const useInfiniteScroll = () => {
  return useInfiniteQuery(
    ["perfume"],
    ({ pageParam = 1 }) => getPerfume(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage?.length !== 0 ? nextPage : undefined;
      },
    },
  );
};

export default useInfiniteScroll;
