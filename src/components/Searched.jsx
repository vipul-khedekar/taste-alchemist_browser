import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "./Card";
import { SearchedContainer } from "../styles/StyledSearch";

function Searched() {
  const [searchedList, setSearchList] = useState([]);

  let params = useParams();

  async function getQueries(searchQuery) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&limit=10`,
      { mode: `cors` }
    );
    const data = await response.json();
    setSearchList(data.results);
  }

  useEffect(() => {
    getQueries(params.searchedQuery);
  }, [params.searchedQuery]);

  return (
    <SearchedContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchedList.map((recipe) => {
        return (
          <Link to={`/recipe/${recipe.id}`}>
            <Card key={recipe.id} recipe={recipe} />
          </Link>
        );
      })}
    </SearchedContainer>
  );
}

export default Searched;
