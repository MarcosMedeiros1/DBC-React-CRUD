import Item from "./Item";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        {!token ? (
          <>
            <Item name="Home" url="/" />
            <Item name="Cadastrar usuários" url="/usuarios" />
          </>
        ) : (
          <>
            <Item name="Endereço" url="/endereco" />
            <Item name="Pessoas" url="/pessoas" />
          </>
        )}
      </ul>
      {token && <button onClick={handleLogout}>Sair</button>}
    </nav>
  );
};

export default Menu;
