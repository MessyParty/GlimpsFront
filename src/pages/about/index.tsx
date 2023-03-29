import Logo from "@/components/CustomIcon/Logo";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo
          style={{ width: "154px", height: "auto", padding: "120px 0 60px 0" }}
        />
        <Typography fontSize={18} textAlign="right" paddingRight="24px">
          잠깐(언뜻) 봄을 뜻하는 'Glimpse'의 축약 형태
        </Typography>
      </LogoWrapper>
      <IntroductionWrapper>
        <IntroductionText>
          오직 느낌에 기반해 추천하고, 추천받던 지난 날의 향수들.
        </IntroductionText>
        <IntroductionText>
          이제 글림스(glims)가 제공하는 객관적인 정보와 회원들이 직접 경험에
          근거하여 작성한 리뷰를 통해
        </IntroductionText>
        <IntroductionText>
          우리가 그 향수를 사랑했던 이유와 그 향수를 사랑해야 할 이유를
          확인해보세요.
        </IntroductionText>
        <IntroductionText style={{ paddingTop: "30px" }}>
          향수를 선택하는 새롭고 스마트한 구매 여정, 오늘부터 바로
          글림스(glims)에서.
        </IntroductionText>
      </IntroductionWrapper>
      <ActionWrapper>
        <div className="right">
          <Typography fontSize={35} fontStyle="bold" paddingTop="176px">
            Rate, Curate
          </Typography>
          <Typography fontSize={24}>객관화되는 나의 향, 나의 취향</Typography>
        </div>
        <div className="left">
          <div className="actions">
            <div>
              <ActionText>Write</ActionText>
              <ActionTextKR>쓰다</ActionTextKR>
            </div>
            <div>
              <ActionText>Rate</ActionText>
              <ActionTextKR>점수를 매기다</ActionTextKR>
            </div>
            <div>
              <ActionText>Select</ActionText>
              <ActionTextKR>선택하다</ActionTextKR>
            </div>
          </div>
          <div className="actions">
            <div>
              <ActionText>Share</ActionText>
              <ActionTextKR>공유하다</ActionTextKR>
            </div>
            <div>
              <ActionText>Collect</ActionText>
              <ActionTextKR>모으다</ActionTextKR>
            </div>
            <div>
              <ActionText>Communicate</ActionText>
              <ActionTextKR>소통하다</ActionTextKR>
            </div>
          </div>
        </div>
      </ActionWrapper>
      <IntroductionWrapper>
        <Bar />
        <IntroductionText>
          나의 소유지만, 동시에 모두가 향유할 수 있는 향수의 독특한 성질에
          글림스(glims)는 주목했습니다.
        </IntroductionText>
        <IntroductionText>
          지금 글림스(glims)에서 내 향수 경험을 쓰고, 점수를 매기고,
          글림스(glims)가 제공하는 해시태그를 사용하여 공유해보세요.
        </IntroductionText>
        <IntroductionText>
          나만의 향수 경험으로 커뮤니티에서 다른 회원들과 소통하며 더 넓은
          향수의 세계로 떠나보는 건 어떨까요?
        </IntroductionText>
      </IntroductionWrapper>
    </Container>
  );
};

export default About;

const Container = styled.div`
  padding: 80px 0;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 296px;
  text-align: center;
  background: url(../../introduction-background-color.png);
`;

const IntroductionWrapper = styled.div`
  width: 100%;
  padding: 98px 86px;
`;

const ActionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 440px;

  & > .right {
    width: 460px;
    text-align: center;
    color: white;
    background: url(../../introduction-background-black.png);
  }

  & > .left {
    flex: 1;
    padding: 110px 80px;
    text-align: center;
    background: url(../../introduction-background-white.png);

    & > .actions {
      display: flex;
      gap: 5rem;

      &: first-of-type {
        padding-bottom: 92px;
      }
    }
  }
`;

const IntroductionText = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

const ActionText = styled.span`
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  padding-bottom: 16px;
  display: block;
`;

const ActionTextKR = styled.span`
  font-size: 20px;
  text-align: left;
  display: block;
`;

const Bar = styled.div`
  width: 200px;
  height: 5px;
  margin-bottom: 24px;
  background-color: black;
`;
