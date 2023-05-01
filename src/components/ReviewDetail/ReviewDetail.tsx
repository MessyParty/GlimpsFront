import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { Typography } from "@mui/material";
import { QuoteLeft, QuoteRight } from "../CustomIcon";
import { CardMedia } from "@mui/material";

import Rating from "../Rating";
import Button from "../Button";

import Modal from "../Modal";
import ReviewModal from "../ReviewModal";
import { deleteReview } from "@/apis/review";
import { MODAL_KEYS } from "@/constants/modalKeys";
import useModal from "@/hooks/useModal";
import useReview from "@/hooks/queries/useReview";
interface ReviewData {
  perfumeBrandEng: string;
  body: string;
  createdAt: string;
  heartCnt: number;
  longevityRatings: number;
  nickname: string;
  overallRatings: number;
  perfumeBrand: string;
  perfumeName: string;
  photoUrls: string[];
  sillageRatings: number;
  title: string;
  tags?: string[];
  uuid: string;
  scentRatings: number;
}

export default function ReviewDetail({ ...props }) {
  const [reviewData, setReviewData] = useState({});

  const router = useRouter();
  const reviewModal = useModal(MODAL_KEYS.review);

  const { pid } = router.query;
  const { data } = useReview(pid as string);

  const handleDelete = (id: string) => {
    deleteReview(id);
  };

  const handleUpdateReview = (data: ReviewData) => {
    reviewModal.openModal();
    setReviewData(data);
  };

  const moveToBack = () => {
    router.back();
  };

  const date = new Date(data?.createdAt as string);
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

  return (
    <>
      {data ? (
        <>
          <Container {...props}>
            <ReviewTopBox>
              <Typography fontSize={30}>{data.perfumeName}</Typography>
              <Typography fontSize={23}>{data.perfumeBrandEng}</Typography>
            </ReviewTopBox>

            <ReviewTitleBox>
              <Typography fontSize={20}>{data.title}</Typography>
              <div className="review-info">
                <Typography fontSize={18}>{formattedDate}</Typography>
                <Typography fontSize={18}>by {data.nickname}</Typography>
              </div>
            </ReviewTitleBox>
            <Quote>
              <QuoteLeft />
              <Typography
                variant="h5"
                component="blockquote"
                fontSize="28px"
                margin="0 12px"
                paddingTop="20px"
              >
                {data.title}
              </Typography>
              <QuoteRight />
            </Quote>
            <div>
              {data.photoUrls?.map((photo, index) => (
                <CardMedia
                  component="img"
                  src={photo}
                  alt="review image"
                  width={400}
                  height={400}
                  style={{ minWidth: "400px", minHeight: "400px" }}
                  key={index}
                />
              ))}
            </div>
            <ReviewContent>
              <div className="rating-title">
                <Typography fontWeight="bold" fontSize={21}>
                  AVERAGE
                </Typography>
                <Typography fontWeight="bold" fontSize={21}>
                  SCORE
                </Typography>
              </div>
              <Rating
                sx={{ fontSize: "48px" }}
                value={data.overallRatings ?? 1.5}
                precision={0.5}
                size="large"
              />
            </ReviewContent>

            <Typography fontWeight="bold" fontSize={25}>
              SCORE
            </Typography>
            <ReviewRatingContent>
              <div className="rating-title">
                <Typography fontWeight="bold" fontSize={20}>
                  본연의 향
                </Typography>
                <Typography fontSize={18} color="#474747">
                  SCENT
                </Typography>
              </div>
              <Rating
                sx={{ fontSize: "48px" }}
                value={data.scentRatings ?? 1.5}
                precision={0.5}
                size="large"
              />
            </ReviewRatingContent>
            <ReviewRatingContent>
              <div className="rating-title">
                <Typography fontWeight="bold" fontSize={20}>
                  지속력
                </Typography>
                <Typography fontSize={18} color="#474747">
                  LONGEVITY
                </Typography>
              </div>
              <Rating
                sx={{ fontSize: "48px" }}
                value={data.longevityRatings ?? 1.5}
                precision={0.5}
                size="large"
              />
            </ReviewRatingContent>
            <ReviewRatingContent>
              <div className="rating-title">
                <Typography fontWeight="bold" fontSize={20}>
                  잔향
                </Typography>
                <Typography fontSize={18} color="#474747">
                  SILLAGE
                </Typography>
              </div>
              <Rating
                sx={{ fontSize: "48px" }}
                value={data.sillageRatings ?? 1.5}
                precision={0.5}
                size="large"
              />
            </ReviewRatingContent>

            <ReviewDescription>
              <Typography fontSize={20} fontWeight="light">
                {data.body}
              </Typography>
            </ReviewDescription>
            <div className="button-box">
              <Button
                variant="outlined"
                style={{
                  borderRadius: 0,
                  fontSize: "17px",
                  padding: "10px 40px",
                  margin: "0 1rem",
                }}
                onClick={() => handleUpdateReview(data)}
              >
                수정하기
              </Button>
              <Modal
                modalKey={MODAL_KEYS.review}
                open={reviewModal.isOpen}
                content={
                  <ReviewModal
                    perfumeUuid={data.uuid}
                    perfumeName={data.perfumeName}
                    reviewData={reviewData}
                  />
                }
                fullWidth
                maxWidth="lg"
              />
              <Button
                variant="outlined"
                style={{
                  borderRadius: 0,
                  fontSize: "17px",
                  padding: "10px 40px",
                  margin: "0 1rem",
                }}
                onClick={() => handleDelete}
              >
                삭제하기
              </Button>
            </div>
          </Container>
          <ListButton>
            <Button
              className="list-button"
              variant="contained"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 0,
                fontSize: "17px",
                padding: "10px 40px",
                margin: "0 1rem",
              }}
              onClick={moveToBack}
            >
              목록
            </Button>
          </ListButton>
        </>
      ) : (
        <p>데이터가 없습니다</p>
      )}
    </>
  );
}

const ReviewTopBox = styled.div`
  text-align: center;
  margin: 1.5rem 0;
`;

const ReviewTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 1rem 0;

  & .review-info {
    display: flex;
    align-items: center;

    & p:nth-of-type(1) {
      margin-right: 3rem;
      position: relative;

      &::after {
        display: block;
        content: "";
        height: 18px;
        border-right: 1px solid #000;
        position: absolute;
        top: 50%;
        right: -25px;
        transform: translateY(-50%);
      }
    }
  }
`;

const Quote = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  & > svg {
    min-width: 40px;
    min-height: 40px;
  }
`;

const ReviewRatingContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0.5rem 0;
`;

const ReviewDescription = styled.div`
  border-top: 1px solid #000;
  padding: 1rem 0;
  margin: 1.5rem 0;
`;

const ReviewContent = styled.div`
  padding: 28px 0 28px 0;
  border-bottom: 1px solid #4d4d4d;
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .rating-title {
    display: inline-block;
    padding-right: 22px;
  }
  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: 0;
  }
`;

const ListButton = styled.div`
  text-align: center;
  margin: 1rem 0;
`;
const Container = styled.div`
  border-bottom: 1px solid #000;
  padding: 1rem 0 3rem;

  & .button-box {
    text-align: center;
  }
`;
