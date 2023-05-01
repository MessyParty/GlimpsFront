import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import ReviewDetail from "@/components/ReviewDetail";
import { getReview } from "@/apis/review";

export default function ReviewDetailPage() {
  return <ReviewDetail />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { rid } = context.query;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["review", rid], () =>
    getReview(rid as string),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
