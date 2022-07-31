import { HeaderContainer } from "./Header.styled";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = ({ visibility, page }) => {
  return (
    <HeaderContainer>
      <Logo page={page} />
      <Menu visibility={visibility} />
    </HeaderContainer>
  )
}
export default Header
