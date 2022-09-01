import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

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
    <CuisineContainer>
      {cuisine.map((recipe) => {
        return (
          <Link to={`/cuisine/${params.type}`}>
            <Card key={recipe.id} recipe={recipe} />
          </Link>
        );
      })}
    </CuisineContainer>
  );
}

export default Cuisine;