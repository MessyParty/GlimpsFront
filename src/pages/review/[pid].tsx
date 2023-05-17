import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { useRouter } from "next/router";
import ReviewDetail from "@/components/ReviewDetail";
import { getReview } from "@/apis/review";
import useReview from "@/hooks/queries/useReview";
const DEFAULT_IMG =
  "https://cdn.pixabay.com/photo/2018/01/10/13/47/essential-oil-3073901_960_720.jpg";

export default function ReviewDetailPage() {
  const router = useRouter();

  const { pid } = router.query;
  const { data } = useReview(pid as string);

  return (
    <>
      {data ? (
        <ReviewDetail
          title={data.title}
          author={data.nickname}
          perfumeBrand={data.perfumeBrand}
          perfumeName={data.perfumeName}
          createAt={data.createdAt}
          description={data.body}
          longevityRatings={data.longevityRatings}
          sillageRatings={data.sillageRatings}
          score={data.overallRatings}
          tags={[]}
          photoUrl={data.photoUrls ?? DEFAULT_IMG}
          id={data.uuid}
        />
      ) : (
        <p>데이터가 없습니다</p>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { rid } = context.query;
  console.log("rid", rid);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["review", rid], () =>
    getReview(rid as string)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
