import Item from "./Item";
import { Nav, Ul } from './Aside.styled';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Menu = () => {
  const { handleLogout } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  return (
    <Nav>
      <Ul>
        {!token ? (
          <>
            <Item name="Login" url="/" />
            <Item name="Cadastrar usuários" url="/usuarios" />
          </>
        ) : (
          <>
            <Item name="Pessoas" url="/pessoas" />
            <Item name="Endereços" url="/enderecos" />
            <Item name="Sair" url="" click={handleLogout}>Sair</Item>
          </>
        )}
      </Ul>
    </Nav>
  );
};

export default Menu;
