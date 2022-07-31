import { Ul } from "./Header.styled";
import { FiLogOut } from "react-icons/fi"
import { BsPeopleFill } from "react-icons/bs"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Menu = ({ visibility }) => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <Ul>
        <li style={{ visibility: visibility }}><Link to="/pessoas">Pessoas<BsPeopleFill /></Link></li>
        <li><Link to="/" onClick={handleLogout}>Sair <FiLogOut /></Link></li>
      </Ul>
    </nav >
  );
};

export default Menu;
