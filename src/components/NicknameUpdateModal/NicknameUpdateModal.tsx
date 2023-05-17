import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

const NicknameUpdateModal = () => {
  return (
    <Container>
      <Image src="/glims-logo.svg" alt="logo" width={96} height={54} />
      <Typography fontSize={20}>시후 컬렉터님,</Typography>
      <NicknameUpdateButton onSubmit={}>
        <Typography fontSize={18} color="#fff">
          확인
        </Typography>
      </NicknameUpdateButton>
    </Container>
  );
};

export default NicknameUpdateModal;

const Container = styled.div``;

const NicknameUpdateButton = styled(Button)`
  width: 168px;
  height: 46px;
  background-color: #000;
`;
