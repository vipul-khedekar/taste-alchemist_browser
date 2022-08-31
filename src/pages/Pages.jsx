import { Routes, Route } from "react-router-dom";

import Home from "./Home";

function Pages() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route path={"/cuisine/japanese"} element={<Home />} />
      <Route path={"/cuisine/mexican"} element={<Home />} />
      <Route path={"/cuisine/indian"} element={<Home />} />
      <Route path={"/cuisine/american"} element={<Home />} />
    </Routes>
  );
}

export default Pages;
