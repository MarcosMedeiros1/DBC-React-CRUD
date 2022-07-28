import Logo from "./Logo";
import Menu from "./Menu";
import { ContainerHeader } from './Header.styled';

const Header = () => {
  return (
    <ContainerHeader>
      <Logo />
      <Menu />
    </ContainerHeader>
  );
};
export default Header;
