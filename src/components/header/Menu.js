import Item from "./Item";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Nav, Ul } from './Header.styled';

const Menu = () => {
  const token = localStorage.getItem("token");
  const { handleLogout } = useContext(AuthContext);
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
            <Item name="Endereço" url="/endereco" />
            <Item name="Pessoas" url="/pessoas" />
          </>
        )}
      </Ul>
      {token && <button onClick={handleLogout}>Sair</button>}
    </Nav>
  );
};

export default Menu;
