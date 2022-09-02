import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { CuisineContainer } from "../styles/StyledCuisine";
import Card from "./Card";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  async function getRecipes(cuisineType) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineType}&limit=10`,
      { mode: `cors` }
    );
    const data = await response.json();

    setCuisine(data.results);
  }

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type]);

  return (
    <CuisineContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {cuisine.map((recipe) => {
        return (
          <Link to={`/recipe/${recipe.id}`}>
            <Card key={recipe.id} recipe={recipe} />
          </Link>
        );
      })}
    </CuisineContainer>
  );
}

export default Cuisine;
