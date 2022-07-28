import { IoLogoCodepen } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LogoContainer } from './Header.styled';

const Logo = () => {
  const { auth } = useContext(AuthContext)
  let link = '';
  !auth ? link = "/" : link = "/pessoas";

  return (
    <LogoContainer>
      <Link to={link}>
        <IoLogoCodepen style={{ fontSize: 50 }} />
      </Link>
    </LogoContainer>
  );
};
export default Logo;
