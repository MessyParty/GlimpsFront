import Link from "next/link";
import { KAKAO_AUTH_URL } from "@/constants/auth";

const Login = () => {
  <Link href={KAKAO_AUTH_URL}>
    <span>카카오 계정으로 로그인</span>
  </Link>;
};

export default Login;
