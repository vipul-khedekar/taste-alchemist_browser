import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  img {
    height: 13rem;
    width: 20rem;
    border-radius: 2rem;
    position: relative;
    box-shadow: 1px 2px 7px black;
  }

  p {
    padding: 14px;
    position: absolute;
    z-index: 3;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
    color: white;
  }
`;

export const Gradient = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;
