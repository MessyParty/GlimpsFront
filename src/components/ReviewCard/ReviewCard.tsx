import styled from "@emotion/styled";
import { Card, CardMedia, CardProps, Typography } from "@mui/material";
import { ComponentProps } from "react";
import { QuoteLeft, QuoteRight } from "../CustomIcon";
import LikeButton from "../LikeButton";
import Rating from "../Rating";
import Tag from "../Tag";
import Link from "next/link";

interface ReviewCardProps extends CardProps {
  reviewTitle: string;
  author: string;
  score: number;
  tags?: string[];
  description?: string;
  imgSrc?: string;
  LikeButtonProps?: ComponentProps<typeof LikeButton>;
  likeCount?: number;
  uuid?: string;
}

const ReviewCard = ({
  reviewTitle,
  author,
  score,
  tags,
  description,
  imgSrc,
  LikeButtonProps,
  uuid,
  ...props
}: ReviewCardProps) => {
  return (
    <Container {...props} elevation={0}>
      <PerfumeReview>
        <ReviewContent>
          <Quote>
            <QuoteLeft />
            <Link href={`/review/${uuid}`}>
              <Typography
                variant="h5"
                component="blockquote"
                fontSize="28px"
                margin="0 12px"
                paddingTop="20px"
              >
                {reviewTitle}
              </Typography>
            </Link>
            <QuoteRight />
          </Quote>
          <div className="author">by {author}</div>
        </ReviewContent>
        <ReviewContent>
          <div className="rating-title">
            <Typography fontWeight="bold">AVERAGE</Typography>
            <Typography fontWeight="bold">SCORE</Typography>
          </div>
          <Rating
            sx={{ fontSize: "48px" }}
            value={score ?? 1.5}
            precision={0.5}
            size="large"
          />
        </ReviewContent>
        <ReviewContent>
          {tags?.map((tag, index) => (
            <Tag key={index} content={tag} />
          ))}
        </ReviewContent>
        <ReviewContent>
          <Typography fontSize={20}>
            {description?.slice(0, 120) + "..."}
          </Typography>
        </ReviewContent>
      </PerfumeReview>
      <PerfumeImg>
        <CardMedia component="img" image={imgSrc} alt="review image" />
        <div className="likes">
          <LikeButton {...LikeButtonProps} />
        </div>
      </PerfumeImg>
    </Container>
  );
};

export default ReviewCard;

const Container = styled(Card)`
  display: flex;
  padding-top: 10px;

  & > .perfume-img {
    position: relative;
    aspect-ratio: 4/3;

    & > .like-button {
      position: absolute;
      right: 48px;
      bottom: 22px;
    }
  }
`;

const PerfumeReview = styled.div`
  flex-basis: 55%;
`;

const ReviewContent = styled.div`
  padding: 28px 0 28px 0;
  border-bottom: 1px solid #f5f5f5;

  & > .rating-title {
    display: inline-block;
    padding-right: 22px;
  }

  & > .author {
    margin-top: 10px;
    text-align: right;
    font-size: 18px;
  }

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: 0;
  }
`;

const Quote = styled.div`
  display: flex;

  & > svg {
    min-width: 40px;
    min-height: 40px;
  }
`;

const PerfumeImg = styled.div`
  flex-grow: 1;
  flex-basis: 25%;
  position: relative;
  padding-left: 55px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > .likes {
    position: absolute;
    right: 48px;
    bottom: 22px;
  }
`;
