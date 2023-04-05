import { Perfume } from "@/components/CustomIcon";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "@/recoil/auth";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import useLogoutQuery from "@/hooks/queries/useLogoutQuery";
import LoginModal from "@/components/LoginModal";
import { modalOpenState } from "@/recoil/modalState";
import LoginRequiredModal from "@/components/LoginRequiredModal";

export default function Home() {
  const router = useRouter();
  const isLogined = useRecoilValue(loginState);

  const login = () => {
    router.push("/login");
  };

  const logout = () => {
    useLogoutQuery();
  };

  const [, setIsOpen] = useRecoilState(modalOpenState);

  return (
    <>
      <div>Home</div>
      <Perfume />
      {isLogined === false ? (
        <Button onClick={login}>로그인</Button>
      ) : (
        <Button onClick={logout}>로그아웃</Button>
      )}
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        모달창 열기
      </Button>
      <LoginModal />
    </>
  );
}
