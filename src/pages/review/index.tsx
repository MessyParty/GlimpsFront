import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getBestReview, getAllReview } from "@/apis/review";
import useReviews from "@/hooks/queries/useReviews";
import useBestReviews from "@/hooks/queries/useBestReviews";
import ReviewCard from "@/components/ReviewCard";
import { Divider, Pagination } from "@mui/material";
import styled from "@emotion/styled";
import React, { useState } from "react";
import SimpleReviewCard from "@/components/SimpleReviewCard";

const DEFAULT_IMG =
  "https://cdn.pixabay.com/photo/2018/01/10/13/47/essential-oil-3073901_960_720.jpg";

const ReviewPage = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data, isLoading } = useReviews({ offset, limit: 10 });
  const { data: bestData, isLoading: isBestLoading } = useBestReviews(3);

  return (
    <Wrapper>
      <BestArea>
        {bestData
          ? bestData.map(
              ({ title, nickname, overallRatings, body, photoUrls }) => (
                <React.Fragment key={title}>
                  <ReviewCard
                    reviewTitle={title}
                    author={nickname}
                    score={overallRatings}
                    description={body}
                    imgSrc={photoUrls[0] ?? DEFAULT_IMG}
                  />
                  <Divider sx={{ borderColor: "black" }} />
                </React.Fragment>
              )
            )
          : null}
      </BestArea>
      <AllArea>
        {data
          ? data.map(
              ({ uuid, photoUrl, title, overallRating, body, heartCnt }) => (
                <React.Fragment key={uuid}>
                  <SimpleReviewCard
                    imgSrc={photoUrl[0] ?? DEFAULT_IMG}
                    title={title}
                    score={overallRating}
                    body={body}
                    likeCnt={heartCnt}
                  />
                </React.Fragment>
              )
            )
          : null}
        {data ? (
          <Pagination
            showFirstButton
            showLastButton
            count={data[0].totalPages}
          />
        ) : null}
      </AllArea>
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

const Area = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BestArea = styled(Area)``;

const AllArea = styled(Area)``;
