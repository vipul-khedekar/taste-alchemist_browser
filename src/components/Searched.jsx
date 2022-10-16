import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { SearchedContainer } from "../styles/StyledSearch";

import PulsingGrid from "./loaders/PulsingGrid";
import Card from "./Card";

function Searched() {
  let params = useParams();

  const [searchedList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getQueries = async (searchQuery) => {
    setIsLoading(true);

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&limit=10`,
      { mode: `cors` }
    );
    const data = await response.json();

    setSearchList(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getQueries(params.searchedQuery);
  }, [params.searchedQuery]);

  return (
    <SearchedContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {isLoading && <PulsingGrid />}

      {searchedList ? (
        searchedList.map((recipe) => {
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
    </SearchedContainer>
  );
}

export default Searched;
