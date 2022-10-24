import { Link } from "react-router-dom";

import Logo from "../images/logo.png";

import { HeaderContainer } from "../styles/StyledHeader";

function Header() {
  return (
    <Link to={`/`} style={{ textDecoration: `none` }}>
      <HeaderContainer>
        <img src={Logo} alt="logo" />

        <p>TasteAlchemist</p>
      </HeaderContainer>
    </Link>
  );
}

export default Header;
