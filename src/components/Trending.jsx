import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

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
      </Header>

      <ScrollArea
        slidesPerView="auto"
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {trendingList.map((recipe) => {
          return (
            <SwiperSlide key={recipe.id} style={{ width: "18rem" }}>
              <Link to={`/recipe/${recipe.id}`}>
                <Card recipe={recipe} />
              </Link>
            </SwiperSlide>
          );
        })}
      </ScrollArea>
    </TrendingContainer>
  );
}

export default Trending;
