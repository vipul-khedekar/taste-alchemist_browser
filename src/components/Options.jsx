import { NavLink } from "react-router-dom";
import {
  GiHamburger,
  GiNoodles,
  GiChickenLeg,
  GiMonsteraLeaf,
} from "react-icons/gi";

import { OptionsContainer } from "../styles/StyledOptions";

function Options() {
  return (
    <OptionsContainer>
      <NavLink to={"/cuisine/japanese"}>
        <GiNoodles />
        <p>Japanese</p>
      </NavLink>
      <NavLink to={"/cuisine/mexican"}>
        <GiChickenLeg />
        <p>Mexican</p>
      </NavLink>
      <NavLink to={"/cuisine/indian"}>
        <GiMonsteraLeaf />
        <p>South Indian</p>
      </NavLink>
      <NavLink to={"/cuisine/american"}>
        <GiHamburger />
        <p>American</p>
      </NavLink>
    </OptionsContainer>
  );
}

export default Options;
