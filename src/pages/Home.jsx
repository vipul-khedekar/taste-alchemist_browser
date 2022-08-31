import Trending from "../components/Trending";
import Specials from "../components/Specials";
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
