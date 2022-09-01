import styled from "styled-components";

export const SearchContainer = styled.form`
  background-color: green;
  height: 3.5rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  div {
    position: relative;
  }

  input {
    height: 2rem;
    width: 25rem;
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px;
    padding-left: 2.5rem;
    font-size: 1.1rem;
    outline: none;
  }
`;

export const SearchIcon = {
  position: `absolute`,
  top: `20%`,
  left: `2%`,
  fontSize: `1.1rem`,
};
