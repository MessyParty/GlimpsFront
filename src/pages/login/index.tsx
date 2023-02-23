import { useRouter } from "next/router";
import { KAKAO_AUTH_URL } from "@/constants/auth";
import { Button } from "@mui/material";

const Login = () => {
  const router = useRouter();

  const login = () => {
    router.push(KAKAO_AUTH_URL);
  };

  return <Button onClick={login}>카카오 계정으로 로그인 </Button>;
};

export default Login;
