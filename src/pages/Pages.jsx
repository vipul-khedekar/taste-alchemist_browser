import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../components/Home";
import Cuisine from "../components/Cuisine";
import Searched from "../components/Searched";
import Recipe from "../components/Recipe";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route exact path={"/"} element={<Home />} />

        <Route path={"/cuisine/:type"} element={<Cuisine />} />

        <Route path={"/search-result/:searchedQuery"} element={<Searched />} />

        <Route path={"/recipe/:id"} element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
