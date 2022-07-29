import Item from "./Item";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Ul } from './Header.styled';
import { ButtonSecondary } from "../button/Button";

const Menu = () => {
  const token = localStorage.getItem("token");
  const { handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <Ul>
        {!token ? (
          <>
            <Item name="Login" url="/" />
            <Item name="Cadastrar usuários" url="/usuarios" />
          </>
        ) : (
          <>
            <Item name="Endereço" url="/endereco" />
            <Item name="Pessoas" url="/pessoas" />
          </>
        )}
        {token && <ButtonSecondary padding={"6px 8px"} onClick={handleLogout}>Sair</ButtonSecondary>}
      </Ul>
    </nav>
  );
};

export default Menu;
