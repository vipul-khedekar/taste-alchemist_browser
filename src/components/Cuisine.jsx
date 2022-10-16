import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { CuisineContainer } from "../styles/StyledCuisine";

import PulsingGrid from "./loaders/PulsingGrid";
import Card from "./Card";

function Cuisine() {
  let params = useParams();

  const [cuisine, setCuisine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRecipes = async (cuisineType) => {
    setIsLoading(true);

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineType}&limit=10`,
      { mode: `cors` }
    );
    const data = await response.json();

    setCuisine(data.results);
    setIsLoading(false);
  };

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
      {isLoading && <PulsingGrid />}

      {cuisine ? (
        cuisine.map((recipe) => {
          return (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <Card recipe={recipe} />
            </Link>
          );
        })
      ) : (
        <h3>
          Whoops! Something went wrong while fetching data. Please try again...
        </h3>
      )}
    </CuisineContainer>
  );
}

export default Cuisine;
