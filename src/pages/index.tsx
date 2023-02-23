import { Perfume } from "@/components/CustomIcon";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/auth";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import useLogoutQuery from "@/hooks/queries/useLogoutQuery";

export default function Home() {
  const router = useRouter();
  const isLogined = useRecoilValue(loginState);

  const login = () => {
    router.push("/login");
  };

  const logout = () => {
    useLogoutQuery();
  };

  return (
    <>
      <div>Home</div>
      <Perfume />
      {isLogined === false ? (
        <Button onClick={login}>로그인</Button>
      ) : (
        <Button onClick={logout}>로그아웃</Button>
      )}
    </>
  );
}
