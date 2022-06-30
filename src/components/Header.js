import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  max-width: 100%;
  height: 80px;
  padding: 0 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Logo = styled.div`
  width: 170px;
  height: 42px;
`;

const MenuWrap = styled.div`
  width: 1120px;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.li`
  font-size: 18px;
  font-weight: 700;
  list-style: none;
  position: relative;
  color: white;
  a {
    color: white;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Link to={"/"}>
        <Logo
          style={{
            background: `url(https://airbox.co.kr/img/logo-white.svg) no-repeat center / cover`,
          }}
        ></Logo>
      </Link>

      <MenuWrap>
        <Menu>
          <Link to={"/introduce"}>회사소개</Link>
        </Menu>
        <Menu>
          <Link to={"/double"}>이중공간지</Link>
        </Menu>
        <Menu>
          <Link to={"/product"}>제품소개</Link>
        </Menu>
        <Menu>
          <Link to={"/blog"}>블로그</Link>
        </Menu>
        <Menu>
          <Link to={"/cs"}>고객지원</Link>
        </Menu>
        <Menu>
          <Link to={"/shop"}>SHOP</Link>
        </Menu>
        <Menu>
          KOR <i class="fa-solid fa-angle-down"></i>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
