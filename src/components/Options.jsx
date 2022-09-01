import { NavLink } from "react-router-dom";
import {
  GiHamburger,
  GiNoodles,
  GiPizzaSlice,
  GiMonsteraLeaf,
} from "react-icons/gi";

import { OptionsContainer } from "../styles/StyledOptions";

function Options() {
  return (
    <OptionsContainer>
      <NavLink to={"/cuisine/chinese"}>
        <GiNoodles />
        <p>Chinese</p>
      </NavLink>
      <NavLink to={"/cuisine/italian"}>
        <GiPizzaSlice />
        <p>Italian</p>
      </NavLink>
      <NavLink to={"/cuisine/indian"}>
        <GiMonsteraLeaf />
        <p>Indian</p>
      </NavLink>
      <NavLink to={"/cuisine/american"}>
        <GiHamburger />
        <p>American</p>
      </NavLink>
    </OptionsContainer>
  );
}

export default Options;
