import { KAKAO_AUTH_URL } from "@/constants/auth";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import KakaoLogin from "../CustomIcon/KakaoLogin";
import Logo from "../CustomIcon/Logo";
import Modal from "../Modal";

const LoginModal = () => {
  const router = useRouter();

  const login = () => {
    router.push(KAKAO_AUTH_URL);
  };

  const content = (
    <>
      <Container>
        <Logo style={{ width: "154px", height: "auto", padding: "0 100px" }} />
        <Typography fontSize={20} padding="14px 50px 80px 50px">
          로그인 후 나만의 향수를 찾아보세요!
        </Typography>
        // TODO: 아이콘 레이아웃 수정 필요
        <KakaoLoginButton startIcon={<KakaoLogin />} onClick={login}>
          <Typography fontSize={18}>카카오로 로그인하기</Typography>
        </KakaoLoginButton>
      </Container>
    </>
  );

  return <Modal open={true} content={content}></Modal>;
};

export default LoginModal;

const Container = styled.div`
  padding: 70px 26px;
  text-align: center;
`;

const KakaoLoginButton = styled(Button)`
  width: 300px;
  height: 54px;
  background-color: #fee500;
`;
