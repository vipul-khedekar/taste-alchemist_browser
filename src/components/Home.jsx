import Trending from "./Trending";
import Specials from "./Specials";
import { HomeContainer } from "../styles/StyledHome";

function Home() {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Specials />
      <Trending />
    </HomeContainer>
  );
}

export default Home;
