import { useState, useEffect } from "react";

import {
  SpecialsContainer,
  Header,
  ScrollArea,
} from "../styles/StyledSpecials";

import Card from "./Card";

function Specials() {
  const [specialsList, setSpecialsList] = useState([]);

  async function getSpecials() {
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
  }

  useEffect(() => {
    getSpecials();
  }, []);

  return (
    <SpecialsContainer>
      <Header>Today's Special, try out now!</Header>
      <ScrollArea>
        {specialsList.map((recipe) => {
          return <Card key={recipe.id} recipe={recipe} />;
        })}
      </ScrollArea>
    </SpecialsContainer>
  );
}

export default Specials;
