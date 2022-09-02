import styled from "styled-components";

export const SpecialsContainer = styled.section`
  padding: 1.5rem;
  margin-top: -1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.1rem;
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-right: -0.3rem;
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;

export const ScrollArea = styled.section`
  height: 14rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 3px;
  overflow-x: scroll;
`;
