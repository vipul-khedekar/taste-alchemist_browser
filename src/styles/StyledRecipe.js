import styled from "styled-components";
import { motion } from "framer-motion";

export const RecipeContainer = styled.article`
  height: 59vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  margin: 3rem 2rem;
  overflow-y: auto;
`;

export const LeftPanel = styled(motion.section)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  img {
    height: 16rem;
    width: auto;
    border-radius: 2rem;
  }

  span {
    margin-top: -1rem;

    a {
      color: #000000;
      text-decoration: none;
    }
  }
`;

export const Properties = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  p {
    background: linear-gradient(
      105deg,
      var(--darkPurple),
      var(--semiDarkPurple)
    );
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 0.8rem;
    color: var(--white);
    font-size: 1rem;
  }
`;

export const RightPanel = styled(motion.section)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Buttons = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background-color: var(--semiDarkPurple);
    padding: 0.7rem;
    border: transparent;
    border-radius: 0.8rem;
    color: var(--white);
    font-size: 1.1rem;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--white);
    }

    &.active {
      background: linear-gradient(
        105deg,
        var(--darkPurple),
        var(--semiDarkPurple)
      );
      border: 2px solid var(--white);
    }
  }
`;

export const Body = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.1rem;
  }
`;
