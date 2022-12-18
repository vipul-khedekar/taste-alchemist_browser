import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchedContainer = styled(motion.main)`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  overflow-y: auto;
`;
