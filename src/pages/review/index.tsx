import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getBestReview } from "@/apis/review";

const ReviewPage = () => {};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["review", "best"],
    queryFn: () => getBestReview(3),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
