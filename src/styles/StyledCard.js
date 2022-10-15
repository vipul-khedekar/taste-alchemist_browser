import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.article)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }

  img {
    height: 12rem;
    width: 16rem;
    border-left: 0.5rem solid var(--semiDarkPurple);
    border-bottom: 0.5rem solid var(--darkPurple);
    border-radius: 2rem;
    position: relative;
    filter: brightness(95%);
  }

  p {
    padding: 14px;
    position: absolute;
    z-index: 3;
    color: var(--white);
    font-size: 0.85rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const Gradient = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #ffffff00, #00000050);
  border-radius: 2rem;
  position: absolute;
  z-index: 2;
`;
