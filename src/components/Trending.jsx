import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import {
  TrendingContainer,
  Header,
  ScrollArea,
} from "../styles/StyledTrending";

import TripleDots from "./loaders/TripleDots";
import Card from "./Card";

function Trending() {
  const [trendingList, setTrendingList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTrending = async () => {
    setIsLoading(true);

    const cache = localStorage.getItem(`trending`);

    if (cache) {
      setTrendingList(JSON.parse(localStorage.getItem(`trending`)));
      setIsLoading(false);
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`,
        { mode: `cors` }
      );
      const data = await response.json();

      localStorage.setItem(`trending`, JSON.stringify(data.recipes));

      setTrendingList(data.recipes);
      setIsLoading(false);
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
        autoplay={{ delay: 2750 }}
      >
        {isLoading && <TripleDots />}

        {trendingList ? (
          trendingList.map((recipe) => {
            return (
              <SwiperSlide key={recipe.id} style={{ width: "18rem" }}>
                <Link to={`/recipe/${recipe.id}`}>
                  <Card recipe={recipe} />
                </Link>
              </SwiperSlide>
            );
          })
        ) : (
          <h4>
            Whoops! Something went wrong while fetching data. Please try
            again...
          </h4>
        )}
      </ScrollArea>
    </TrendingContainer>
  );
}

export default Trending;
