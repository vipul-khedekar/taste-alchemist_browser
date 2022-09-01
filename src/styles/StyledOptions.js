import styled from "styled-components";

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

export const OptionsIcon = {
  color: `white`,
  fontSize: `2.5rem`,
};

export const OptionsText = {
  color: `white`,
  fontSize: `0.8rem`,
};
