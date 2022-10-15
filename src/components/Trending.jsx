import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

import {
  TrendingContainer,
  Header,
  ScrollArea,
} from "../styles/StyledTrending";

import Card from "./Card";

function Trending() {
  const [trendingList, setTrendingList] = useState([]);

  const getTrending = async () => {
    const cache = localStorage.getItem(`trending`);

    if (cache) {
      setTrendingList(JSON.parse(localStorage.getItem(`trending`)));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`,
        { mode: `cors` }
      );
      const data = await response.json();

      localStorage.setItem(`trending`, JSON.stringify(data.recipes));

      setTrendingList(data.recipes);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <TrendingContainer>
      <Header>
        <p>Trending...</p>

        <div>
          <p>Scroll</p>
          <AiOutlineDoubleRight style={{ fontSize: `1.8rem` }} />
        </div>
      </Header>

      <ScrollArea>
        {trendingList.map((recipe) => {
          return (
            <Link to={`/recipe/${recipe.id}`}>
              <Card key={recipe.id} recipe={recipe} />
            </Link>
          );
        })}
      </ScrollArea>
    </TrendingContainer>
  );
}

export default Trending;
