import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Cuisine from "../components/Cuisine";
import Searched from "../components/Searched";
import Recipe from "../components/Recipe";

function Pages() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route path={"/cuisine/:type"} element={<Cuisine />} />
      <Route path={"/search-result/:searchedQuery"} element={<Searched />} />
      <Route path={"/recipe/:name"} element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
