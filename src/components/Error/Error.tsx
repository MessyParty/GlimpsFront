import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface ErrorProps {
  code: string;
  message: string;
}

const Error = ({ code = "500", message = "Internal Server Error" }) => {
  const router = useRouter();

  const moveToBack = () => {
    router.back();
  };

  return (
    <Container>
      <Logo>glims</Logo>
      <div className="error-info">
        <Code>Error {code}</Code>
        <Message>{message}</Message>
        <Button onClick={moveToBack}>돌아가기</Button>
      </div>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  & > .error-info {
    padding-left: 88px;
    text-align: left;
  }
`;

const Logo = styled.div`
  font-size: 64px;
  font-weight: bold;
  border-right: 1px solid;
  padding: 90px 90px 90px 0;
`;

const Code = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const Message = styled.div`
  font-size: 22px;
  margin-top: 8px;
`;

const Button = styled.button`
  margin-top: 67px;
  color: #fff;
  background-color: #000;
  padding: 19px 45px;
`;
