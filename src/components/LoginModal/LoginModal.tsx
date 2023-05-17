import { KAKAO_AUTH_URL } from "@/constants/auth";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import KakaoLogin from "../CustomIcon/KakaoLogin";
import Image from "next/image";

const LoginModal = () => {
  const router = useRouter();

  const login = () => {
    // router.push(KAKAO_AUTH_URL);
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <Image src="/glims-logo.svg" alt="logo" width={96} height={54} />
      <Typography fontSize={20} padding="14px 50px 80px 50px">
        로그인 후 나만의 향수를 찾아보세요!
      </Typography>
      <KakaoLoginButton startIcon={<KakaoLogin />} onClick={login}>
        <Typography fontSize={18}>카카오로 로그인하기</Typography>
      </KakaoLoginButton>
    </Container>
  );
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

  & > .MuiButton-startIcon {
    position: absolute;
    left: 1.5rem;
  }
`;
