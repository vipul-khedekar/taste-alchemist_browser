import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Cuisine from "../components/Cuisine";
import Searched from "../components/Searched";

function Pages() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route path={"/cuisine/:type"} element={<Cuisine />} />
      <Route path={"/search-result/:searchedQuery"} element={<Searched />} />
    </Routes>
  );
}

export default Pages;
