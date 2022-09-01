import { NavLink } from "react-router-dom";
import {
  GiHamburger,
  GiNoodles,
  GiPizzaSlice,
  GiMonsteraLeaf,
} from "react-icons/gi";

import {
  OptionsContainer,
  NavLinkStyle,
  OptionsIcon,
  OptionsText,
} from "../styles/StyledOptions";

function Options() {
  return (
    <OptionsContainer>
      <NavLink to={"/cuisine/chinese"} style={NavLinkStyle}>
        <GiNoodles style={OptionsIcon} />
        <p style={OptionsText}>Chinese</p>
      </NavLink>
      <NavLink to={"/cuisine/italian"} style={NavLinkStyle}>
        <GiPizzaSlice style={OptionsIcon} />
        <p style={OptionsText}>Italian</p>
      </NavLink>
      <NavLink to={"/cuisine/indian"} style={NavLinkStyle}>
        <GiMonsteraLeaf style={OptionsIcon} />
        <p style={OptionsText}>Indian</p>
      </NavLink>
      <NavLink to={"/cuisine/american"} style={NavLinkStyle}>
        <GiHamburger style={OptionsIcon} />
        <p style={OptionsText}>American</p>
      </NavLink>
    </OptionsContainer>
  );
}

export default Options;
