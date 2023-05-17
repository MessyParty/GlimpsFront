import { Button, CardMedia, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { authStateAtom } from "@/recoil/authAtom";
import useProfileQuery from "@/hooks/queries/useProfileQuery";
import useMyReviews from "@/hooks/queries/useMyReviews";
import React from "react";
import LikeButton from "@/components/LikeButton";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import ReviewModal from "@/components/ReviewModal";
import Modal from "@/components/Modal";

const Main = () => {
  const { data: profileData } = useProfileQuery();
  const { data: myReviewData } = useMyReviews({});
  const reviewModal = useModal(MODAL_KEYS.review);
  const authState = useRecoilValue(authStateAtom);

  return (
    <Container>
      <ReviewWrapper>
        <div className="best-review">
          <CardMedia
            component="img"
            // image="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
            image={require("../../public/default-perfume.png")}
            alt="review image"
            width={375}
            height={400}
            style={{ minWidth: "375px", minHeight: "400px" }}
          ></CardMedia>
        </div>
      </ReviewWrapper>
      <MyInfoWrapper>
        {authState === "LOGINED" ? (
          <>
            <div className="my-total">
              <HighlightText>{profileData?.nickname} 컬렉터님,</HighlightText>
              <HighlightText>
                지금까지 {profileData?.reviewCnt}개의 향수를
              </HighlightText>
              <HighlightText>수집하고 계시군요!</HighlightText>
            </div>
            <div className="my-best-review">
              <Typography fontSize={24} fontWeight="500">
                My Best Review
              </Typography>
              <div className="my-review-detail">
                {myReviewData && myReviewData.length !== 0 ? (
                  myReviewData.map(
                    ({ uuid, perfumeBrand, perfumeName, body, heartCnt }) => (
                      <React.Fragment key={uuid}>
                        <BrandText>{perfumeBrand}</BrandText>
                        <NameText>{perfumeName}</NameText>
                        <DescriptionText>{body}</DescriptionText>
                        <LikeButton likeCnt={heartCnt} />
                      </React.Fragment>
                    )
                  )
                ) : (
                  <Typography>작성한 리뷰가 없습니다.</Typography>
                )}
              </div>
              <Button
                variant="text"
                style={{ fontSize: "18px", float: "right" }}
                onClick={reviewModal.openModal}
              >
                더 많은 리뷰 남기기 +
              </Button>
            </div>
            <Modal
              modalKey={MODAL_KEYS.review}
              open={reviewModal.isOpen}
              content={<ReviewModal perfumeUuid={""} />}
            />
          </>
        ) : (
          <></>
        )}
      </MyInfoWrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  margin: 100px 0;
`;

const ReviewWrapper = styled.div`
  position: relative;
  border: 1px solid;
  margin-right: 20px;
  width: 750px;

  & > .best-review {
    display: flex;
  }
`;

const MyInfoWrapper = styled.div`
  flex: 1;
  border: 1px solid;
  padding: 20px 15px;

  & > .my-total {
    padding-bottom: 276px;
  }

  & > .my-best-review {
    padding-bottom: 54px;

    & > .my-review-detail {
      padding: 17px 0;
    }
  }
`;

const HighlightText = styled.p`
  font-weight: bold;
  font-size: 22px;
  text-align: left;
  line-height: 1.3;
`;

const BrandText = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
`;

const NameText = styled.span`
  display: block;
  font-weight: 200;
  font-size: 17px;
`;

const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 19px;
  padding: 12px 0;
`;
