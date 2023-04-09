import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import ReviewDetail from "@/components/ReviewDetail";

export default function index() {
  return (
    <>
      <ReviewDetail
        reviewTitle={reviewTitle}
        author={author}
        score={score}
        tags={tags}
        perfumeBrand={perfumeBrand}
        perfumeName={perfumeName}
        createAt={createAt}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
