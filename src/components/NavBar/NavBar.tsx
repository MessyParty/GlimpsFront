/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, Suspense, lazy } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Logo from "@/components/CustomIcon/Logo";
import { ERROR_PAGE_REGEX } from "@/constants/regex";
import SearchModal from "@/components/SearchModal";
import Modal from "../Modal";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import useLogoutQuery from "@/hooks/queries/useLogoutQuery";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import LoginModal from "../LoginModal";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";
import { getCookie } from "@/utils/cookie";

interface AuthModuleProps {
  loginModalCb: () => void;
  logoutModalCb: () => void;
}

const AuthModule = ({ loginModalCb, logoutModalCb }: AuthModuleProps) => {
  const router = useRouter();
  const [logined, setLogined] = useState<boolean>(false);

  useEffect(() => {
    const token = getCookie(ACCESS_TOKEN_COOKIE);
    // early return
    if (!token) return;
    setLogined(true);
  }, []);

  const mypageHandler = () => {
    router.push("/mypage");
  };

  return logined ? (
    <>
      <IconButton color="primary" aria-label="user" onClick={mypageHandler}>
        <PersonOutlineIcon />
      </IconButton>
      <IconButton color="primary" aria-label="logout" onClick={logoutModalCb}>
        <LogoutOutlined />
      </IconButton>
    </>
  ) : (
    <IconButton color="primary" aria-label="login" onClick={loginModalCb}>
      <LoginOutlined />
    </IconButton>
  );
};

const NavBar = () => {
  const router = useRouter();
  const loginModal = useModal(MODAL_KEYS.login);
  const searchModal = useModal(MODAL_KEYS.search);
  const { authState, logoutHandler } = useLogoutQuery();

  const searchHandler = () => {
    searchModal.openModal();
  };

  const loginHandler = () => {
    loginModal.openModal();
  };

  if (ERROR_PAGE_REGEX.test(router.pathname)) return null;
  return (
    <>
      <LogoContainer>
        <Link href="/">
          <Logo style={{ width: "155px", height: "auto" }} />
        </Link>
      </LogoContainer>
      <NavContainer>
        <Nav>
          <Link href="/about">About</Link>
          <Link href="/best">Best</Link>
          <Link href="/brand">Brand</Link>
          <Link href="/review">Review</Link>
        </Nav>
        <Utils>
          <IconButton
            color="primary"
            aria-label="search"
            onClick={searchHandler}
          >
            <SearchIcon />
          </IconButton>
          {authState === "LOGINED" ? (
            <>
              <IconButton
                color="primary"
                aria-label="user"
                onClick={mypageHandler}
              >
                <PersonOutlineIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="logout"
                onClick={logoutHandler}
              >
                <LogoutOutlined />
              </IconButton>
            </>
          ) : (
            <IconButton
              color="primary"
              aria-label="login"
              onClick={loginHandler}
            >
              <LoginOutlined />
            </IconButton>
          )}
          <AuthModule
            loginModalCb={loginHandler}
            logoutModalCb={logoutHandler}
          />
        </Utils>
      </NavContainer>
      <Modal
        modalKey={MODAL_KEYS.search}
        open={searchModal.isOpen}
        content={<SearchModal />}
      />
      <Modal
        modalKey={MODAL_KEYS.login}
        open={loginModal.isOpen}
        content={<LoginModal />}
      />
    </>
  );
};

const LogoContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto;
  padding-left: 5rem;
  flex-grow: 1;
  & a {
    margin: 0 1rem;
  }
`;
const Utils = styled.div`
  flex-shrink: 0;

  & button {
    margin: 0 10px;
  }
`;

export default NavBar;
