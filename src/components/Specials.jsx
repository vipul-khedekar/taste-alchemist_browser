import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

import {
  SpecialsContainer,
  Header,
  ScrollArea,
} from "../styles/StyledSpecials";

import Card from "./Card";

function Specials() {
  const [specialsList, setSpecialsList] = useState([]);

  const getSpecials = async () => {
    const cache = localStorage.getItem(`specials`);

    if (cache) {
      setSpecialsList(JSON.parse(localStorage.getItem(`specials`)));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=dessert&limit=10`,
        { mode: `cors` }
      );
      const data = await response.json();

      localStorage.setItem(`specials`, JSON.stringify(data.results));

      setSpecialsList(data.results);
    }
  };

  useEffect(() => {
    getSpecials();
  }, []);

  return (
    <SpecialsContainer>
      <Header>
        <p>Today's Special, try out now!</p>
        <div>
          <p>Scroll</p>
          <AiOutlineDoubleRight style={{ fontSize: `1.8rem` }} />
        </div>
      </Header>

      <ScrollArea>
        {specialsList.map((recipe) => {
          return (
            <Link to={`/recipe/${recipe.id}`}>
              <Card key={recipe.id} recipe={recipe} />
            </Link>
          );
        })}
      </ScrollArea>
    </SpecialsContainer>
  );
}

export default Specials;
