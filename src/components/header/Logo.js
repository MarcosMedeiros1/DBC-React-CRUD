import { IoLogoCodepen } from "react-icons/io";
import { LogoContainer } from './Header.styled';

const Logo = ({ page }) => {
  return (
    <LogoContainer>
      <div>
        <IoLogoCodepen style={{ fontSize: 50 }} />
        <h1>{page}</h1>
      </div>
    </LogoContainer>
  );
};
export default Logo;
