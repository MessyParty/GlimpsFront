import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getBestReview, getAllReview } from "@/apis/review";
import useReviews from "@/hooks/queries/useReviews";
import useBestReviews from "@/hooks/queries/useBestReviews";
import ReviewCard from "@/components/ReviewCard";
import { Divider, Typography } from "@mui/material";
import styled from "@emotion/styled";
import React, { useState } from "react";
import SimpleReviewCard from "@/components/SimpleReviewCard";
import SortController from "@/components/SortController";
import Spacer from "@/components/Spacer";

const DEFAULT_IMG =
  "https://cdn.pixabay.com/photo/2018/01/10/13/47/essential-oil-3073901_960_720.jpg";

const ReviewPage = () => {
  const [order, setOrder] = useState<"DATE" | "HEARTS_COUNT">("DATE");
  const { data } = useReviews({ offset: 0, limit: 5, orderStandard: order });
  const { data: bestData } = useBestReviews(3);

  return (
    <Wrapper>
      <Spacer y={4} />
      <Header>
        <HeaderDivider />
        <Spacer />
        <div className="title">
          <Typography variant="h4">REVIEW</Typography>
          <Typography variant="h6">BEST AND ALL</Typography>
        </div>
        <Spacer />
        <HeaderDivider />
      </Header>
      <Spacer y={4} />
      <BestArea>
        {bestData
          ? bestData.map(
              ({ title, nickname, overallRatings, body, photoUrls, uuid }) => (
                <React.Fragment key={title}>
                  <ReviewCard
                    reviewTitle={title}
                    author={nickname}
                    score={overallRatings}
                    description={body}
                    imgSrc={photoUrls[0] ?? DEFAULT_IMG}
                    uuid={uuid}
                  />
                  <Divider sx={{ borderColor: "black" }} />
                </React.Fragment>
              )
            )
          : null}
      </BestArea>
      <AllControlSection>
        <SortController orderCb={setOrder} />
      </AllControlSection>
      <Divider sx={{ borderColor: "black" }} />
      <AllArea>
        {data
          ? data.map(
              ({
                uuid,
                photoUrl,
                title,
                overallRating,
                body,
                heartCnt,
                nickname,
              }) => (
                <React.Fragment key={uuid}>
                  <SimpleReviewCard
                    imgSrc={photoUrl[0] ?? DEFAULT_IMG}
                    title={title}
                    score={overallRating}
                    body={body}
                    likeCnt={heartCnt}
                    nickname={nickname}
                    uuid={uuid}
                  />
                  <Divider sx={{ borderColor: "black" }} />
                </React.Fragment>
              )
            )
          : null}
      </AllArea>
      <Spacer y={2} />
    </Wrapper>
  );
};

export default ReviewPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["review", "best", 3],
      queryFn: () => getBestReview(3),
    }),
    queryClient.prefetchQuery({
      queryKey: ["review", "all", 0, 5, "DATE", "DESC"],
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

const Header = styled.div`
  display: flex;
  flex-direction: column;
  & > .title {
    display: flex;
    flex-direction: column;
  }
`;

const HeaderDivider = styled(Divider)`
  width: 326px;
  height: 10px;
  border-color: black;
  background-color: black;
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BestArea = styled(Area)``;

const AllArea = styled(Area)``;

const AllControlSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
