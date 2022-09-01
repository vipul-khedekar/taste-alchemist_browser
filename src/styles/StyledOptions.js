import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OptionsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 1.5rem 0;
`;

export const NavLinkStyled = styled(NavLink)`
  background: linear-gradient(105deg, var(--darkPurple), var(--semiDarkPurple));
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
    border: 3px solid var(--white);
  }
`;

export const OptionsIcon = {
  color: `var(--white)`,
  fontSize: `2.5rem`,
};

export const OptionsText = {
  color: `var(--white)`,
  fontSize: `0.8rem`,
};
