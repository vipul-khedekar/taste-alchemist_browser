import {
  GiHamburger,
  GiNoodles,
  GiPizzaSlice,
  GiMonsteraLeaf,
} from "react-icons/gi";
import { FaHome } from "react-icons/fa";

import {
  OptionsContainer,
  NavLinkStyled,
  OptionsIcon,
  OptionsText,
} from "../styles/StyledOptions";

function Options() {
  return (
    <OptionsContainer>
      <NavLinkStyled to={"/"}>
        <FaHome style={OptionsIcon} />
        <p style={OptionsText}>Home</p>
      </NavLinkStyled>

      <NavLinkStyled to={"/cuisine/chinese"}>
        <GiNoodles style={OptionsIcon} />
        <p style={OptionsText}>Chinese</p>
      </NavLinkStyled>

      <NavLinkStyled to={"/cuisine/italian"}>
        <GiPizzaSlice style={OptionsIcon} />
        <p style={OptionsText}>Italian</p>
      </NavLinkStyled>

      <NavLinkStyled to={"/cuisine/indian"}>
        <GiMonsteraLeaf style={OptionsIcon} />
        <p style={OptionsText}>Indian</p>
      </NavLinkStyled>

      <NavLinkStyled to={"/cuisine/american"}>
        <GiHamburger style={OptionsIcon} />
        <p style={OptionsText}>American</p>
      </NavLinkStyled>
    </OptionsContainer>
  );
}

export default Options;
