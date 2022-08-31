import { useState, useEffect } from "react";
import { Section, Header } from "../styles/StyledTrending";

import Card from "./Card";

function Trending() {
  const [trendingList, setTrendingList] = useState([]);

  async function getTrending() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`,
      { mode: `cors` }
    );
    const data = await response.json();
    setTrendingList(data.recipes);
  }

  useEffect(() => {
    getTrending();
  }, []);

  console.log(trendingList);

  return (
    <Section>
      <Header>Trending</Header>
      {trendingList.map((recipe) => {
        return <Card key={recipe.id} recipe={recipe} />;
      })}
    </Section>
  );
}

export default Trending;
