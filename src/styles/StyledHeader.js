import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;

  img {
    height: 2rem;
    width: 2rem;
  }

  p {
    color: var(--semiDarkPurple);
    font-weight: bold;
  }
`;
