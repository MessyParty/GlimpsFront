import { Button, CardMedia, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Main = () => {
  return (
    <Container>
      <ReviewWrapper>
        <div className="best-review">
          <CardMedia
            component="img"
            image="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
            alt="review image"
            width={375}
            height={400}
            style={{ minWidth: "375px", minHeight: "400px" }}
          ></CardMedia>
        </div>
      </ReviewWrapper>
      <MyInfoWrapper>
        <div className="my-total">
          <HighlightText>시후 컬렉터님,</HighlightText>
          <HighlightText>지금까지 27개의 향수를</HighlightText>
          <HighlightText>수집하고 계시군요!</HighlightText>
        </div>
        <div className="my-best-review">
          <Typography fontSize={24} fontWeight="500">
            My Best Review
          </Typography>
          <div className="my-review-detail">
            <BrandText>NONFICTION</BrandText>
            <NameText>GENTLE NIGHT</NameText>
            <DescriptionText>
              삼청동에서 맡았던 향이 자꾸만 떠올라서 새로 하나 마련했어요.
              달콤한 스웨이드 향과 차분한 바닐라, 머스크까지...
            </DescriptionText>
            <div>like button</div>
          </div>
          <Button variant="text" style={{ fontSize: "18px", float: "right" }}>
            더 많은 리뷰 남기기 +
          </Button>
        </div>
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
>>>>>>> Stashed changes
