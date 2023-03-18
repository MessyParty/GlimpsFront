import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getBestReview } from "@/apis/review";

const ReviewPage = () => {};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["review", "best"],
      queryFn: () => getBestReview(3),
    }),
    queryClient.prefetchQuery({
      queryKey: ["review", "all", 0, 10, "DATE", "DESC"],
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
