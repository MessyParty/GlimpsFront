import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import Input from "../Input";

const NicknameUpdateModal = () => {
  const methods = useForm({
    defaultValues: {
      nickname: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Container>
        <Image src="/glims-logo.svg" alt="logo" width={96} height={54} />
        <Typography fontSize={20} padding="22px 0">
          시후 컬렉터님,
        </Typography>
        <Input
          controlProps={{
            name: "nickname",
            rules: {
              required: "필수값입니다!",
              minLength: { value: 1, message: "1글자 이상 입력 해주세요!" },
            },
          }}
          placeholder="수정할 닉네임을 작성해주세요."
          sx={{ borderRadius: 0 }}
        />
        <NicknameUpdateButton>
          <Typography fontSize={18} color="#fff">
            확인
          </Typography>
        </NicknameUpdateButton>
      </Container>
    </FormProvider>
  );
};

export default NicknameUpdateModal;

const Container = styled.div`
  padding: 28px 48px;
  text-align: center;
`;

const NicknameUpdateButton = styled(Button)`
  width: 168px;
  height: 46px;
  background-color: #000;
  border-radius: 0;
`;
