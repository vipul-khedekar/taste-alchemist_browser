import { HomeContainer } from "../styles/StyledHome";

import Specials from "./Specials";
import Trending from "./Trending";

function Home() {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Specials />
      <Trending />
    </HomeContainer>
  );
}

export default Home;
