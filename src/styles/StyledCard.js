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
    border-left: 0.5rem solid orange;
    border-bottom: 0.5rem solid orange;
    border-radius: 2rem;
    position: relative;
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
