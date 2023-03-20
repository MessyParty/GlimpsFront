import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import Link from "next/link";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import Logo from "../CustomIcon/Logo/Logo";

const NavBar = () => {
  return (
    <div>
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
          <IconButton color="primary" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton color="primary" aria-label="user">
            <PersonOutlineIcon />
          </IconButton>
        </Utils>
      </NavContainer>
    </div>
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
