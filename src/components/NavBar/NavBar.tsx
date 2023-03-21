import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Logo from "@/components/CustomIcon/Logo";
import { ERROR_PAGE_REGEX } from "@/constants/regex";
import { useRecoilState } from "recoil";
import { modalOpenState } from "@/recoil/modalState";
import SearchModal from "@/components/SearchModal";
import Modal from "../Modal";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/auth";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import useLogoutQuery from "@/hooks/queries/useLogoutQuery";

const NavBar = () => {
  const router = useRouter();
  const isLogined = useRecoilValue(loginState);
  const [open, setOpen] = useRecoilState(modalOpenState);

  const mypage = () => {
    router.push("/mypage");
  };

  const login = () => {
    // TODO: modal open
  };

  const logout = () => {
    useLogoutQuery();
  };

  if (ERROR_PAGE_REGEX.test(router.pathname)) return null;

  const handleOpen = () => {
    setOpen(true);
  };

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
          <IconButton color="primary" aria-label="search" onClick={handleOpen}>
            <SearchIcon />
            <Modal open={open} content={<SearchModal />} />
          </IconButton>
          {isLogined ? (
            <>
              <IconButton color="primary" aria-label="user" onClick={mypage}>
                <PersonOutlineIcon />
              </IconButton>
              <IconButton color="primary" aria-label="logout" onClick={logout}>
                <LogoutOutlined />
              </IconButton>
            </>
          ) : (
            <IconButton color="primary" aria-label="login" onClick={login}>
              <LoginOutlined />
            </IconButton>
          )}
        </Utils>
      </NavContainer>
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
