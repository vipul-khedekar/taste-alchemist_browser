import Logo from "../images/logo.png";
import { HeaderContainer } from "../styles/StyledHeader";

function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <p>Taste Alchemist</p>
    </HeaderContainer>
  );
}

export default Header;
