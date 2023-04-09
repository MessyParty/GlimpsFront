import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { Typography } from "@mui/material";
import { QuoteLeft, QuoteRight } from "../CustomIcon";
import { CardMedia, CardProps } from "@mui/material";

import Rating from "../Rating";
import Tag from "../Tag";
import Button from "../Button";

interface ReviewDetailProps extends CardProps {
  reviewTitle: string;
  author: string;
  score: number;
  tags: string[];
  description?: string;
  imgSrc?: string;
  perfumeName: string;
  perfumeBrand: string;
  createAt: string;
}

export default function ReviewDetail({
  reviewTitle,
  author,
  score,
  tags,
  description,
  imgSrc,
  perfumeName,
  perfumeBrand,
  createAt,
  ...props
}: ReviewDetailProps) {
  const router = useRouter();

  const handleDelete = () => {};
  const handleUpdate = () => {};

  const moveToBack = () => {
    router.back();
  };

  return (
    <>
      <Container {...props}>
        <ReviewTopBox>
          <Typography fontSize={30}>{perfumeName}</Typography>
          <Typography fontSize={23}>{perfumeBrand}</Typography>
        </ReviewTopBox>

        <ReviewTitleBox>
          <Typography fontSize={20}>{reviewTitle}</Typography>
          <div className="review-info">
            <Typography fontSize={18}>{createAt}</Typography>
            <Typography fontSize={18}>{author}</Typography>
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
            {reviewTitle}
          </Typography>
          <QuoteRight />
        </Quote>
        <div>
          <CardMedia
            component="img"
            image={imgSrc}
            alt="review image"
            width={400}
            height={400}
            style={{ minWidth: "400px", minHeight: "400px" }}
          />
        </div>
        <ReviewContent>
          {tags.map((tag, index) => (
            <Tag key={index} content={tag} />
          ))}
        </ReviewContent>
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
            value={1.5}
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
            value={1.5}
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
            value={1.5}
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
            value={1.5}
            precision={0.5}
            size="large"
          />
        </ReviewRatingContent>

        <ReviewDescription>
          <Typography fontSize={20} fontWeight="light">
            {description}
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
            onClick={handleUpdate}
          >
            수정하기
          </Button>
          <Button
            variant="outlined"
            style={{
              borderRadius: 0,
              fontSize: "17px",
              padding: "10px 40px",
              margin: "0 1rem",
            }}
            onClick={handleDelete}
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

    & p:nth-child(1) {
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
