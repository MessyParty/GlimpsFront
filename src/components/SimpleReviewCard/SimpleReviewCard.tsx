/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import LikeButton from "../LikeButton";
import Rating from "../Rating";
import { Divider, Typography } from "@mui/material";

interface SimpleReviewCardProps {
  imgSrc: string;
  likeCnt: number;
  title: string;
  score: number;
  body?: string;
  nickname?: string;
  createdAt?: string;
}

const SimpleReviewCard = ({
  imgSrc,
  likeCnt,
  title,
  score,
  body,
  nickname,
  createdAt,
}: SimpleReviewCardProps) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <div className="imgs">
          <img src={imgSrc} alt="review image" />
        </div>
        <div className="likes">
          <LikeButton likeCnt={likeCnt} />
        </div>
      </ImgWrapper>
      <InfoWrapper>
        <Rating value={score} precision={0.5} sx={{ fontSize: "30px" }} />
        <Typography variant="h5" fontWeight="bolder">
          {title}
        </Typography>
        <Typography>{body}</Typography>
        <Meta>
          {createdAt ? (
            <>
              <Typography>{createdAt}</Typography>
              <Divider orientation="vertical" flexItem />
            </>
          ) : null}
          <Typography>by {nickname}</Typography>
        </Meta>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default SimpleReviewCard;

const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  padding: 10px 0;
  height: 300px;
  max-height: 300px;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  .likes {
    display: flex;
    align-items: center;
  }
  gap: 10px;
  max-width: 30%;
  height: 100%;
  & > .imgs {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

const Meta = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
