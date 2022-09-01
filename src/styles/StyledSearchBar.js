import styled from "styled-components";

export const SearchContainer = styled.form`
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
  }

  input {
    background: linear-gradient(
      to right,
      var(--darkPurple),
      var(--semiDarkPurple)
    );
    height: 2.5rem;
    width: 25rem;
    border: none;
    border-radius: 5px;
    padding: 3px;
    padding-left: 3rem;
    color: var(--silver);
    font-size: 1.1rem;
    outline: none;
  }
`;

export const SearchIcon = {
  position: `absolute`,
  top: `25%`,
  left: `2%`,
  color: `var(--lightOrange)`,
  fontSize: `1.3rem`,
  fontWeight: `900`,
};
