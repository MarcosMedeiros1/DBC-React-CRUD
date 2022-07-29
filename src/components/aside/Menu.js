import Item from "./Item";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Ul } from './Aside.styled';
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
      </Ul>
      {token && <ButtonSecondary padding={"6px 16px"} onClick={handleLogout}>Sair</ButtonSecondary>}
    </nav>
  );
};

export default Menu;
