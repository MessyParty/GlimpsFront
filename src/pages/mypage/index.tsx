import BrandCard from "@/components/BrandCard";
import Card from "@/components/Card";
import PerfumeCard from "@/components/PerfumeCard";
import ReviewCard from "@/components/ReviewCard";
import useProfileQuery from "@/hooks/queries/useProfileQuery";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const MyPage = () => {
  const { data } = useProfileQuery();

  return (
    <>
      <Wrapper>
        <SummaryText>
          {/* <b>{data?.nickname}님,</b> */}
          <b>시후 컬렉터님,</b>
        </SummaryText>
        <SummaryText>
          오늘까지 <b>27개</b>의 향수를 수집하고 계시군요!
        </SummaryText>
        <NicknameUpdateButton>닉네임 수정</NicknameUpdateButton>
      </Wrapper>
      <Wrapper>
        <ReviewCard
          reviewTitle="처음 분사했을 때의 느낌을 잊지 못해요. 깔끔한 첫 향과 시간이 지난 후의 잔향까지."
          imgSrc="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
          author="lyle"
          score={4.5}
          tags={[
            "고풍러운",
            "고풍스러ddd운",
            "고풍스러운dd",
            "고풍스러운",
            "스러운",
            "고풍스러ddddddddd운",
            "고풍스러운",
            "고풍스dddd러운",
          ]}
          description="삼청동에서 맡았던 향이 자꾸만 떠올라서 새로 하나 마련했어요. 달콤한 스웨이드 향과 차분한 바닐라, 머스크까지 삼청동에서 맡았던 향이 자꾸만 스웨드 향과 차분한 바닐라, 머스크까지 삼청동에서 맡았던 향이 자꾸만 떠올라서 새로 하나 마련했어요. 달콤한 스웨이드 향과 차분한 바닐라, 머스크까지 삼청동에서 맡았던 향이 자꾸만 스웨드 향과 차분한 바닐라, 머스크까지"
        />
      </Wrapper>
      <Wrapper>
        <PerfumeListWrapper>
          <BrandCard
            brandName="브랜드 이름"
            perfumeName="PERFUME NAME"
            score={4.3}
            imgSrc="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
          />
          <BrandCard
            brandName="브랜드 이름"
            perfumeName="PERFUME NAME"
            score={4.3}
            imgSrc="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
          />
          <BrandCard
            brandName="브랜드 이름"
            perfumeName="PERFUME NAME"
            score={4.3}
            imgSrc="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
          />
          <BrandCard
            brandName="브랜드 이름"
            perfumeName="PERFUME NAME"
            score={4.3}
            imgSrc="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
          />
          <BrandCard
            brandName="브랜드 이름"
            perfumeName="PERFUME NAME"
            score={4.3}
            imgSrc="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
          />
        </PerfumeListWrapper>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  padding: 70px 0 70px 0;
  border-bottom: 1px solid #707070;
  text-align: center;

  &:last-of-type {
    border-bottom: 0;
  }
`;

const PerfumeListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 58px 12px;
`;

const NicknameUpdateButton = styled(Button)`
  width: 156px;
  height: 52px;
  font-size: 20px;
  font-weight: 100;
  border: 1px solid;
  border-radius: 0;
  margin-top: 46px;
`;

const SummaryText = styled.p`
  text-align: center;
  font-size: 30px;

  &:first-of-type {
    margin-bottom: 5px;
  }
`;
