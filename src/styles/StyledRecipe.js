import styled from "styled-components";

export const RecipeContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const Properties = styled.div`
  p {
    background-color: blue;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 3px;
    font-size: 1.1rem;
  }
`;

export const Buttons = styled.div`
  button {
    background-color: orange;
    border: 2px solid black;
    padding: 3px;
    font-size: 1.5rem;

    &.active {
      background-color: blue;
    }
  }
`;

export const Body = styled.div``;
