import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const HeaderWrapper = styled.header`
  height: 70px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 200px;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo src={logo} />
  </HeaderWrapper>
);

export default Header;
