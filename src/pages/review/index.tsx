import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getBestReview, getAllReview } from "@/apis/review";
import useReviews from "@/hooks/queries/useReviews";
import useBestReviews from "@/hooks/queries/useBestReviews";
import ReviewCard from "@/components/ReviewCard";
import styled from "@emotion/styled";

const ReviewPage = () => {
  const { data, isLoading } = useReviews({ offset: 0, limit: 10 });
  const { data: bestData, isLoading: isBestLoading } = useBestReviews(3);

  return (
    <Wrapper>
      <BestArea>
        {bestData
          ? bestData.map(
              ({ title, nickname, overallRatings, body, photoUrls }) => (
                <ReviewCard
                  key={title}
                  reviewTitle={title}
                  author={nickname}
                  score={overallRatings}
                  description={body}
                  imgSrc={photoUrls[0]}
                />
              )
            )
          : null}
      </BestArea>
    </Wrapper>
  );
};

export default ReviewPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["review", "best"],
      queryFn: () => getBestReview(3),
    }),
    queryClient.prefetchQuery({
      queryKey: ["review", "all", 0, 10, "DATE", "DESC"],
      queryFn: () =>
        getAllReview({
          limit: 10,
          offset: 0,
          orderStandard: "DATE",
          sortType: "DESC",
        }),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const BestArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
