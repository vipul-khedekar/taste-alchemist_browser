import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  cursor: pointer;

  img {
    height: 12rem;
    width: 16rem;
    border-left: 0.5rem solid var(--semiDarkPurple);
    border-bottom: 0.5rem solid var(--darkPurple);
    border-radius: 2rem;
    position: relative;
  }

  p {
    padding: 14px;
    position: absolute;
    z-index: 3;
    font-size: 0.85rem;
    font-weight: bold;
    text-align: center;
    color: var(--white);
  }
`;

export const Gradient = styled.div`
  background: linear-gradient(to bottom, #ffffff00, #00000050);
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;
