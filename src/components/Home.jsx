import Trending from "./Trending";
import Specials from "./Specials";
import { HomeContainer } from "../styles/StyledHome";

function Home() {
  return (
    <HomeContainer>
      <Specials />
      <Trending />
    </HomeContainer>
  );
}

export default Home;
