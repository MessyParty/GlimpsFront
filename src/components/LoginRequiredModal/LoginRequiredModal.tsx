import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import Logo from "../CustomIcon/Logo";

const LoginRequiredModal = () => {
  return (
    <Container>
      <Logo style={{ width: "154px", height: "auto", padding: "0 100px" }} />
      <Typography fontSize={20} paddingTop="34px">
        로그인이 필요한 기능입니다.
      </Typography>
      <Typography fontSize={20} paddingBottom="42px">
        로그인 하시겠습니까?
      </Typography>
      <ConfirmButton>확인</ConfirmButton>
    </Container>
  );
};

export default LoginRequiredModal;

const Container = styled.div`
  padding: 70px 26px;
  text-align: center;
`;

const ConfirmButton = styled(Button)`
  width: 168px;
  height: 54px;
  font-size: 18px;
  font-weight: 100;
  color: white;
  background-color: black;
  border-radius: 0;
`;
