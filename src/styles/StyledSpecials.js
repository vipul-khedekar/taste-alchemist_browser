import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SpecialsContainer = styled.section`
  padding: 1.5rem;
  margin-top: -1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    background: linear-gradient(
      105deg,
      var(--darkPurple),
      var(--semiDarkPurple)
    );
    font-size: 1.1rem;
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ScrollArea = styled(Swiper)`
  height: 14rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 3px;
`;
