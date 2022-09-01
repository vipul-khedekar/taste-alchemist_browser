import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OptionsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 1.5rem 0;
`;

export const NavLinkStyle = {
  backgroundColor: `pink`,
  height: `5.5rem`,
  width: `5.5rem`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  gap: `0.6rem`,
  borderRadius: `0.8rem`,
  textDecoration: `none`,
};

export const NavLinkStyled = styled(NavLink)`
  background-color: pink;
  height: 5.5rem;
  width: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 0.8rem;
  text-decoration: none;

  &.active {
    border: 3px solid green;
  }
`;

export const OptionsIcon = {
  color: `white`,
  fontSize: `2.5rem`,
};

export const OptionsText = {
  color: `white`,
  fontSize: `0.8rem`,
};
