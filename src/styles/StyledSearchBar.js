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
    height: 2.5rem;
    width: 25rem;
    background: linear-gradient(
      to right,
      var(--darkPurple),
      var(--semiDarkPurple)
    );
    padding: 3px;
    padding-left: 3rem;
    border: none;
    border-radius: 5px;
    outline: none;
    color: var(--silver);
    font-size: 1.1rem;
  }
`;

export const SearchIcon = {
  position: `absolute`,
  top: `20%`,
  left: `2%`,
  color: `var(--darkGreen)`,
  fontSize: `1.5rem`,
  fontWeight: `900`,
};
