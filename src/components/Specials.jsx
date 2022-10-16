import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

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
      </Header>

      <ScrollArea
        slidesPerView="auto"
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
      >
        {specialsList.map((recipe) => {
          return (
            <SwiperSlide key={recipe.id} style={{ width: "18rem" }}>
              <Link to={`/recipe/${recipe.id}`}>
                <Card recipe={recipe} />
              </Link>
            </SwiperSlide>
          );
        })}
      </ScrollArea>
    </SpecialsContainer>
  );
}

export default Specials;
